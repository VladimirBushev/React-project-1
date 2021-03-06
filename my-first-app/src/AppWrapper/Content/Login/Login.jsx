import React from 'react'
import { Formik, Form, Field } from 'formik';
import loginFormSchema from '../../../Validation/loginFormSchema';
import loginStyle from './Login.module.css'
import { connect } from 'react-redux';
import { login } from './../../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <Formik initialValues={{ login: '', password: '', rememberMe: false, captcha: ''}}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                props.login(values.login, values.password, values.rememberMe, values.captcha)
            }}
            validateOnBlur
            validationSchema={loginFormSchema}
        >
            {({ handleChange, handleBlur, values, errors, touched }) => (
                <Form className={loginStyle.form} >
                    <div>
                        <Field className={loginStyle.input} onChange={handleChange} value={values.login} name='login' placeholder={'Логин'} />
                        {touched.login && errors.login && <p className={loginStyle.error}>{errors.login}</p>}
                    </div>
                    <div>
                        <Field className={loginStyle.input} onChange={handleChange} onBlur={handleBlur} value={values.password} type='password' name='password' placeholder={'Пароль'} />
                        {touched.password && errors.password && <p className={loginStyle.error}>{errors.password}</p>}
                    </div>
                    <div>
                        <Field className={loginStyle.checkbox} onChange={handleChange} onBlur={handleBlur} type='checkbox' name='rememberMe' />
                        <div className={loginStyle.checkboxLabel}>запомнить меня</div>
                    </div>
                    <div>
                    <div>{props.captchaUrl && 
                            <div>
                                <div className={loginStyle.img}><img  alt='' src={props.captchaUrl}></img></div>
                                <Field className={loginStyle.capthaInput} placeholder='символы с картинки' value={values.captcha} onChange={handleChange} onBlur={handleBlur} name='captcha'/>
                            </div>
                        }</div>
                    </div>
                    <div>
                        <button className={loginStyle.button} type={'submit'} >Войти</button>
                        {props.IncorrectEmailOrPassword ? <div className={loginStyle.error}> {props.errorMessages}</div> : null}
                    </div>
                </Form>
            )}
        </Formik>
    )
}


const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={loginStyle.wrapper}>
            <h1 className={loginStyle.header}>Авторизация</h1>
            <div>
                <div className={loginStyle.header}>Используйте для авторизации</div>
                <div className={loginStyle.header}>Login: vladimirbyshev@gmail.com</div>
                <div className={loginStyle.header}>Paswword: QERKhDxzrg8X </div>
            </div>
            <LoginForm captchaUrl={props.captchaUrl} login={props.login}
             IncorrectEmailOrPassword={props.IncorrectEmailOrPassword} errorMessages={props.errorMessages} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
    IncorrectEmailOrPassword: state.auth.IncorrectEmailOrPassword,
    errorMessages: state.auth.errorMessages
})

export default connect(mapStateToProps, { login })(Login) 