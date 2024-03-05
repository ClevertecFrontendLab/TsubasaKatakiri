import React from 'react';
import { PostData } from 'src/interfaces/Post';
import { Avatar, Card, Rate, Space, Typography } from 'antd';
import classes from './feedback-card.module.scss'
import AvatarPlaceholder from '../../resources/icons/Avatar.svg';
import { useWindowWidth } from '@hooks/use-window-width';
import { StarFilled, StarOutlined } from '@ant-design/icons';


const FeedbackCard: React.FC<PostData> = ({createdAt, fullName, id, imageSrc, message, rating} : PostData) => {
    const date = new Date(createdAt).toLocaleDateString();
    const isMobile = useWindowWidth();
    
    return (
        <Card key={id} className={classes.feedback}>
            <Card.Meta
                avatar={
                    <Space direction={isMobile ? 'horizontal' : 'vertical'} align='center' className={classes.feedbackAvatarSpace}>
                        <Avatar src={imageSrc || AvatarPlaceholder} className={classes.feedbackAvatar}/>
                        <Typography.Title level={5} style={{marginBottom: 0, maxWidth: '100px'}}>{fullName}</Typography.Title>
                    </Space>
                }
                title={
                    <Space>
                        <Rate disabled defaultValue={rating} character={({value, index}) => {
                            return value && index! < value ? <StarFilled style={{color: '#FAAD14'}}/> : <StarOutlined style={{color: '#FAAD14'}}/>
                        }}/>
                        <Typography.Text className={classes.feedbackDate} style={{color: '#BFBFBF'}}>{date}</Typography.Text>
                    </Space>
                }
                description={<Typography.Paragraph className={classes.feedbackText}>{message}</Typography.Paragraph>}
            />
        </Card>
    );
};

export default FeedbackCard;