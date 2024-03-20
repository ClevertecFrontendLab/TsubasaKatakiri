import React from 'react';
import { Button, Modal, Space, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import FailRed from '../../../resources/icons/fail-circle-red.svg?react'
import FailBlue from '../../../resources/icons/fail-circle-blue.svg?react'

import './modal-training-fail.css';

interface IProps{
    isOpened: boolean,
    saveMode: boolean,
    setIsOpened: (isOpened: boolean) => void,
    onOk: () => void,
}

const ModalTrainingFail: React.FC<IProps> = ({isOpened, setIsOpened, saveMode, onOk}: IProps) => {
    const onClose = () => {
        setIsOpened(false);
    }

    const onAction = () => {
        setIsOpened(false);
        onOk();
    }

    return (
        <Modal
            closable={!saveMode}
            maskStyle={{ backgroundColor: 'rgba(121, 156, 212, 0)' }}
            open={isOpened}
            onCancel={onClose}
            footer={null}
            centered
            className={'modal-training-fail'}
            closeIcon={
                <CloseOutlined
                    className={'close'}
                    data-test-id='modal-error-user-training-button-close'
                />
            }
            width={384}
        >
            <Space direction='vertical' style={{display: 'flex', rowGap: '16px'}}>
                <Space direction='horizontal' style={{alignItems: 'flex-start', columnGap: '16px'}}>
                    {saveMode ? <FailRed/> : <FailBlue/>}
                    <Space direction='vertical' style={{alignItems: 'flex-start', rowGap: '8px'}}>
                        <Typography.Title level={5} style={{fontWeight: 400, fontSize: '16px', lineHeight: '20.4px'}} 
                        data-test-id='modal-error-user-training-title'>
                            {saveMode 
                                ? 'При сохранении данных произошла ошибка'
                                : 'При открытии данных произошла ошибка'
                            }
                        </Typography.Title>
                        <Typography.Text style={{fontWeight: 400, fontSize: '14px', lineHeight: '18.2px'}} 
                        data-test-id='modal-error-user-training-subtitle'>
                            {saveMode 
                                ? 'Придётся попробовать ещё раз'
                                : 'Попробуйте ещё раз.'
                            }
                        </Typography.Text>
                    </Space>
                </Space>
                <Space style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Button
                        onClick={onAction}
                        type='primary'
                        size='large'
                        data-test-id='modal-error-user-training-button'
                        style={{width: 'unset', marginLeft: 'auto'}}
                    >
                        {saveMode ? 'Закрыть' : 'Обновить'}
                    </Button>
                </Space>
            </Space>
        </Modal>
    );
};

export default ModalTrainingFail;