import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


import './LoginForm.css';

const LoginForm = ({ isAuth, login }) => {

    const navigate = useNavigate();

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
                onSubmit={(values) => {
                    login(values.email, values.password);
                    navigate('/profile/');
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
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