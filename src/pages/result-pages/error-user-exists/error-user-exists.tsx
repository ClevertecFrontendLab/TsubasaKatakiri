/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import classes from './error-user-exists.module.scss'
import LayoutLogin from '@components/layout-login/layout-login';
import MessageWindow from '@components/message-window/message-window';
import Fail from '../../../resources/icons/fail.svg?react';
import { history } from '@redux/configure-store';

const ErrorUserExists = () => {
    const handleClick = () => {
        history.push('/auth/registration')
    }

    return (
        <LayoutLogin>
            <MessageWindow
                icon={<Fail/>}
                header={'Данные не сохранились'}
                message={'Такой e-mail уже зарегистрирован в системе. Попробуйте зарегистрироваться по другому e-mail.'}
                buttonText={'Повторить'}
                buttonTestId={'registration-back-button'}
                action={handleClick}
            />
        </LayoutLogin>
    );
};

export default ErrorUserExists;