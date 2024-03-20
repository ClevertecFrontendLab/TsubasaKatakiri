import React, { useEffect, useState } from 'react';
import classes from './calendar-page.module.scss';
import LayoutBlock from '@components/layout/layout';
import { Badge, Button, Calendar, Modal } from 'antd';
import { CalendarMode } from 'antd/lib/calendar/generateCalendar';
import type { Moment } from 'moment';
import moment from 'moment';
import 'moment/locale/ru';
import ru from 'antd/es/date-picker/locale/ru_RU';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setLoadingApp } from '@redux/appUtilSlice';
import { useLazyGetTrainingsQuery } from '@redux/trainingAPISlice';
import { history } from '@redux/configure-store';
import ModalFeedbackLoadFail from '@components/modal/modal-feedback-load-fail/modal-feedback-load-fail';
import { useLazyGetTrainingsListQuery } from '@redux/catalogsAPISlice';
import ModalAddTraining from '@components/modal/modal-add-training/modal-add-training';
import ExcersizeDrawer from '@components/excercise-drawer/excercise-drawer';
import { dateTransform } from '../../helpers/date-helpers';
import { updateTrainingCatalog } from '@redux/catalogsSlice';
import { TrainingList } from '../../types/training-list';
import { colorizeBadge } from '../../helpers/badge-helpers';
import { Boundaries } from '../../types/boundaries';
import { Training } from '../../types/training';
import { setIsLoaded, setTrainingData } from '@redux/trainingsSlice';
import { CloseOutlined, SettingOutlined } from '@ant-design/icons';
import ModalTrainingFail from '@components/modal/modal-training-fail/modal-training-fail';
import { useWindowWidth } from '@hooks/use-window-width';
import './calendar-page.css';

moment.updateLocale('ru', {
    monthsShort: 'Янв Фев Мар Апр Май Июн Июл Авг Сен Окт Ноя Дек'.split(' '),
    weekdaysMin:'Вс Пн Вт Ср Чт Пт Сб'.split(' '),
    week: { dow: 1 },
})


const CalendarPage: React.FC = () => {
    const {trainingsAll, isLoaded} = useAppSelector(state => state.trainingData);
    const dispatch = useAppDispatch();
    const [getTrainings, {data, isLoading, error}] = useLazyGetTrainingsQuery();
    const [getTrainingsList, {data: dataList, isLoading: isLoadingList, error: errorList}] = useLazyGetTrainingsListQuery();
    const [isFailOpen, setIsFailOpen] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [currentDate, setCurrentDate] = useState<Date | null>(null)
    const [openDrawer, setOpenDrawer] = useState(false);
    const [trainingOption, setTrainingOption] = useState<string>('')
    const [boundariesObject, setBoundariesObject] = useState<Boundaries>({
        posX: 0,
        posY: 0,
        height: 0,
        width: 0
    })
    const [activeCellTrainingList, setActiveCellTrainingList] = useState<Training[]>([]);
    const [isEditMode, setIsEditMode] = useState<boolean>(false); 
    const [isOld, setIsOld] = useState<boolean>(false);
    const [isLoadFail, setIsLoadFail] = useState<boolean>(false);
    const [isSaveFail, setIsSaveFail] = useState<boolean>(false);

    const isMobile = useWindowWidth();

    


    useEffect(() => {
        if(!isLoaded){
            console.log(isLoaded);
            dispatch(setLoadingApp(true));
            getTrainings();
        }
    }, [])

    useEffect(() => {
        if(!isLoaded){
            if(data){
                console.log(data);
                dispatch(setLoadingApp(false));
                dispatch(setTrainingData(data));
                dispatch(setIsLoaded(true));
            } else if(error){
                dispatch(setLoadingApp(false));
                if(('status' in error) && (error.status === 403)){
                    history.push('/auth');
                }
                else setIsFailOpen(true);
            }
        }
        getTrainingsList();
    }, [isLoaded, data])

    useEffect(() => {
        if(dataList){
            dispatch(updateTrainingCatalog(dataList));
            dispatch(setLoadingApp(false));
        } else if(errorList){
            dispatch(setLoadingApp(false));
            onListLoadFail()
        }
    }, [dataList, isLoadingList, errorList, dispatch])

    const onListLoadFail = () => {
        setIsLoadFail(true);
    }

    const onOkListLoadFail = () => {
        dispatch(setLoadingApp(true));
        getTrainingsList();
    }

    const onOkTrainingSaveFail = () => {
        setIsModalOpen(false);
    }


    //find trainings
    const filterTrainings = (data: Training[], dateCell: string) => {
        return data.filter((training) => {
            if (typeof training.date === 'number') {
                const date = new Date(training.date);
                const dateString = date.toLocaleDateString();
                const dateStringFormat: string = dateString.split('.').reverse().join('-');
                return dateStringFormat === dateCell;
            }
            return training.date.slice(0, 10) === dateCell;
        });
    }


    //select cell
    const onSelect = (value: Moment, event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        const bounding = event.currentTarget.getBoundingClientRect();
        const boundaries: Boundaries = {
            posX: bounding.x,
            posY: bounding.y,
            height: bounding.height,
            width: bounding.width,
        }
        setBoundariesObject(boundaries);
        setCurrentDate(value.toDate());
        
        const cellDate = value.format('YYYY-MM-DD');
        const trainingList: Training[] = filterTrainings(trainingsAll, cellDate);
        setActiveCellTrainingList(trainingList);
        setIsModalOpen(true);
    }


    const handleMonthChange = () => {
        setIsModalOpen(false);
    }


    //rendering calendar cells
    const dateFullCellRender = (moment: Moment) => {
        const cellDate = moment.format('YYYY-MM-DD');
        const listData = filterTrainings(trainingsAll, cellDate);
        const date = moment.date();
        return (
            <div className={`${classes.eventsContainer} ${classes.fullCellRender} ${listData.length > 0 ? classes.cellTrainingExist : ''}`} onClick={(event) => onSelect(moment, event)}>
                {date < 10 ? date : `${date}`}
            </div>
        );
    }

    const dateCellRender= (moment: Moment) => {
        const cellDate = moment.format('YYYY-MM-DD');
        const listData = filterTrainings(trainingsAll, cellDate);
        return (
            <>
                <div className={classes.eventsContainer} onClick={(event) => onSelect(moment, event)}/>
                <ul className={classes.events}>
                    {listData && listData.map((item, index) => (
                        <li key={index}>
                            <Badge color={colorizeBadge(item.name)} text={item.name} style={{fontSize: '12px'}}/>
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <LayoutBlock>
            <div className={classes.calendarWrapper}>
                <div className={classes.settingsBar}>
                    {!isMobile
                        ? <Button className={classes.headerSettings} type='text' icon={<SettingOutlined />}>{!isMobile && 'Настройки'}</Button>
                        : <Button className={classes.headerSettings} type='default' shape='circle' icon={<SettingOutlined />}/>
                    }
                </div>
                <ModalFeedbackLoadFail isOpen={isFailOpen} setIsOpen={setIsFailOpen}/>
                <ModalTrainingFail isOpened={isLoadFail} setIsOpened={setIsLoadFail} saveMode={false} onOk={onOkListLoadFail}/>
                <ModalTrainingFail isOpened={isSaveFail} setIsOpened={setIsSaveFail} saveMode={true} onOk={onOkTrainingSaveFail}/>
                <ModalAddTraining isOpen={isModalOpen} setIsOpen={setIsModalOpen} date={currentDate} setOpenDrawer={setOpenDrawer} trainingType={trainingOption} setTrainingType={setTrainingOption} boundaries={boundariesObject} cellTrainingList={activeCellTrainingList} setCellTrainingList={setActiveCellTrainingList} isEditMode={isEditMode} setIsEditMode={setIsEditMode} isOld={isOld} setIsOld={setIsOld} setIsSaveFail={setIsSaveFail}/>
                <ExcersizeDrawer isOpen={openDrawer} setIsOpen={setOpenDrawer} date={dateTransform(currentDate)} trainingOption={trainingOption} isEditMode={isEditMode} isOld={isOld}/>
                <Calendar
                    locale={ru}
                    dateFullCellRender={isMobile ? dateFullCellRender : undefined}
                    dateCellRender={dateCellRender}
                    fullscreen={!isMobile}
                    style={{zIndex: 0}}
                    onPanelChange={handleMonthChange}
                    className={'training-calendar'}
                />
            </div>
        </LayoutBlock>
    );
};

export default CalendarPage;