/// <reference types="vite-plugin-svgr/client" />

import LayoutLogin from '@components/layout-login/layout-login';
import React from 'react';
import classes from './success.module.scss';
import MessageWindow from '@components/message-window/message-window';
import SuccessIcon from '../../../resources/icons/success.svg?react';
import { history } from '@redux/configure-store';

const Success = () => {
    const handleClick = () => {
        history.push('/auth')
    }

    return (
        <LayoutLogin>
            <MessageWindow
                icon={<SuccessIcon/>}
                header={'Регистрация успешна'}
                message={'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'}
                buttonText={'Войти'}
                buttonTestId={'registration-enter-button'}
                action={handleClick}
            />
        </LayoutLogin>
    )
};

export default Success;