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
    className?: string
}

const MessageWindow: React.FC<IProps> = ({icon, header, message, buttonText, buttonTestId, action, className}: IProps) => {
    return (
        <div className={`${classes.wrapper} ${className ? className : ''}`}>
            {icon}
            <Typography.Title level={3} className={classes.header}>{header}</Typography.Title>
            <Typography.Text style={{ whiteSpace: 'pre-line' }}>{message}</Typography.Text>
            <Button size='large' type="primary" data-test-id={buttonTestId} onClick={action}>{buttonText}</Button>
        </div>
    );
};

export default MessageWindow;