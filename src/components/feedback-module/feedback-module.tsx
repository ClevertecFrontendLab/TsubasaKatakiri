import React, { useEffect } from 'react';
import classes from './feedback-module.scss'
import { useGetFeedbackQuery } from '@redux/feedbackAPISlice';
import { List } from 'antd';
import FeedbackCard from '@components/feedback-card/feedback-card';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setFeedbackData } from '@redux/feedbackSlice';
import { history } from '@redux/configure-store';
import { PostData } from 'src/interfaces/Post';
import { setLoadingApp } from '@redux/appUtilSlice';
import FeedbackPlaceholder from '@components/feedback-placeholder/feedback-placeholder';


const FeedbackModule: React.FC = () => {
    const {data, isLoading, error} = useGetFeedbackQuery();
    const dispatch = useAppDispatch();
    const {feedbacks, isExpanded} = useAppSelector(state => state.feedbackData);

    useEffect(() => {
        if(data){
            const sortedData = [...data].sort((a: PostData, b : PostData) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            dispatch(setFeedbackData(sortedData));
            dispatch(setLoadingApp(false));
        } else if(error){
            if(('status' in error) && (error.status === 403)){
                history.push('/auth');
            }
            else console.log('error');
        }
    }, [data, isLoading, error, isExpanded])

    const feedbackOutput = isExpanded ? feedbacks : feedbacks.slice(0, 4);

    return (
        <div>
            {feedbackOutput.length > 0 
                ? <List
                    dataSource={feedbackOutput}
                    split={false}
                    renderItem={item => (
                        <List.Item>
                            <FeedbackCard createdAt={item.createdAt} fullName={item.fullName} id={item.id} imageSrc={item.imageSrc} message={item.message} rating={item.rating}/>
                        </List.Item>
                    )}
                />
                : <FeedbackPlaceholder/>
            }
        </div>
    );
};

export default FeedbackModule;