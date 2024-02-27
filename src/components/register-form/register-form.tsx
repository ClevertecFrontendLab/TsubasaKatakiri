import React, { useEffect } from 'react';
import classes from './register-form.module.scss';
import { Button, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { User } from 'src/interfaces/User';
import { useRegisterUserMutation } from '@redux/APISlice';
import { history } from '@redux/configure-store';
import { setLoadingState } from '@redux/authUtilSlice';
import { saveUserData } from '@redux/userSlice';
import { ROUTE_PATHS } from '../../routes/route-paths';

const RegisterForm: React.FC = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [registerUser, {data, isLoading, error }] = useRegisterUserMutation();


    const onFinish = (values: User) => {
        dispatch(setLoadingState(true));
        dispatch(saveUserData({email: values.email, password: values.password}));
        registerUser({email: values.email, password: values.password})
    }

    useEffect(() => {
        if(data){
            dispatch(setLoadingState(false));
            history.push(ROUTE_PATHS.success);
        } else if(error){
            dispatch(setLoadingState(false));
            if('status' in error && error.status === 409){
                history.push(ROUTE_PATHS.errorUserExist);
            } else history.push(ROUTE_PATHS.error);
        }
    }, [data, error])

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
                >
                    <Input addonBefore="e-mail" data-test-id='registration-email' autoComplete={'email'} size='large'/>
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[
                        {required: true, message: 'Введите ваш пароль'},
                        {pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
                    ]}
                    hasFeedback
                    help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                >
                    <Input.Password placeholder='Пароль' size='large' data-test-id='registration-password'/>
                </Form.Item>
                <Form.Item
                    name={'passwordrepeat'}
                    dependencies={['password']}
                    rules={[
                        {required: true, message: ''},
                        ({getFieldValue}) => ({
                            validator(_, value){
                                if(!value || getFieldValue('password') === value) return Promise.resolve();
                                return Promise.reject(new Error('Пароли не совпадают'));
                            }
                        })
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder='Повторите пароль' size='large' data-test-id='registration-confirm-password'/>
                </Form.Item>
                <Button type='primary' htmlType='submit' className={classes.formButton} size='large' data-test-id='registration-submit-button'>Войти</Button>
            </Form>
            <Button type='default' icon={<GooglePlusOutlined />} className={classes.formButton} size='large'>Регистрация через Google</Button>
        </div>
    );
};

export default RegisterForm;