/// <reference types="vite-plugin-svgr/client" />

import LayoutLogin from '@components/layout-login/layout-login';
import classes from './error-check-email.module.scss';
import ErrorArt from '../../../resources/icons/error.svg?react';
import MessageWindow from '@components/message-window/message-window';
import { history } from '@redux/configure-store';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setLoadingState } from '@redux/authUtilSlice';
import { ROUTE_PATHS } from '../../../routes/route-paths';
import { useEffect } from 'react';
import { useCheckEmailMutation } from '@redux/APISlice';

const ErrorCheckEmail = () => {
    const {userEmail} = useAppSelector(state => state.authUtils);
    const [checkEmail, {data: checkData, error: checkError}] = useCheckEmailMutation();
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setLoadingState(true));
        checkEmail({email: userEmail});
    }

    useEffect(() => {
        if(checkData){
            dispatch(setLoadingState(false));
            history.push(ROUTE_PATHS.confirmEmail);
        } else if (checkError){
            dispatch(setLoadingState(false));
            history.push(ROUTE_PATHS.errorCheckEmail);
        }
    }, [checkData, checkError])

    return (
        <LayoutLogin>
            <MessageWindow
                icon={<ErrorArt/>}
                header={'Что-то пошло не так'}
                message={'Произошла ошибка, попробуйте отправить форму еце раз'}
                buttonText={'Повторить'}
                buttonTestId={'check-back-button'}
                action={handleClick}
            />
        </LayoutLogin>
    );
};

export default ErrorCheckEmail;