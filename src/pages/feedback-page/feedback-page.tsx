import React, { useState } from 'react';
import classes from './feedback-page.module.scss';
import LayoutBlock from '@components/layout/layout';
import FeedbackModule from '@components/feedback-module/feedback-module';
import { Button, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setIsExpanded } from '@redux/feedbackSlice';
import ModalFeedbackForm from '@components/modal/modal-feedback-form/modal-feedback-form';
import ModalFeedbackSuccess from '@components/modal/modal-feedback-success/modal-feedback-success';
import ModalFeedbackFail from '@components/modal/modal-feedback-fail/modal-feedback-fail';

const FeedbackPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const {isExpanded} = useAppSelector(state => state.feedbackData);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState<boolean>(false);
    const [isFeedbackModalSuccessOpen, setIsFeedbackModalSuccessOpen] = useState<boolean>(false);
    const [isFeedbackModalFailOpen, setIsFeedbackModalFailOpen] = useState<boolean>(false);

    const handleExpand = () => {
        dispatch(setIsExpanded(!isExpanded));
    }

    const showFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    return (
        <LayoutBlock>
            <div className={classes.feedbackWrapper}>
                <ModalFeedbackForm isOpen={isFeedbackModalOpen} setIsOpen={setIsFeedbackModalOpen} setIsSuccess={setIsFeedbackModalSuccessOpen} setIsFail={setIsFeedbackModalFailOpen}/>
                <ModalFeedbackSuccess isOpen={isFeedbackModalSuccessOpen} setIsOpen={setIsFeedbackModalSuccessOpen}/>
                <ModalFeedbackFail isOpenFail={isFeedbackModalFailOpen} setIsOpenFail={setIsFeedbackModalFailOpen} setIsOpenComment={setIsFeedbackModalOpen}/>
                <FeedbackModule/>
                <Space className={classes.feedbackControls}>
                    <Button type='primary' size='large' onClick={showFeedbackModal}>Написать отзыв</Button>
                    <Button type='link' size='large' onClick={handleExpand}>Развернуть все отзывы</Button>
                </Space>
            </div>
        </LayoutBlock>
    );
};

export default FeedbackPage;