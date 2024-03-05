import React, { ReactNode } from 'react';
import classes from './layout-main-page.module.scss';
import { Layout } from 'antd';
import Footer from '@components/footer/footer';
import HeaderMain from '@components/header-main/header-main';

interface IProps{
    children: ReactNode
}

const LayoutMainPage: React.FC<IProps> = ({children} : IProps) => {
    return (
        <Layout>
            <HeaderMain/>
            <div className={classes.pageContainer}>
                {children}
            </div>
            <Footer/>
        </Layout>
    );
};

export default LayoutMainPage;