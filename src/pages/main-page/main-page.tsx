import React, { lazy, Suspense } from 'react';

import classes from './main-page.module.scss';
import 'antd/dist/antd.css';
import { Button, Card, Typography } from 'antd';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import LayoutMainPage from '@components/layout-main-page/layout-main-page';
import { history } from '@redux/configure-store';
import { ROUTE_PATHS } from '../../routes/route-paths';
const LayoutBlock = lazy(() => import('@components/layout/layout'))

export const MainPage: React.FC = () => {
    const handleCalendar = () => {
        history.push(ROUTE_PATHS.calendar);
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LayoutBlock>
                <LayoutMainPage>
                <div className={classes.cardWrapper}>
                    <Card style={{width: '100%'}} className={classes.cardDescription}>
                        С CleverFit ты сможешь:
                        <ul>
                            <li>— планировать свои тренировки на календаре, выбирая уровень и тип нагрузки;</li>
                            <li>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;</li>
                            <li>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</li>
                            <li>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</li>
                        </ul>
                    </Card>
                    <Card style={{width: '100%'}}>
                        <Typography.Title level={4} style={{fontWeight: 500, fontSize: '20px', lineHeight: '26px', marginBottom: 0}}>CleverFit - это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</Typography.Title>
                    </Card>
                    <div className={classes.cardWrapperHorizontal}>
                        <Card title="Расписать тренировки" size='small' style={{width: '100%', fontSize: 16}} className={classes.card}>
                            <Button type='link' icon={<HeartFilled/>} style={{width: '100%', color: '#2F54EB'}}>
                                Тренировки
                            </Button>
                        </Card>
                        <Card title="Назначить календарь" size='small' style={{width: '100%', fontSize: 16}} className={classes.card}>
                            <Button type='link' icon={<CalendarOutlined />} style={{width: '100%', color: '#2F54EB'}} onClick={handleCalendar}>
                                Календарь
                            </Button>
                        </Card>
                        <Card title="Заполнить профиль" size='small' style={{width: '100%', fontSize: 16}} className={classes.card}>
                            <Button type='link' icon={<IdcardOutlined />} style={{width: '100%', color: '#2F54EB'}}>
                                Профиль
                            </Button>
                        </Card>
                    </div>
                </div>
                </LayoutMainPage>
            </LayoutBlock>               
        </Suspense>
    );
};
