import { Button, Modal, Typography } from 'antd';
import React from 'react';
import classes from './modal-feedback-success.module.scss';
import SuccessIcon from '../../../resources/icons/success.svg?react'

interface IProps{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const ModalFeedbackSuccess: React.FC<IProps> = ({isOpen, setIsOpen}: IProps) => {

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <Modal
            centered
            open={isOpen}
            closable={false}
            footer={null}
        >
            <div className={classes.modalContainer}>
                <SuccessIcon/>
                <Typography.Title style={{fontSize: '24px', lineHeight: '31.2px', fontWeight: 500, margin: 0}}>
                    Отзыв успешно опубликован
                </Typography.Title>
                <Button type='primary' size='large' onClick={handleClose}>Отлично</Button>
            </div>
        </Modal>
    );
};

export default ModalFeedbackSuccess