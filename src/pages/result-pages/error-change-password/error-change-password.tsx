/// <reference types="vite-plugin-svgr/client" />

import React, { useEffect } from 'react';
import classes from './error-change-password.module.scss'
import LayoutLogin from '@components/layout-login/layout-login';
import Fail from '../../../resources/icons/fail.svg?react';
import MessageWindow from '@components/message-window/message-window';
import { history } from '@redux/configure-store';
import { useChangePasswordMutation } from '@redux/authAPISlice';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setLoadingState } from '@redux/authUtilSlice';
import { ROUTE_PATHS } from '../../../routes/route-paths';

const ErrorChangePassword = () => {
    const dispatch = useAppDispatch();
    const [changePassword, {data, isLoading, error}] = useChangePasswordMutation();
    const {newPassword, newPasswordConfirm} = useAppSelector(state => state.authUtils);

    const handleClick = () => {
        changePassword({password: newPassword, confirmPassword: newPasswordConfirm});
    }

    useEffect(() => {
        if(data){
            dispatch(setLoadingState(false));
            history.push(ROUTE_PATHS.successChangePassword);
        } else if(error){
            dispatch(setLoadingState(false));
            history.push(ROUTE_PATHS.errorChangePassword);
        }
    }, [data, error])

    return (
        <LayoutLogin>
            <MessageWindow
                icon={<Fail/>}
                header={'Данные не сохранились'}
                message={'Что-то пошло не так. Попробуйте еще раз'}
                buttonText={'Повторить'}
                buttonTestId={'change-retry-button'}
                action={handleClick}
            />
        </LayoutLogin>
    );
};

export default ErrorChangePassword;