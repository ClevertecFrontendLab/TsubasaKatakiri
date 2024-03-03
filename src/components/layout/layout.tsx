import Footer from '@components/footer/footer';
import Header from '@components/header/header';
import Sidebar from '@components/sidebar/sidebar';
import React, { ReactNode, useEffect, useState } from 'react';
import classes from './layout.module.scss';
import { Layout } from 'antd';
import { useWindowWidth } from '@hooks/use-window-width';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../routes/route-paths';

interface IProps{
    children: ReactNode
}

const LayoutBlock: React.FC<IProps> = ({children} : IProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const isMobile = useWindowWidth();
    const navigate = useNavigate();

    const handleOpening = () => {
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const sessionToken = sessionStorage.getItem('accessToken');
        if(!accessToken && !sessionToken) navigate(ROUTE_PATHS.auth);
    }, [navigate])

    return (
        <Layout className={classes.wrapper}>
            <Sidebar isOpen={isOpen} handleOpening={handleOpening}/>
            <Layout className={`${classes.mainContent} ${isMobile && classes.mobile}`}>
                <Header/>
                <div className={classes.pageContainer}>
                    {children}
                </div>
                {/* <Footer/> */}
            </Layout>
        </Layout>
    );
};

export default LayoutBlock;