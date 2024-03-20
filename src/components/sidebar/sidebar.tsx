import { CalendarOutlined, HeartFilled, IdcardOutlined, MenuFoldOutlined, MenuUnfoldOutlined, TrophyFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import logo from '../../resources/img/Logo.png';
import logosmall from '../../resources/img/Logo_small.png';
import classes from './sidebar.module.scss'
import logoutIcon from '../../resources/icons/Exit.svg';
import { useWindowWidth } from '@hooks/use-window-width';
import Sider from 'antd/lib/layout/Sider';
import { Button, Menu } from 'antd';
import { history } from '@redux/configure-store';
import { ROUTE_PATHS } from '../../routes/route-paths';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { setLoadingApp } from '@redux/appUtilSlice';
import { useLazyGetTrainingsQuery } from '@redux/trainingAPISlice';
import { setIsLoaded, setTrainingData } from '@redux/trainingsSlice';
import ModalFeedbackLoadFail from '@components/modal/modal-feedback-load-fail/modal-feedback-load-fail';

interface IProps{
    isOpen: boolean,
    handleOpening: () => void
}

const Sidebar: React.FC<IProps> = ({isOpen, handleOpening} : IProps) => {
    const dispatch = useAppDispatch()
    const [getTrainings, {data, isLoading, error}] = useLazyGetTrainingsQuery();
    const isMobile = useWindowWidth();
    const [isFailOpen, setIsFailOpen] = useState<boolean>(false);

    const handleExit = () => {
        const accessToken = localStorage.getItem('accessToken');
        const sessionToken = sessionStorage.getItem('accessToken');
        if(accessToken || sessionToken){
            localStorage.removeItem('accessToken');
            sessionStorage.removeItem('accessToken');
            history.push('/auth');
        }
    }

    const handleClickCalendar = () => {
        dispatch(setLoadingApp(true));
        getTrainings();
    }

    useEffect(() => {
        if(data){
            dispatch(setTrainingData(data));
            dispatch(setIsLoaded(true));
            history.push(ROUTE_PATHS.calendar);
        } else if(error){
            dispatch(setLoadingApp(false));
            if(('status' in error) && (error.status === 403)){
                history.push('/auth');
            }
            else setIsFailOpen(true);
        }
    }, [data, isLoading, error, dispatch])

    const menuItems = [
        {
            key: '1',
            icon: <CalendarOutlined style={{color: "rgba(6, 17, 120, 1)"}}/>,
            label: "Календарь",
            onClick: handleClickCalendar
        },
        {
            key: '2',
            icon: <HeartFilled style={{color: "rgba(6, 17, 120, 1)"}}/>,
            label: "Тренировки",
        },
        {
            key: '3',
            icon: <TrophyFilled style={{color: "rgba(6, 17, 120, 1)"}}/>,
            label: "Достижения",

        },
        {
            key: '4',
            icon: <IdcardOutlined style={{color: "rgba(6, 17, 120, 1)"}} />,
            label: "Профиль",
        },
    ]

    return (
        <Sider 
            collapsible 
            theme='light' 
            trigger={null} 
            collapsed={!isOpen} 
            width={isMobile ? 106 : 208} 
            collapsedWidth={isMobile ? 0 : 64}
            className={isMobile ? classes.asideMobile: ''}
            style={{zIndex: 999}}
        >
            <ModalFeedbackLoadFail isOpen={isFailOpen} setIsOpen={setIsFailOpen}/>
            <div data-test-id={isMobile ? 'sider-switch-mobile' : 'sider-switch'} className={`${classes.unfold} ${isMobile && classes.unfoldMobile}`} onClick={handleOpening}>
                {isOpen ? <MenuFoldOutlined /> :<MenuUnfoldOutlined />}
            </div>
            <div className={`${classes.asideWrapper} ${isMobile && classes.asideWrapperMobile}`}>
                <div className={classes.main}>
                    <img src={isOpen ? logo : logosmall} className={classes.logo} alt="CleverFit" />
                    <Menu theme='light' items={menuItems} className={`${classes.menu} ${isMobile && classes.menuMobile}`}/>
                </div>
                <Button type='text' className={isOpen ? classes.logout : classes.logoutFold} onClick={handleExit}>
                    <img src={logoutIcon} alt="logout" />
                    {isOpen && <span>Выход</span>}
                </Button>
            </div>
        </Sider>
    );
};

export default Sidebar;