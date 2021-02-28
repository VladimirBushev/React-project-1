import MessFooterStyle from './MessFooter.module.css'
import React from 'react';
import { Formik, Form, Field } from 'formik';

const MessFooter = (props) => {
    return (
        <Formik initialValues={{ message: '' }}
            onSubmit={(values, {resetForm}) => {
                props.addMess(values.message)
                resetForm()
            }}
        >
            { () => (
                <Form >
                    <div className={MessFooterStyle.footer}>
                        <Field name='message' />  
                        <button type='submit' >Отправить</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}


export default MessFooter