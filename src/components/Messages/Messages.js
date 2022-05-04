import React from 'react';
import { connect } from 'react-redux';

import './Messages.css';
import MessageItem from './MessageItem/MessageItem';
import ChatItems from './ChatItems/ChatItems';
import { sendMessageActionCreator } from '../../reducers/messgaes-reducer';
import { withAuthNavigate } from '../../HOC/withAuthNavigate';
import { compose } from 'redux';
import { Field, Form, Formik } from 'formik';

const Messages = ({ messagesUsersData, messagesChatData, onSendMessageClick }) => {
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
                <div>
                    {
                        messagesChatData.map(({ id, msg }) => {
                            return (
                                <ChatItems key={id} id={id} msg={msg} />
                            );
                        })
                    }
                </div>
                {/* <div className='chat__field'>
                    <textarea
                        placeholder='Напишите сообщение...'
                        className='chat__text'
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                    />
                    <button
                        className='chat__btn'
                        onClick={onSendMessageClick}
                    >
                        Отправить
                    </button>
                </div> */}
                <Formik
                    initialValues={{
                        newMessage: ''
                    }}
                    onSubmit={(values) => onSendMessageClick(values.newMessage)}
                >
                    {({ handleSubmit }) => (
                        <Form className='chat__field' onSubmit={handleSubmit}>
                            <Field
                                as='textarea'
                                name='newMessage'
                                id='newMessage'
                                className='chat__text'
                                placeholder='Напишите сообщение...'
                            />
                            <button type='submit' className='chat__btn'>Отправить</button>
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
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Messages);