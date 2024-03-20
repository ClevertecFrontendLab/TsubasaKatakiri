import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button, Card, Layout, Typography } from 'antd';
import React from 'react';
import classes from './footer.module.scss';
import { history } from '@redux/configure-store';
import { ROUTE_PATHS } from '../../routes/route-paths';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { setLoadingApp } from '@redux/appUtilSlice';


const Footer: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleFeedback = () => {
        dispatch(setLoadingApp(true));
        history.push(ROUTE_PATHS.feedbacks)
    }

    return (
        <Layout.Footer className={classes.footer}>
            <Button type='link' size='large'className={classes.link} onClick={handleFeedback} data-test-id='see-reviews'>
                Смотреть отзывы
            </Button>
            <Card className={classes.card} size='small' title={
                <div className={classes.cardHeader}>
                    <Typography.Text className={classes.cardTitle} 
                        style={{
                            textAlign: 'left', 
                            color: '#2F54EB', 
                            marginBottom: 0, 
                            fontSize: '16px'
                        }}
                    >
                        Скачать на телефон
                    </Typography.Text>
                    <Typography.Text className={classes.cardText} 
                        style={{
                            textAlign: 'left', 
                            fontSize: '14px', 
                            marginBottom: 0,
                        }}
                    >
                        Доступно в PRO-тарифе
                    </Typography.Text>
                </div>
            } headStyle={{padding: '0px 24px'}} bodyStyle={{padding: '12px 0'}}>
                <div className={classes.cardButtons}>
                    <Button type='text'>
                        <AndroidFilled />
                        Android OS
                    </Button>
                    <Button type='text'>
                        <AppleFilled />
                        Apple iOS
                    </Button>
                </div>
            </Card>
        </Layout.Footer>
    );
};

export default Footer;