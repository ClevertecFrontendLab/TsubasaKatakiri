import React from 'react';
import classes from './feedback-page.module.scss';
import LayoutBlock from '@components/layout/layout';
import FeedbackModule from '@components/feedback-module/feedback-module';
import { Button, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setIsExpanded } from '@redux/feedbackSlice';

const FeedbackPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const {isExpanded} = useAppSelector(state => state.feedbackData);

    const handleExpand = () => {
        dispatch(setIsExpanded(!isExpanded));
    }

    return (
        <LayoutBlock>
            <div className={classes.feedbackWrapper}>
                <FeedbackModule/>
                <Space className={classes.feedbackControls}>
                    <Button type='primary' size='large'>Написать отзыв</Button>
                    <Button type='link' size='large' onClick={handleExpand}>Развернуть все отзывы</Button>
                </Space>
            </div>
        </LayoutBlock>
    );
};

export default FeedbackPage;