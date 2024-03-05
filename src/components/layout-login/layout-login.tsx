import { Layout } from 'antd';
import React, { ReactNode, useEffect } from 'react';
import classes from './layout-login.module.scss'
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../routes/route-paths';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import Loader from '@components/loader/loader';
import { history } from '@redux/configure-store';

interface IProps{
    children: ReactNode,
}

const LayoutLogin: React.FC<IProps> = ({children} : IProps) => {
    const navigate = useNavigate();
    const {isLoading} = useAppSelector(state => state.authUtils);

    // useEffect(() => {
    //     const accessToken = localStorage.getItem('accessToken');
    //     const sessionToken = sessionStorage.getItem('accessToken');
    //     if(accessToken || sessionToken) {
    //         navigate(ROUTE_PATHS.main);
    //     }
    //     else {
    //         const gtoken = new URLSearchParams(history.location.state?.from?.search).get('accessToken');
    //         console.log(history.location.state);
    //         if(gtoken) {
    //             localStorage.setItem('accessToken', gtoken);
    //             navigate(ROUTE_PATHS.main);
    //         }
    //     }
    // }, [navigate])

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