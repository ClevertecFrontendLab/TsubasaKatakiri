import React, { useEffect, useState } from 'react';
import classes from'./login-form.module.scss';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useCheckEmailMutation, useLoginUserMutation } from '@redux/APISlice';
import { User } from 'src/interfaces/User';
import { history, store } from '@redux/configure-store';
import { ROUTE_PATHS } from '../../routes/route-paths';
import { setLoadingState, setUserEmail } from '@redux/authUtilSlice';

const LoginForm: React.FC = () => {
    const [form] = useForm();
    const dispatch = useAppDispatch();
    const [loginUser, {data, isLoading, error}] = useLoginUserMutation();
    const [checkEmail, {data: checkData, error: checkError}] = useCheckEmailMutation();
    const [isRemember, setIsRemember] = useState<boolean | undefined>(false);

    const onFinish = (values: User) => {
        if(values.remember) setIsRemember(values.remember);
        loginUser({email: values.email, password: values.password});
        dispatch(setLoadingState(true));
    }

    const onForgot = () => {
        const emailError = form.getFieldError('email');
        const emailValue = form.getFieldValue('email');
        if(emailValue && emailError.length === 0){
            dispatch(setLoadingState(true));
            dispatch(setUserEmail(emailValue));
            checkEmail({email: emailValue});
        }
    }

    useEffect(() => {
        if(checkData){
            history.push(ROUTE_PATHS.confirmEmail);
            dispatch(setLoadingState(false));
        } else if (checkError){
            dispatch(setLoadingState(false));
            if('status' in checkError && checkError.status === 404){
                history.push(ROUTE_PATHS.errorCheckEmailNoExist);
            } else history.push(ROUTE_PATHS.errorCheckEmail);
        }
    }, [checkData, checkError])

    useEffect(() => {
        if(data && 'accessToken' in data){
            if(isRemember){
                localStorage.setItem('accessToken', data.accessToken);
            } else {
                sessionStorage.setItem('accessToken', data.accessToken);
            }
            dispatch(setLoadingState(false));
            history.push(ROUTE_PATHS.main);
        } else if (error){
            dispatch(setLoadingState(false));
            history.push(ROUTE_PATHS.errorLogin);
        }
    }, [data, error, isLoading])

    return (
        <div>
            <Form 
            form={form}
            name='login'
            initialValues={{remember: true}}
            onFinish={onFinish}
            >
                <Form.Item
                    name={'email'}
                    rules={[
                        {required: true, message: 'Введите ваш email'},
                        {type: 'email', message: 'Введите корректный email'}
                    ]}
                    validateStatus=''
                >
                    <Input addonBefore='e-mail' size='large' data-test-id='login-email'/>
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[
                        {required: true, message: 'Введите ваш пароль'},
                        {pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Пароль' size='large' data-test-id='login-password'/>
                </Form.Item>
                <div className={classes.formBar}>
                    <Form.Item
                        name={'remember'}
                        className={classes.checkbox}
                        valuePropName='checked'
                        style={{marginBottom: 0}}
                    >
                        <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Button type='link' onClick={onForgot} style={{paddingRight: 0}} data-test-id='login-forgot-button'>Забыли пароль?</Button>
                </div>
                <Button type='primary' htmlType='submit' className={classes.formButton} size='large' data-test-id='login-submit-button'>Войти</Button>
            </Form>
            <Button type='default' icon={<GooglePlusOutlined />} className={classes.formButton} size='large'>Войти через Google</Button>
        </div>
    );
};

export default LoginForm;