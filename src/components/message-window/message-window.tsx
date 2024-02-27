import React from 'react';
import classes from './message-window.module.scss';
import { Button, Typography } from 'antd';

interface IProps{
    icon: string | React.ReactNode,
    header: string,
    message: string,
    buttonText: string,
    buttonTestId: string,
    action: () => void,
}

const MessageWindow: React.FC<IProps> = ({icon, header, message, buttonText, buttonTestId, action}: IProps) => {
    return (
        <div className={classes.wrapper}>
            {icon}
            <Typography.Title level={3} className={classes.header}>{header}</Typography.Title>
            <Typography.Text>{message}</Typography.Text>
            <Button size='large' type="primary" data-test-id={buttonTestId} onClick={action}>{buttonText}</Button>
        </div>
    );
};

export default MessageWindow;