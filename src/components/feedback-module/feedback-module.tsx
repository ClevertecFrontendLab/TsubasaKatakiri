import React from 'react';
import { List } from 'antd';
import FeedbackCard from '@components/feedback-card/feedback-card';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';


const FeedbackModule: React.FC = () => {
    const {feedbacks, isExpanded} = useAppSelector(state => state.feedbackData);

    const feedbackOutput = isExpanded ? feedbacks : feedbacks.slice(0, 4);

    return (
        <div>
            <List
                dataSource={feedbackOutput}
                split={false}
                renderItem={item => (
                    <List.Item>
                        <FeedbackCard createdAt={item.createdAt} fullName={item.fullName} id={item.id} imageSrc={item.imageSrc} message={item.message} rating={item.rating}/>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default FeedbackModule;