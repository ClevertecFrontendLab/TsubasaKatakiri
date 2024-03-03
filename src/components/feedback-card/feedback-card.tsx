import React from 'react';
import { PostData } from 'src/interfaces/Post';
import { Avatar, Card, Rate, Space, Typography } from 'antd';
import classes from './feedback-card.module.scss'
import AvatarPlaceholder from '../../resources/icons/Avatar.svg';


const FeedbackCard: React.FC<PostData> = ({createdAt, fullName, id, imageSrc, message, rating} : PostData) => {
    const date = new Date(createdAt).toLocaleDateString();
    
    return (
        <Card key={id} className={classes.feedback}>
            <Card.Meta
                avatar={
                    <Space direction='vertical' align='center' className={classes.feedbackAvatarSpace}>
                        <Avatar src={imageSrc || AvatarPlaceholder} className={classes.feedbackAvatar}/>
                        <Typography.Title level={5}>{fullName}</Typography.Title>
                    </Space>
                }
                title={
                    <Space>
                        <Rate disabled defaultValue={rating}/>
                        <Typography.Text className={classes.feedbackDate} style={{color: '#BFBFBF'}}>{date}</Typography.Text>
                    </Space>
                }
                description={<Typography.Paragraph className={classes.feedbackText}>{message}</Typography.Paragraph>}
            />
        </Card>
    );
};

export default FeedbackCard;