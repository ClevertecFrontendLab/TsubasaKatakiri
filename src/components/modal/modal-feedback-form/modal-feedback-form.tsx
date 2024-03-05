import React, { useEffect, useState } from 'react';
import classes from './modal-feedback-form.module.scss';
import { Button, Form, Modal, Rate } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { useLazyGetFeedbackQuery, usePostFeedbackMutation } from '@redux/feedbackAPISlice';
import { Post } from 'src/interfaces/Post';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { setLoadingApp } from '@redux/appUtilSlice';

interface IProps{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    setIsSuccess: (isOpen: boolean) => void,
    setIsFail: (isOpen: boolean) => void,
}

const ModalFeedbackForm: React.FC<IProps> = ({isOpen, setIsOpen, setIsSuccess, setIsFail}: IProps) => {
    const [form] = useForm();
    const [rating, setRating] = useState<number>(0)
    const dispatch = useAppDispatch();
    const [postFeedback, {data, isLoading, error}] = usePostFeedbackMutation();
    const [getFeedback] = useLazyGetFeedbackQuery();
    
    const handleOk = () => {
        dispatch(setLoadingApp(true));
        const values: Post = form.getFieldsValue();
        postFeedback(values);
        setIsOpen(false);
    };
    
    const handleCancel = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if(data){
            setIsSuccess(true);
            getFeedback();
            dispatch(setLoadingApp(false));
        } else if (error){
            setIsFail(true)
            dispatch(setLoadingApp(false));
        }
    }, [data, isLoading, error])

    return (
        <Modal 
            title={'Ваш отзыв'}
            centered
            open={isOpen} 
            onOk={handleOk} 
            onCancel={handleCancel}
            footer = {[
                <Button key='submit' type={'primary'} onClick={handleOk} size='large' style={{width: 'unset'}} disabled={rating === 0} data-test-id='new-review-submit-button'>
                    Опубликовать
                </Button>
            ]}
        >
            <Form 
                form={form}
                name='login'
                initialValues={{remember: true}}
                onFinish={handleOk}
            >
                <Form.Item
                    name={'rating'}
                    style={{marginBottom: '16px'}}
                >
                    <Rate value={rating} onChange={setRating} character={({value, index}) => {
                        return value && index! < value ? <StarFilled style={{color: '#FAAD14'}}/> : <StarOutlined style={{color: '#FAAD14'}}/>
                    }}/>
                </Form.Item>
                <Form.Item
                    name={'message'}
                    style={{marginBottom: '0'}}
                >
                    <TextArea size='large' autoSize={{minRows: 2}} placeholder='Autosize height based on content lines'/>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ModalFeedbackForm;