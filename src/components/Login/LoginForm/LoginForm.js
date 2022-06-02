import { Formik } from 'formik';
import React from 'react';
import { Navigate } from 'react-router-dom';
import * as Yup from 'yup';


import './LoginForm.css';

const LoginForm = ({ isAuth, login }) => {

    if (isAuth) {
        return <Navigate to={'/profile/'} />
    }

    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email('Почта указана неправильно')
            .required('Введите почту'),
        password: Yup
            .string()
            .typeError('Должно быть строкой')
            .required('Введите пароль'),
    });

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validateOnBlur
                onSubmit={(values, { setSubmitting, setStatus }) => {
                    login(values.email, values.password, false, setStatus);
                    setSubmitting(false);
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (
                    <div className='login__form'>
                        <div className='form__email'>
                            <label htmlFor='email'
                                className='email__title'
                            >
                                Почта
                            </label>
                            <input
                                className={touched.email && errors.email ? 'form_error_border' : 'email__input'}
                                type='text'
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {touched.email && errors.email && <div className='form__error'>{errors.email}</div>}
                        </div>
                        <div className='form__password'>
                            <label htmlFor='password'
                                className='password__title'
                            >
                                Пароль
                            </label>
                            <input
                                className={touched.password && errors.password ? 'form_error_border' : 'password__input'}
                                type='password'
                                name='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {touched.password && errors.password && <div className='form__error'>{errors.password}</div>}
                        </div>
                        {status && isValid ? <div className='form__error'>{status}</div> : null}
                        <button
                            className='login__button'
                            disabled={!isValid && !dirty}
                            onClick={handleSubmit}
                            type='submit'
                        >
                            Войти
                        </button>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;