import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import profileDataFormSchema from '../../../../Validation/profileDataFormSchema';
import ProfileInfoStyle from './ProfileInfo.module.css'

const ProfileDataForm = (props) => {
    let profile = props.profile
    let [error, setError] = useState(false)
    let [errorMessage, setErrorMessage] = useState('')
    return (
        <Formik initialValues={{
            lookingForAJob: profile.lookingForAJob || '' , lookingForAJobDescription: profile.lookingForAJobDescription || '',
            aboutMe: profile.aboutMe || '', fullName: profile.fullName || '',
            contacts: {
                website: profile.contacts.website || '', facebook: profile.contacts.facebook || '', vk: profile.contacts.vk || '', 
                twitter: profile.contacts.twitter || '', youtube: profile.contacts.youtube || '', instagram: profile.contacts.instagram || '', 
                github: profile.contacts.github || '', mainLink: profile.contacts.mainLink || '',
            }
        }}
            onSubmit={(values, { setSubmitting }) =>  {
                setSubmitting(false);
                props.saveProfile(values).then( () => {
                    props.setEditMode()
                    setError(false)
                }).catch( (e) => {
                    let arrayError = e.split('>')
                    let arrayError2 = arrayError[0].split('(')
                    debugger
                    let errorLocation = arrayError[1].slice(0, arrayError[1].length - 1)
                    let error = arrayError2[0]
                    
                    setErrorMessage( `${error} in ${errorLocation}`)
                    
                    setError(true)
                })
            }}
        validateOnBlur
        validationSchema={profileDataFormSchema}
        >

            {({ handleChange, handleBlur, values, errors, touched }) => (
                // <Form className={ProfileInfoStyle.form} >
                //     <div>
                //         <Field className={ProfileInfoStyle.input} onChange={handleChange} value={values.login} name='login' placeholder={'Логин'} />
                //         {touched.login && errors.login && <p className={ProfileInfoStyle.error}>{errors.login}</p>}
                //     </div>
                //     <div>
                //         <Field className={ProfileInfoStyle.input} onChange={handleChange} onBlur={handleBlur} value={values.password} type='password' name='password' placeholder={'Пароль'} />
                //         {touched.password && errors.password && <p className={ProfileInfoStyle.error}>{errors.password}</p>}
                //     </div>
                //     <div>
                //         <Field className={ProfileInfoStyle.checkbox} onChange={handleChange} onBlur={handleBlur} type='checkbox' name='rememberMe' />
                //         <div className={ProfileInfoStyle.checkboxLabel}>запомнить меня</div>
                //     </div>
                //     <div>
                //         <button className={ProfileInfoStyle.button} type={'submit'} >Войти</button>
                //         {props.IncorrectEmailOrPassword ? <div className={ProfileInfoStyle.error}>Неправильный логин или пароль!</div> : null}
                //     </div>
                // </Form>
                <Form>
                    <div>
                        <div className={touched.fullName && errors.fullName ? ProfileInfoStyle.infoError : ProfileInfoStyle.info }>
                            <Field placeholder='Полное имя' name='fullName' onChange={handleChange} onBlur={handleBlur} value={values.fullName} />
                            {touched.fullName && errors.fullName && <label className={ProfileInfoStyle.error}>{errors.fullName}</label>}
                        </div>
                        <div className={ProfileInfoStyle.checkboxdiv}>
                            <Field className={ProfileInfoStyle.checkbox} type='checkBox' name='lookingForAJob' onChange={handleChange} onBlur={handleBlur} checked={values.lookingForAJob} /> Ищу работу
                        </div>
                        <div className={touched.lookingForAJobDescription && errors.lookingForAJobDescription ? ProfileInfoStyle.infoError : ProfileInfoStyle.info }>
                            <Field component={'textarea'} name='lookingForAJobDescription' onChange={handleChange} onBlur={handleBlur}
                                value={values.lookingForAJobDescription}
                                placeholder='навыки' />
                                {touched.lookingForAJobDescription && errors.lookingForAJobDescription && <label className={ProfileInfoStyle.error}>{errors.lookingForAJobDescription}</label>}
                        </div>
                        <div className={touched.aboutMe && errors.aboutMe ? ProfileInfoStyle.infoError : ProfileInfoStyle.info}>
                            <Field component={'textarea'} name='aboutMe' onChange={handleChange} onBlur={handleBlur}
                                value={values.aboutMe}
                                placeholder='Расскажите о себе' />
                                {touched.aboutMe && errors.aboutMe && <label className={ProfileInfoStyle.error}>{errors.aboutMe}</label>}
                        </div>
                        <div>
                        Контакты
                        <div className={ProfileInfoStyle.info}>
                            <Field name='contacts.facebook' placeholder='facebook' onChange={handleChange} onBlur={handleBlur} value={values.contacts.facebook} />
                        </div>
                        <div className={ProfileInfoStyle.info}>
                            <Field name='contacts.website' placeholder='website' onChange={handleChange} onBlur={handleBlur} value={values.contacts.website} />
                        </div>
                        <div className={ProfileInfoStyle.info}>
                            <Field name='contacts.vk' placeholder='vk' onChange={handleChange} onBlur={handleBlur} value={values.contacts.vk} />
                        </div>
                        <div className={ProfileInfoStyle.info}>
                            <Field name='contacts.twitter' placeholder='twitter' onChange={handleChange} onBlur={handleBlur} value={values.contacts.twitter} />
                        </div>
                        <div className={ProfileInfoStyle.info}>
                            <Field name='contacts.instagram' placeholder='instagram' onChange={handleChange} onBlur={handleBlur} value={values.contacts.instagram} />
                        </div>
                        <div className={ProfileInfoStyle.info}>
                            <Field name='contacts.youtube' placeholder='youtube' onChange={handleChange} onBlur={handleBlur} value={values.contacts.youtube} />
                        </div>
                        <div className={ProfileInfoStyle.info}>
                            <Field name='contacts.github' placeholder='github' onChange={handleChange} onBlur={handleBlur} value={values.contacts.github} />
                        </div>
                        <div className={ProfileInfoStyle.info}>
                            <Field name='contacts.mainLink' placeholder='mainLink' onChange={handleChange} onBlur={handleBlur} value={values.contacts.mainLink} />
                        </div>
                    </div>
                    <div>
                        <button type={'submit'} className={ProfileInfoStyle.button}>Сохранить</button><label className={ProfileInfoStyle.error}>{error && 'Ошибка: ' + errorMessage }</label>
                    </div>
                    </div>


                </Form>
            )}
        </Formik>
    )
}

export default ProfileDataForm