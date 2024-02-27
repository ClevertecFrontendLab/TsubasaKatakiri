import React, { useState } from 'react';
import classes from './login-module.module.scss'
import { Tabs } from 'antd';
import LoginForm from '@components/login-form/login-form';
import RegisterForm from '@components/register-form/register-form';
import { useLocation } from 'react-router-dom';
import { history } from '@redux/configure-store';

const LoginModule: React.FC = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname === '/auth/registration' ? 'Register' : 'Login');

    const onChange = (key: string) => {
        if(key === 'Login'){
            history.push('/auth');
        } else {
            history.push('/auth/registration');
        }
    }

    return (
        <div className={classes.wrapper}>
            <Tabs className={classes.tabs} defaultActiveKey={activeTab} onChange={onChange}>
                <Tabs.TabPane tab="Вход" key="Login">
                    <LoginForm/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Регистрация" key="Register">
                    <RegisterForm/>
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

export default LoginModule;