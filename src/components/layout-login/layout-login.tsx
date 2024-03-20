import { Layout } from 'antd';
import React, { ReactNode } from 'react';
import classes from './layout-login.module.scss'
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import Loader from '@components/loader/loader';

interface IProps{
    children: ReactNode,
}

const LayoutLogin: React.FC<IProps> = ({children} : IProps) => {
    const {isLoading} = useAppSelector(state => state.authUtils);

    return (
        <Layout className={classes.wrapper}>
            <div className={classes.blur}>
                {isLoading && <Loader/>}
                <section className={classes.mainContent}>
                    {children}
                </section>
            </div>
        </Layout>
    );
};

export default LayoutLogin;