/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import classes from './error-check-email-no-exist.module.scss';
import LayoutLogin from '@components/layout-login/layout-login';
import MessageWindow from '@components/message-window/message-window';
import Fail from '../../../resources/icons/fail.svg?react';
import { history } from '@redux/configure-store';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { setUserEmail } from '@redux/authUtilSlice';

const ErrorCheckEmailNoExist = () => {
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        dispatch(setUserEmail(''));
        history.push('/auth')
    }

    return (
        <LayoutLogin>
            <MessageWindow
                icon={<Fail/>}
                header={'Такой e-mail не зарегистрирован'}
                message={'Мы не нашли в базе ваш e-mail. Попробуйте войти с другим e-mail.'}
                buttonText={'Попробовать снова'}
                buttonTestId={'check-retry-button'}
                action={handleClick}
            />
        </LayoutLogin>
    );
};

export default ErrorCheckEmailNoExist;