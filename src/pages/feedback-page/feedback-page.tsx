import React, { useEffect, useState } from 'react';
import classes from './feedback-page.module.scss';
import LayoutBlock from '@components/layout/layout';
import FeedbackModule from '@components/feedback-module/feedback-module';
import { Button, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { setFeedbackData, setIsExpanded } from '@redux/feedbackSlice';
import ModalFeedbackForm from '@components/modal/modal-feedback-form/modal-feedback-form';
import ModalFeedbackSuccess from '@components/modal/modal-feedback-success/modal-feedback-success';
import ModalFeedbackFail from '@components/modal/modal-feedback-fail/modal-feedback-fail';
import ModalFeedbackLoadFail from '@components/modal/modal-feedback-load-fail/modal-feedback-load-fail';
import { useLazyGetFeedbackQuery } from '@redux/feedbackAPISlice';
import { PostData } from 'src/interfaces/Post';
import { setLoadingApp } from '@redux/appUtilSlice';
import { history } from '@redux/configure-store';
import FeedbackPlaceholder from '@components/feedback-placeholder/feedback-placeholder';
import { useWindowWidth } from '@hooks/use-window-width';

const FeedbackPage: React.FC = () => {
    const isMobile = useWindowWidth();
    const dispatch = useAppDispatch();
    const {feedbacks, isExpanded} = useAppSelector(state => state.feedbackData);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState<boolean>(false);
    const [isFeedbackModalSuccessOpen, setIsFeedbackModalSuccessOpen] = useState<boolean>(false);
    const [isFeedbackModalFailOpen, setIsFeedbackModalFailOpen] = useState<boolean>(false);
    const [isFeedbackLoadModalFailOpen, setIsFeedbackLoadModalFailOpen] = useState<boolean>(false);
    const {isLoading: isLoadingApp} = useAppSelector(state => state.appUtils);

    const [getFeedback, {data, isLoading, error}] = useLazyGetFeedbackQuery();

    useEffect(() => {
        dispatch(setLoadingApp(true));
        getFeedback();
    }, [])


    useEffect(() => {
        if(data){
            const sortedData = [...data].sort((a: PostData, b : PostData) => {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            });
            dispatch(setFeedbackData(sortedData));
            dispatch(setLoadingApp(false));
        } else if(error){
            dispatch(setLoadingApp(false));
            if(('status' in error) && (error.status === 403)){
                history.push('/auth');
            }
            else setIsFeedbackLoadModalFailOpen(true);
        }
    }, [data, isLoading, error])


    const handleExpand = () => {
        dispatch(setIsExpanded(!isExpanded));
    }

    const showFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };


    return (
        <LayoutBlock>
            <ModalFeedbackForm 
                isOpen={isFeedbackModalOpen} 
                setIsOpen={setIsFeedbackModalOpen} 
                setIsSuccess={setIsFeedbackModalSuccessOpen} 
                setIsFail={setIsFeedbackModalFailOpen}
            />
            <ModalFeedbackSuccess 
                isOpen={isFeedbackModalSuccessOpen} 
                setIsOpen={setIsFeedbackModalSuccessOpen}
            />
            <ModalFeedbackFail 
                isOpenFail={isFeedbackModalFailOpen} 
                setIsOpenFail={setIsFeedbackModalFailOpen} 
                setIsOpenComment={setIsFeedbackModalOpen}
            />
            <ModalFeedbackLoadFail 
                isOpen={isFeedbackLoadModalFailOpen} 
                setIsOpen={setIsFeedbackLoadModalFailOpen}
            />
            {feedbacks.length > 0 
                ?   <div className={classes.feedbackWrapper}>
                        <FeedbackModule/>
                        <Space direction={isMobile ? 'vertical' : 'horizontal'} className={classes.feedbackControls} style={{gap: '16px'}}>
                            <Button type='primary' size='large' onClick={showFeedbackModal} data-test-id='write-review'>
                                Написать отзыв
                            </Button>
                            <Button type='link' size='large' onClick={handleExpand} data-test-id='all-reviews-button' style={{width: '100%'}}>
                                {isExpanded ? 'Свернуть' : 'Развернуть'} все отзывы
                            </Button>
                        </Space>
                    </div>
                : !isLoadingApp ? <FeedbackPlaceholder setOpenFeedback={setIsFeedbackModalOpen}/> : ''
            }
        </LayoutBlock>
    );
};

export default FeedbackPage;