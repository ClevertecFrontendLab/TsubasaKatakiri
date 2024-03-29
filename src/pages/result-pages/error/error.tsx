/// <reference types="vite-plugin-svgr/client" />

import React, { useEffect } from 'react';
import LayoutLogin from '@components/layout-login/layout-login';
import Fail from '../../../resources/icons/fail.svg?react';
import MessageWindow from '@components/message-window/message-window';
import { history } from '@redux/configure-store';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setLoadingState } from '@redux/authUtilSlice';
import { useRegisterUserMutation } from '@redux/authAPISlice';


const Error:React.FC = () => {
    const dispatch = useAppDispatch();
    const [registerUser, {data, error }] = useRegisterUserMutation();
    const {userData} = useAppSelector(state => state.userData);

    const handleClick = () => {
        dispatch(setLoadingState(true));
        registerUser({email: userData.email, password: userData.password})
    }

    useEffect(() => {
        if(data){
            dispatch(setLoadingState(false));
            history.push('/result/success');
        } else if(error){
            dispatch(setLoadingState(false));
            history.push('/result/error');
        }
    }, [data, error, dispatch])

    return (
        <LayoutLogin>
            <MessageWindow
                icon={<Fail/>}
                header={'Данные не сохранились'}
                message={'Что-то пошло не так и ваша регистрация\n не завершилась. Попробуйте еще раз.'}
                buttonText={'Повторить'}
                buttonTestId={'registration-retry-button'}
                action={handleClick}
            />
        </LayoutLogin>
    );
};

export default Error;