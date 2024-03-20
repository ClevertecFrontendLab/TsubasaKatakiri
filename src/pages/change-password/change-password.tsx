import LayoutLogin from '@components/layout-login/layout-login';
import classes from './change-password.module.scss';
import { Button, Form, Input, Typography } from 'antd';
import { ChangePassword as PasswordInputs } from 'src/interfaces/ChangePassword';
import { useChangePasswordMutation } from '@redux/authAPISlice';
import { useEffect } from 'react';
import { history } from '@redux/configure-store';
import { ROUTE_PATHS } from '../../routes/route-paths';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { setLoadingState, setNewPassword } from '@redux/authUtilSlice';


const ChangePassword = () => {
    const [form] = Form.useForm();
    const dispatch = useAppDispatch();
    const [changePassword, {data, isLoading, error}] = useChangePasswordMutation();

    const onFinish = (values: PasswordInputs) => {
        dispatch(setLoadingState(true));
        dispatch(setNewPassword({password: values.password, confirmPassword: values.confirmPassword}))
        changePassword({password: values.password, confirmPassword: values.confirmPassword});
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
            <div className={classes.wrapper}>
                <Typography.Title level={3}>Восстановление аккаунта</Typography.Title>
                <Form
                    form={form}
                    name='login'
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name={'password'}
                        rules={[
                            {required: true, message: 'Введите ваш пароль'},
                            {pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, message: 'Пароль не менее 8 символов, с заглавной буквой и цифрой'}
                        ]}
                        hasFeedback
                        help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    >
                        <Input.Password placeholder='Пароль' size='large' data-test-id='change-password'/>
                    </Form.Item>
                    <Form.Item
                        name={'confirmPassword'}
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
                        <Input.Password placeholder='Повторите пароль' size='large' data-test-id='change-confirm-password'/>
                    </Form.Item>
                    <Button type='primary' size='large' htmlType='submit' className={classes.formButton} data-test-id='change-submit-button'>
                        Сохранить
                    </Button>
                </Form>
            </div>
        </LayoutLogin>
    );
};

export default ChangePassword;