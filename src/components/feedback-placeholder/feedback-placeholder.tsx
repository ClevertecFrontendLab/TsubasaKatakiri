import React from 'react';
import classes from './feedback-placeholder.module.scss';
import { Button, Card, Typography } from 'antd';

interface IProps{
    setOpenFeedback: (openFeedback: boolean) => void
}

const FeedbackPlaceholder: React.FC<IProps> = ({setOpenFeedback}: IProps) => {

    const handleFeedback = () => {
        setOpenFeedback(true);
    }

    return (
        <div className={classes.placeholder}>
            <Card className={classes.placeholderCard}>
                <Typography.Title style={{color: '#061178', fontSize: '24px', fontWeight: 500, marginBottom: '48px'}}>Оставьте свой отзыв первым</Typography.Title>
                <Typography.Text style={{fontSize: '14px', whiteSpace: 'pre-line' }}>
                    Вы можете быть первым, кто оставит отзыв об этом фитнес приложении.<br/>
                    Поделитесь своим мнением и опытом с другими пользователями,<br/>
                    и помогите им сделать правильный выбор.
                </Typography.Text>
            </Card>
            <Button size='large' type='primary' onClick={handleFeedback} style={{width: 'unset', marginTop: '20px'}} data-test-id='write-review'>Написать отзыв</Button>
        </div>
    );
};

export default FeedbackPlaceholder;