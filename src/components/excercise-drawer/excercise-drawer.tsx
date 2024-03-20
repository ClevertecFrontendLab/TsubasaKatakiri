import React, { useLayoutEffect, useState } from 'react';
import { Badge, Button, Drawer, Space, Typography } from 'antd';
import { CloseOutlined, EditOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import ExcerciseInputs from '../excercise-inputs/excercise-inputs';
import { colorizeBadge } from '../../helpers/badge-helpers';
import { DataTraining, Excercise } from '../../types/training';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { TrainingTypeData } from '../../types/training';
import { setTrainingCreateData } from '@redux/trainingCreateSlice';
import './exercise-drawer.css';
import classes from './excercise-drawer.module.scss';

interface IProps{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    date: string,
    trainingOption: string,
    isEditMode: boolean,
    isOld: boolean,
}


const ExcerciseDrawer: React.FC<IProps> = ({isOpen, setIsOpen, date, trainingOption, isEditMode, isOld}: IProps) => {
    const trainings = useAppSelector((state) => state.trainingCreateData.training);
    const dispatch = useAppDispatch();
    const [dataOfTraining, setDataOfTraining] = useState<Excercise[]>([{
                name: '',
                approaches: 0,
                weight: 0,
                replays: 0,
                isImplementation: false
            }]);
    const [isChecked, setIsChecked] = useState<boolean[]>([false])

    useLayoutEffect(() => {
        if(trainings){
            setDataOfTraining(trainings.excercises)
        }
        if(!trainings){
            const emptyExcercise: Excercise = {
                name: '',
                approaches: 0,
                weight: 0,
                replays: 0,
                isImplementation: false
            }
            setDataOfTraining([emptyExcercise])
        }
    }, [trainings])


    const onClose = () => {
        const filteredList: DataTraining[] = dataOfTraining.filter(item => item.name !== '');
        if(filteredList.length > 0 || (trainings && trainings.isImplementation !== true)){
            const newDataOfTraining: TrainingTypeData = {
                type: trainingOption,
                date: date,
                excercises: filteredList.map(item => ({...item, isImplementation: isOld})),
                isImplementation: isOld,
            } 
            dispatch(setTrainingCreateData(newDataOfTraining));
            setDataOfTraining([]);
        }
        setIsOpen(false)
    }

    const handleAdd = () => {
        const newDataOfTraining: Excercise = {
            name: '',
            approaches: 0,
            weight: 0,
            replays: 0,
            isImplementation: false
        }
        setDataOfTraining(prev => [...prev, newDataOfTraining]);
    }

    const handleDelete = () => {
        const newDataOfTraining = dataOfTraining.filter((item, i) => !isChecked[i])
        setDataOfTraining(newDataOfTraining);
        const newCheckedArray = new Array(isChecked.length).fill(false);
        setIsChecked(newCheckedArray);
    }

    return (
        <Drawer
            data-test-id='modal-drawer-right'
            title={
                <Space style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Space style={{display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '6px'}}>
                        {isEditMode ? <EditOutlined /> : <PlusOutlined />}
                        <Typography.Title level={4} 
                            style={{fontSize: '20px', lineHeight: '26px', fontWeight: 500, margin: 0, color: '#262626'}}
                        >
                            {isEditMode ? 'Редактирование' : 'Добавление упражнений'}
                        </Typography.Title>
                    </Space>
                    <Button type='text' onClick={onClose} style={{padding: 0, width: '14px', height: '14px'}} 
                    data-test-id='modal-drawer-right-button-close'>
                        <CloseOutlined />
                    </Button>
                </Space>
            }
            className='exercise-drawer'
            placement='right'
            open={isOpen}
            onClose={onClose}
            closable={false}
            mask={false}
            maskClosable={false}
        >
            <Space style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px'}}>
                {trainingOption && <Badge color={colorizeBadge(trainingOption)} text={trainingOption}/>}
                <Typography.Text style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: 500, margin: 0, color: '#8C8C8C'}}>
                    {date}
                </Typography.Text>
            </Space>
            <Space direction='vertical' style={{width: '100%'}}>
                {dataOfTraining.map((item, index) => {
                    return <ExcerciseInputs key={index} index={index} dataTraining={dataOfTraining} setDataTraining={setDataOfTraining} 
                    isEditMode={isEditMode} isChecked={isChecked} setIsChecked={setIsChecked}/>
                })}
                 {!trainings?.isImplementation && 
                    <div className={classes.buttonsBlock}>
                        <Button type='default' size='large' style={{backgroundColor: '#F0F0F0', border: '#F0F0F0', 
                        color: '#2F54EB', textAlign: 'left', width: '100%'}} icon={<PlusOutlined/>} onClick={handleAdd}> 
                            Добавить ещё
                        </Button>
                        {isEditMode && 
                            <Button type='default' size='large' style={{backgroundColor: '#F0F0F0', border: '#F0F0F0', 
                            width: '100%', textAlign: 'left'}} icon={<MinusOutlined/>} onClick={handleDelete} 
                            disabled={isChecked.every((el) => el === false)}> 
                                Удалить
                            </Button>
                        }
                    </div>
                 }
            </Space>
        </Drawer>
    );
};

export default ExcerciseDrawer;