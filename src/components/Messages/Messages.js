import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { compose } from 'redux';
import * as Yup from 'yup';

import './Messages.css';
import MessageItem from './MessageItem/MessageItem';
import ChatItems from './ChatItems/ChatItems';
import { sendMessageActionCreator } from '../../reducers/messgaes-reducer';
import { withAuthNavigate } from '../../HOC/withAuthNavigate';

const Messages = ({ messagesUsersData, messagesChatData, onSendMessageClick }) => {

    const validationSchema = Yup.object().shape({
        newMessage: Yup
            .string()
            .required()
            .min(1)
            .max(50)
    });

    return (
        <div className='messages'>
            <div className='messages__users'>
                {
                    messagesUsersData.map(({ id, name, imageUrl }) => {
                        return (
                            <MessageItem key={id} id={id} name={name} imageUrl={imageUrl} />
                        );
                    })
                }
            </div>
            <div className='messages__chat'>
                {
                    messagesChatData.map(({ id, msg }) => {
                        return (
                            <ChatItems key={id} id={id} msg={msg} />
                        );
                    })
                }
                <Formik
                    initialValues={{
                        newMessage: ''
                    }}
                    validateOnBlur
                    onSubmit={(values) => onSendMessageClick(values.newMessage)}
                    validationSchema={validationSchema}
                >
                    {({ handleSubmit, errors, }) => (
                        <Form className='chat__field' onSubmit={handleSubmit}>
                            <Field
                                as='textarea'
                                name='newMessage'
                                id='newMessage'
                                className='chat__text'
                                placeholder='Напишите сообщение...'
                            />
                            <button disabled={errors.newMessage} type='submit' className='chat__btn'>Отправить</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        messagesUsersData: state.messagePage.messagesUsersData,
        messagesChatData: state.messagePage.messagesChatData,
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessage) => dispatch(sendMessageActionCreator(newMessage)),
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Messages);