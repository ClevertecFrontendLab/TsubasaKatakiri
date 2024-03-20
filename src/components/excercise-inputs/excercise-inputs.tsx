import React, { useLayoutEffect, useState } from 'react';
import { Input, InputNumber, Space, Typography } from 'antd';
import { DataTraining } from '../../types/training';
import Checkbox, { CheckboxChangeEvent } from 'antd/lib/checkbox';


interface IProps{
    index: number,
    dataTraining: DataTraining[],
    setDataTraining: (data: DataTraining[]) => void,
    isEditMode: boolean,
    isChecked: boolean[],
    setIsChecked: (isChecked: boolean[]) => void
}


const ExcerciseInputs: React.FC<IProps> = ({
    index, dataTraining, setDataTraining, isEditMode, isChecked, setIsChecked
}: IProps) => {
    const [name, setName] = useState<string>(dataTraining[index].name || '');
    const [approaches, setApproaches] = useState<number>(dataTraining[index].approaches || 0);
    const [weight, setWeight] = useState<number>(dataTraining[index].weight || 0);
    const [replays, setReplays] = useState<number>(dataTraining[index].replays || 0);

    useLayoutEffect(() => {
        if(dataTraining[index]){
            setName(dataTraining[index].name)
            setApproaches(dataTraining[index].approaches || 0)
            setWeight(dataTraining[index].weight || 0)
            setReplays(dataTraining[index].replays || 0)
        }
    }, [dataTraining, index])

    useLayoutEffect(() => {
        const updatedDataTraining = [...dataTraining];
        updatedDataTraining[index] = {
            ...updatedDataTraining[index],
            name,
            approaches,
            weight,
            replays
        }
        setDataTraining(updatedDataTraining);
    }, [name, approaches, weight, replays, index])

    const handleCheck = (e: CheckboxChangeEvent) => {
        const updateIsChecked = [...isChecked];
        updateIsChecked[index] = e.target.checked;
        setIsChecked(updateIsChecked);
    }

    return (
        <Space direction='vertical' style={{marginBottom: '24px'}}>

            <Input
                placeholder='Упражнение'
                size='small'
                value={name}
                onChange={(e) => setName(e.target.value)}
                addonAfter={isEditMode && (
                    <Checkbox 
                    onChange={handleCheck} 
                    checked={isChecked[index]} 
                    data-test-id={`modal-drawer-right-checkbox-exercise${index}`}/>
                )}
                data-test-id={`modal-drawer-right-input-exercise${index}`}
            />

            <Space direction='horizontal' style={{columnGap: '32px', width: '100%', alignItems: 'flex-end'}}>

                <Space direction='vertical'>
                    <Typography.Text 
                        style={{
                            display: 'block', 
                            color: '#262626', 
                            backgroundColor: '#F0F0F0', 
                            marginBottom: '0', 
                            textAlign: 'left', 
                            padding: '3.5px 8px'
                        }}>
                        Подходы
                    </Typography.Text>
                    <InputNumber
                        placeholder={'1'}
                        min={0}
                        max={999}
                        addonBefore={'+'}
                        size='small'
                        value={approaches}
                        onChange={(value) => setApproaches(value ?? 0)}
                        data-test-id={`modal-drawer-right-input-approach${index}`}
                    />
                </Space>

                <Space direction='horizontal' style={{alignItems: 'flex-end'}}>
                    <Space direction='vertical' style={{width: '89px'}}>
                        <Typography.Text 
                            style={{
                                display: 'block', 
                                color: '#262626', 
                                backgroundColor: '#F0F0F0', 
                                marginBottom: '0', 
                                textAlign: 'left', 
                                padding: '3.5px 8px'
                            }}
                        >
                            Вес, кг
                        </Typography.Text>
                        <InputNumber
                            placeholder={'0'}
                            min={0}
                            max={999}
                            size='small'
                            value={weight}
                            onChange={(value) => setWeight(value ?? 0)}
                            data-test-id={`modal-drawer-right-input-weight${index}`}
                        />
                    </Space>
                    x
                    <Space direction='vertical'>
                        <Typography.Text 
                            style={{
                                display: 'block', 
                                width:'92px', 
                                color: '#262626', 
                                backgroundColor: '#F0F0F0', 
                                marginBottom: '0', 
                                textAlign: 'left', 
                                padding: '3.5px 8px'
                            }}
                        >
                            Количество
                        </Typography.Text>
                        <InputNumber
                            placeholder={'3'}
                            min={0}
                            max={999}
                            size='small'
                            value={replays}
                            onChange={(value) => setReplays(value ?? 0)}
                            data-test-id={`modal-drawer-right-input-quantity${index}`}
                        />
                    </Space>
                </Space>

            </Space>
        </Space>
    );
};

export default ExcerciseInputs;