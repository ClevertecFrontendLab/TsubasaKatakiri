import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button, Card, Layout, Typography } from 'antd';
import React from 'react';
import classes from './footer.module.scss';


const Footer: React.FC = () => {
    return (
        <Layout.Footer className={classes.footer}>
            <Button type='link' size='large'className={classes.link}>Смотреть отзывы</Button>
            <Card className={classes.card} size='small' title={
                <div className={classes.cardHeader}>
                    <Typography.Text className={classes.cardTitle}>Скачать на телефон</Typography.Text>
                    <Typography.Text className={classes.cardText}>Доступно в PRO-тарифе</Typography.Text>
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