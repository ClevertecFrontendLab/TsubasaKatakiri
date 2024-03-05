import React from 'react';
import classes from './modal-feedback-load-fail.module.scss'
import { Button, Modal, Typography } from 'antd';
import FailSplash from '../../../resources/icons/error.svg?react';
import { ROUTE_PATHS } from '../../../routes/route-paths';
import { history } from '@redux/configure-store';

interface IProps{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const ModalFeedbackLoadFail : React.FC<IProps> = ({isOpen, setIsOpen}: IProps) => {

    const handleClose = () => {
        setIsOpen(false);
        history.push(ROUTE_PATHS.main);
    }

    return (
        <Modal
            centered
            open={isOpen}
            closable={false}
            footer={null}
        >
            <div className={classes.modalContainer}>
                <FailSplash/>
                <div className={classes.modalText}>
                    <Typography.Title style={{fontSize: '24px', lineHeight: '31.2px', fontWeight: 500, margin: 0}}>Что-то пошло не так</Typography.Title>
                    <Typography.Text style={{fontSize: '14px', lineHeight: '18.2px', fontWeight: 400, margin: 0, color: '#8C8C8C'}}>Произошла ошибка, попробуйте еще раз.</Typography.Text>
                </div>
                <Button size='large' type='primary' style={{width: 'unset'}} onClick={handleClose}>Назад</Button>
            </div>
        </Modal>
    );
};

export default ModalFeedbackLoadFail;