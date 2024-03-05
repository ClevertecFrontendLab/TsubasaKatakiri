import React from 'react';
import classes from './feedback-placeholder.module.scss';
import { Button, Card, Typography } from 'antd';

const FeedbackPlaceholder = () => {

    const handleFeedback = () => {
        console.log('feedback');
    }

    return (
        <div className={classes.placeholderWrapper}>
            <Card>
                <Typography.Title>Оставьте свой отзыв первым</Typography.Title>
                <Typography.Text>
                    Вы можете быть первым, кто оставит отзыв об этом фитнес приложении.<br/>
                    Поделитесь своим мнением и опытом с другими пользователями,<br/>
                    и помогите им сделать правильный выбор.
                </Typography.Text>
            </Card>
            <Button size='large' type='primary' onClick={handleFeedback}>Написать отзыв</Button>
        </div>
    );
};

export default FeedbackPlaceholder;