import Header from '@components/header/header';
import Sidebar from '@components/sidebar/sidebar';
import React, { ReactNode, useEffect, useState } from 'react';
import classes from './layout.module.scss';
import { Layout } from 'antd';
import { useWindowWidth } from '@hooks/use-window-width';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import Loader from '@components/loader/loader';

interface IProps{
    children: ReactNode
}

const LayoutBlock: React.FC<IProps> = ({children} : IProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const isMobile = useWindowWidth();
    const {isLoading} = useAppSelector(state => state.appUtils);

    useEffect(() => {
        if(isMobile) setIsOpen(false);
    }, [isMobile])

    const handleOpening = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <Layout className={classes.wrapper}>
            {isLoading && <Loader/>}
            <Sidebar isOpen={isOpen} handleOpening={handleOpening}/>
            <Layout className={`${classes.mainContent} ${isMobile && classes.mobile}`}>
                <Header/>
                <div className={classes.pageContainer}>
                    {children}
                </div>
            </Layout>
        </Layout>
    );
};

export default LayoutBlock;