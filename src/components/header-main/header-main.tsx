import classes from './header-main.module.scss';
import { Button, Layout, Typography } from 'antd';
import { useWindowWidth } from '@hooks/use-window-width';
import { SettingOutlined } from '@ant-design/icons';

const HeaderMain = () => {
    const isMobile = useWindowWidth();

    return (
        <Layout.Header className={classes.headerInfo}>
            <Typography.Title className={classes.headerText}>Приветствуем тебя в CleverFit - приложении, которое поможет тебе добиться своей мечты!</Typography.Title>
            {!isMobile
                ? <Button className={classes.headerSettings} type='text' icon={<SettingOutlined />}>{!isMobile && 'Настройки'}</Button>
                : <Button className={classes.headerSettings} type='default' shape='circle' icon={<SettingOutlined />}/>
            }
        </Layout.Header>
    );
};

export default HeaderMain;