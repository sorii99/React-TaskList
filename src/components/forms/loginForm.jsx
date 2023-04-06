import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const LoginForm = () => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid email format').required('Mail is required'),
            password: Yup.string().required('Password is required')
        }
    );

    const initialCredentials = [
        {
            email: '',
            password: ''
        }
    ];

    return (
        <div>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', values);
                }}
            >
                {({ errors, touched, isSubmitting }) => {
                    return (
                        <Form>
                            <label htmlFor='email'>Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            {errors.email && touched.email && (<ErrorMessage name='email' component='div' />)}

                            <label htmlFor='password'>Password</label>
                            <Field id="password" type="password" name="password" placeholder="Password" />
                            {errors.password && touched.password && (<ErrorMessage name='password' component='div' />)}

                            <button type='submit'>Login</button>
                            {isSubmitting ? (<p>Login with your credentials...</p>) : null}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
