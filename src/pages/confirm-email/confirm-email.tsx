/// <reference types="vite-plugin-svgr/client" />

import React, { useEffect, useState } from 'react';
import classes from './confirm-email.module.scss';
import LayoutLogin from '@components/layout-login/layout-login';
import Info from '../../resources/icons/info.svg?react';
import Fail from '../../resources/icons/fail.svg?react';
import { Typography } from 'antd';
import VerificationInput from 'react-verification-input';
import { useConfirmEmailMutation } from '@redux/APISlice';
import { history } from '@redux/configure-store';
import { ROUTE_PATHS } from '../../routes/route-paths';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';

const ConfirmEmail = () => {
    const [code, setCode] = useState<string>('')
    const [confirmEmail, {data, isLoading, error }] = useConfirmEmailMutation();
    const {userEmail} = useAppSelector(state => state.authUtils);
    const dispatch = useAppDispatch();
    const [errorStatus, setErrorStatus] = useState<boolean>(false);

    const onChange=(value: string)=> {
        setCode(value);
    }

    const onComplete=(value: string)=> {
        confirmEmail({email: userEmail, code: value});
        setCode('');
    }

    useEffect(() => {
        if(data){
            history.push(ROUTE_PATHS.changePassword);
        } else if(error){
            setErrorStatus(true);
        }
    }, [data, error, setErrorStatus])

    return (
        <LayoutLogin>
            <div className={classes.wrapper}>
                {errorStatus ? <Fail/> :<Info/>}
                <Typography.Title level={3}>{errorStatus ? 'Неверный код. ' : ''}Введите код для восстановления аккаунта</Typography.Title>
                <Typography.Text>Мы отправили вам на e-mail <b>{userEmail}</b> шестизначный код. Введите его в поле ниже.</Typography.Text>
                <div className={classes.input}>
                    <VerificationInput
                        data-test-id='verification-input'
                        placeholder={''}
                        onComplete={onComplete}
                        onChange={onChange}
                        value={code}
                        inputProps={{'data-test-id': 'verification-input'}}
                        classNames={{character: errorStatus ? classes.error : ''}}
                    />
                </div>
                <Typography.Text>Не пришло письмо? Проверьте папку Спам.</Typography.Text>
            </div>
        </LayoutLogin>
    );
};

export default ConfirmEmail;