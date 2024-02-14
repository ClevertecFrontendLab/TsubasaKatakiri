import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import classes from './header.module.scss';
import { Breadcrumb, Button, Layout, Typography } from 'antd';
import { useWindowWidth } from '@hooks/use-window-width';

const Header: React.FC = () => {
    const isMobile = useWindowWidth();

    return (
        <Layout.Header className={classes.header}>
            <div className={classes.headerContainer}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                </Breadcrumb>
                <div className={classes.headerInfo}>
                    <Typography.Title className={classes.headerText}>Приветствуем тебя в CleverFit - приложении, которое поможет тебе добиться своей мечты!</Typography.Title>
                    {!isMobile
                        ? <Button className={classes.headerSettings} type='text' icon={<SettingOutlined />}>{!isMobile && 'Настройки'}</Button>
                        : <Button className={classes.headerSettings} type='default' shape='circle' icon={<SettingOutlined />}/>
                    }
                </div>
            </div>
        </Layout.Header>
    );
};

export default Header;