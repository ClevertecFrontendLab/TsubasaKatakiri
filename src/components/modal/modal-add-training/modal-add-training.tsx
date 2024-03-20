import React, { useEffect, useLayoutEffect, useState } from 'react';
import classes from './modal-add-training.module.scss'
import { Badge, Button, Dropdown, List, MenuProps, Modal, Select, Space, Typography } from 'antd';
import Empty from '../../../resources/icons/empty-image.svg?react';
import { ArrowLeftOutlined, CloseOutlined, DownOutlined, EditOutlined } from '@ant-design/icons';
import ExcersizeDrawer from '@components/excercise-drawer/excercise-drawer';
import { useLazyGetTrainingsListQuery } from '@redux/catalogsAPISlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { TrainingList } from '../../../types/training-list';
import { Boundaries } from '../../../types/boundaries';
import { setTrainingCreateData } from '@redux/trainingCreateSlice';
import { Training, TrainingTypeData } from '../../../types/training';
import { colorizeBadge } from '../../../helpers/badge-helpers';
import './ant-styles.css';
import { useCreateTrainingMutation, useEditTrainingMutation, useLazyGetTrainingsQuery } from '@redux/trainingAPISlice';
import { dateTransformA, dateTransformDashed } from '../../../helpers/date-helpers';
import { setTrainingData } from '@redux/trainingsSlice';
import { useWindowWidth } from '@hooks/use-window-width';

interface IProps{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    date: Date | null,
    setOpenDrawer: (isOpenDrawer: boolean) => void,
    trainingType: string,
    setTrainingType: (trainingType: string) => void,
    boundaries: Boundaries,
    cellTrainingList: Training[],
    setCellTrainingList: (cellTrainingList: Training[]) => void,
    isEditMode: boolean,
    setIsEditMode: (isEditMode: boolean) => void,
    isOld: boolean,
    setIsOld: (isOld: boolean) => void,
    setIsSaveFail: (isSaveFail: boolean) => void
}


const ModalAddTraining: React.FC<IProps> = ({isOpen, setIsOpen, date, setOpenDrawer, trainingType, setTrainingType, boundaries, cellTrainingList, setCellTrainingList, setIsSaveFail, setIsEditMode, isOld, setIsOld} : IProps) => {
    const [addMode, setAddMode] = useState<boolean>(false);
    const {trainingCatalog} = useAppSelector(state => state.catalogData);
    const [trainingList, setTrainingList] = useState<TrainingList[]>([]);
    const [posX, setPosX] = useState<number>(0);
    const [posY, setPosY] = useState<number>(0);
    const trainings = useAppSelector((state) => state.trainingCreateData.training);
    const dispatch = useAppDispatch();
    const [excercises, setExcercises] = useState<string[]>([])
    const [createTraining, {data, isLoading, error}] = useCreateTrainingMutation();
    const [getTrainings, {data: TrainingData}] = useLazyGetTrainingsQuery();
    const {trainingsAll} = useAppSelector(state => state.trainingData);
    const [updateMode, setUpdateMode] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [editableTraining, setEditableTraining] = useState<Training | null>(null);
    const [editTraining, {data: editData, isLoading: editIsLoading, error: editError}] = useEditTrainingMutation();

    const isMobile = useWindowWidth();

    const dateTransform = (date: Date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`
    }

    //save training
    const onSave = () => {
        console.log(editableTraining);
        if(trainings){
            console.log(isOld);
            const saveObject: Training = {
                name: trainings.type,
                date: trainings.date.split('.').reverse().join('-').concat('T12:00:00.000Z'),
                isImplementation: isOld,
                exercises: trainings.excercises,
            }
            setLoading(true);
            if(editableTraining){
                saveObject._id = editableTraining._id;
                // saveObject.isImplementation = true;
                editTraining(saveObject);
            } else {
                createTraining(saveObject);
            }
        }
    }

    useLayoutEffect(() => {
        if(data){
            console.log(data);
            setIsEditMode(false);
            setLoading(false);
            getTrainings();
            setCellTrainingList([...cellTrainingList, data]);
            setAddMode(false);
        }else if (error) {
            console.log(error);
            setLoading(false);
            setAddMode(false);
            setIsSaveFail(true);
        }
    }, [data, error])

    useLayoutEffect(() => {
        if(editData){
            console.log(editData);
            setIsEditMode(false);
            setLoading(false);
            getTrainings();
            const filteredList = cellTrainingList.filter(item => item.name !== editData?.name)
            const filteredList2 = [...filteredList, editData];
            console.log(filteredList2);
            setCellTrainingList(filteredList2);
            setEditableTraining(null);
            setAddMode(false);
        }else if (editError) {
            console.log(editError);
            setLoading(false);
            setAddMode(false);
            setIsSaveFail(true);
        }
    }, [editData, editError])

    console.log(cellTrainingList);

    useEffect(() => {
        if(TrainingData){
            dispatch(setTrainingData(TrainingData));
        }
    }, [TrainingData])


    //close modal
    const handleClose = () => {
        setTrainingType('');
        setAddMode(false);
        setIsOpen(false);
        setIsEditMode(false);
        setExcercises([]);
        dispatch(setTrainingCreateData(null));
    }


    const filterData = (data: Training[], date: Date | null, label: string) => {
        const transformedDate = dateTransformDashed(date);
        const primaryFilter = data.filter((item) => {
            if (typeof item.date === 'number') {
                const date = new Date(item.date);
                const dateString = date.toLocaleDateString('ru');
                const dateStringFormat: string = dateString.split('.').reverse().join('-');
                return dateStringFormat === transformedDate;
            }
            return item.date.slice(0, 10) === transformedDate;
        })
        return primaryFilter.find(item => item.name === label);
    }


    const handleSelect = (value: string, option: TrainingList) => {
        setTrainingType(option.label);
        const filteredData: Training | undefined = filterData(trainingsAll, date, option.label);
        if(filteredData){
            const trainingData: TrainingTypeData = {
                type: option.label,
                date: dateTransformA(date),
                excercises: filteredData.exercises
            }
            setEditableTraining(filteredData);
            dispatch(setTrainingCreateData(trainingData));
        } else {
            setEditableTraining(null);
            dispatch(setTrainingCreateData(null));
        }
    }

    const handleSwitchAddMode = () => {
        setAddMode(!addMode);
        setTrainingType('');
        dispatch(setTrainingCreateData(null));
    }

    useEffect(() => {
        const list = trainingCatalog.map(item => {
            return {label: item.name, value: item.key};
        })
        const trainingTypeNames= cellTrainingList ? cellTrainingList.map((item) => item.name) : [];
        const filteredList = list.filter(item => !trainingTypeNames.includes(item.label))
        setTrainingList(filteredList);
    }, [trainingCatalog, cellTrainingList])

    
    //boundaries calculations
    useLayoutEffect(() => {
        if(!isMobile){
            const clientWidth = document.body.clientWidth;
            const posXEnd = boundaries.posX + 264;
            if((posXEnd >= clientWidth || posXEnd >= 1440)){
                console.log('overflow');
                setPosX(boundaries.posX + boundaries.width - 264);
            } else {
                setPosX(boundaries.posX);
            }
            setPosY(boundaries.posY);
        }
    }, [boundaries, isMobile])


    //check is old
    
    useLayoutEffect(() => {
        if(date){
            const currentDate = new Date;
            currentDate.setHours(0, 0, 0, 0);
            const modalDate = date;
            modalDate?.setHours(0, 0, 0, 0);
            if(currentDate >= modalDate) setIsOld(true);
            else setIsOld(false);
        }
    }, [date, setIsOld])

    //edit excercise
    const handleEditExcercise = (index: number) => {
        console.log('edit', index);
        setIsEditMode(true);
        setOpenDrawer(true);
    }


    //edit training
    const handleEditTraining = (name: string) => {
        setAddMode(true);
        setTrainingType(name);
        const filteredData: Training | undefined = filterData(trainingsAll, date, name);
        if(filteredData){
            const trainingData: TrainingTypeData = {
                type: name,
                date: dateTransformA(date),
                excercises: filteredData.exercises
            }
            dispatch(setTrainingCreateData(trainingData));
            setEditableTraining(filteredData);
            setUpdateMode(true);
            setIsEditMode(true);
        }
    }

    useEffect(() => {
        if(updateMode){
            // setOpenDrawer(true);
            setUpdateMode(false);
        }
    }, [updateMode])

    return (
        <Modal
            className={`${addMode ? 'modal-add-training': 'modal-training'}`}
            data-test-id={addMode ? 'modal-create-exercise' : 'modal-create-training'}
            centered = {isMobile}
            open={isOpen}
            onCancel={handleClose}
            style={{
                position: `${!isMobile ? 'absolute' : 'unset'}`, 
                top: posY, 
                left: posX
            }}
            bodyStyle={{padding: '0 12px'}}
            maskStyle={{background: 'transparent', backdropFilter: 'unset'}}
            width={264}
            wrapClassName={classes.modal}
            closable={!addMode}
            closeIcon={
                addMode ? '' : <CloseOutlined
                    data-test-id='modal-create-training-button-close'
                />
            }
            title={
                addMode 
                ?   <div className={classes.modalHeader}>
                        <Button type='text' onClick={handleSwitchAddMode} className={classes.switchButton} data-test-id='modal-exercise-training-button-close'>
                            <ArrowLeftOutlined />
                        </Button>
                        <Select
                            defaultValue={trainingType || 'Выбор типа тренировки'}
                            onSelect={handleSelect}
                            options={trainingList}
                            style={{width: '100%'}}
                            bordered={false}
                            data-test-id='modal-create-exercise-select'
                        />
                    </div>
                :   <Typography.Title style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: 700, margin: 0}}>Тренировки на {date && dateTransform(date)}</Typography.Title>
            }
            footer={
                addMode 
                ?   <>
                        <Button size='large' style={{width: '100%'}} onClick={() => setOpenDrawer(true)} disabled={!trainingType || isOld} data-test-id='write-review-not-saved-modal'>Добавить упражнения</Button>
                        <Button size='large' style={{width: '100%', marginLeft: 0, border: 0, color: '#2F54EB'}} data-test-id='write-review-not-saved-modal' disabled={!trainings || trainings?.excercises.length === 0} onClick={onSave} loading={loading}>
                            {isOld ? 'Сохранить изменения' : 'Сохранить' }
                        </Button>
                    </>
                :   <>
                        <Button type='primary' size='large' style={{width: '100%'}} onClick={handleSwitchAddMode} disabled={cellTrainingList.length >= 5 || isOld} data-test-id='write-review-not-saved-modal'>Создать тренировку</Button>
                    </>
            }
        >
            <div className={classes.modalContainer}>
                {addMode 
                ?   <>
                        <div className={classes.content}>
                            {trainings && trainings.excercises.length > 0
                                ? <div className={classes.excercises}>
                                    <ul className={classes.excercisesList}>
                                        {trainings.excercises.map((item, index) => {
                                            return <li className={classes.excercisesOption} key={index}>
                                                <Typography.Text style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: 400, margin: 0, color: '#8C8C8C'}}>{item.name}</Typography.Text>
                                                <Button icon={<EditOutlined/>} className={classes.trainingsOptionButton} disabled={item.isImplementation} onClick={() => handleEditExcercise(index)} data-test-id={`modal-update-training-edit-button${index}`}/>
                                            </li>
                                        })}
                                        
                                    </ul>
                                </div>
                                : <div className={classes.noExcercises}/>
                            }
                        </div>
                    </>
                :   <>
                        <div className={classes.content}>
                            {cellTrainingList.length > 0
                                ? <div className={classes.trainings}>
                                    <ul className={classes.trainingsList}>
                                        {cellTrainingList.map((item, index) => {
                                            return <li className={classes.trainingsOption} key={index}>
                                                <Badge color={colorizeBadge(item.name)} text={item.name}/>
                                                <Button icon={<EditOutlined disabled={item.isImplementation}/>} className={classes.trainingsOptionButton} disabled={item.isImplementation} onClick={() => handleEditTraining(item.name)} data-test-id={`modal-update-training-edit-button${index}`}/>
                                            </li>
                                        })}
                                        
                                    </ul>
                                </div>
                                : <div className={classes.noTrainings}>
                                    <Typography.Text style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: 400, margin: 0, color: '#8C8C8C'}}>Нет активных тренировок</Typography.Text>
                                    <div className={classes.noTrainingsSpace}>
                                        <Empty/>
                                    </div>
                                </div>
                            }
                        </div>
                    </>
                }
            </div>
        </Modal>
    );
};

export default ModalAddTraining;