import React from 'react';
import classes from './header.module.scss';
import { Breadcrumb, Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbData: Record<string, string> = {
    '/main': 'Главная',
    '/feedbacks': 'Отзывы пользователей'
}

const Header: React.FC = () => {
    const location = useLocation();
    const pathData = location.pathname.split('/').filter(item => item);

    const additionalItems = pathData.map((_, i) => {
        const url = `/${pathData.slice(0, i+1).join('/')}`;
        return (<Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbData[url]}</Link>
                </Breadcrumb.Item>
        )
    })

    const breadcrumbItems = [
        <Breadcrumb.Item key={'home'}>
            {additionalItems[0].key !== '/main' ? <Link to={'/main'}>Главная</Link> : null}
        </Breadcrumb.Item>
    ].concat(additionalItems);

    return (
        <Layout.Header className={classes.header}>
            <div className={classes.headerContainer}>
                <Breadcrumb>
                    {breadcrumbItems}
                </Breadcrumb>
            </div>
        </Layout.Header>
    );
};

export default Header;