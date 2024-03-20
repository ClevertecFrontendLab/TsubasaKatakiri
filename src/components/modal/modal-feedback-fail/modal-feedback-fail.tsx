import React from 'react';
import classes from './modal-feedback-fail.module.scss';
import { Button, Modal, Typography } from 'antd';
import Fail from '../../../resources/icons/fail.svg?react';

interface IProps{
    isOpenFail: boolean,
    setIsOpenFail: (isOpen: boolean) => void
    setIsOpenComment: (isOpen: boolean) => void
}

const ModalFeedbackFail: React.FC<IProps> = ({isOpenFail, setIsOpenFail, setIsOpenComment}: IProps) => {

    const handleRetry = () => {
        setIsOpenFail(false);
        setIsOpenComment(true);
    }

    const handleClose = () => {
        setIsOpenFail(false);
    }

    return (
        <Modal
            centered
            open={isOpenFail}
            closable={false}
            footer={null}
        >
            <div className={classes.modalContainer}>
                <Fail/>
                <div className={classes.modalText}>
                    <Typography.Title style={{fontSize: '24px', lineHeight: '31.2px', fontWeight: 500, margin: 0}}>
                        Данные не сохранились
                    </Typography.Title>
                    <Typography.Text 
                        style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: 400, margin: 0, color: '#8C8C8C'}} 
                        className={classes.modalCaption}
                    >
                        Что-то пошло не так. Попробуйте еще раз.
                    </Typography.Text>
                </div>
                <div className={classes.modalButtons}>
                    <Button type='primary' size='large' style={{width: '100%'}} onClick={handleRetry} data-test-id='write-review-not-saved-modal'>
                        Написать отзыв
                    </Button>
                    <Button size='large' style={{width: '100%'}} onClick={handleClose}>Закрыть</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalFeedbackFail;