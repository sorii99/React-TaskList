import React from 'react';
import { User } from '../../models/userClass';
import { ROLES } from '../../models/userRole';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const RegisterForm = () => {

    let user = new User();

    const registerSchema = Yup.object.shape(
        {
            username: Yup.string()
                .min(6, 'Username too short ')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string().email('Invalid email format').required('Mail is required'),
            password: Yup.string().min(8, 'Password too short')
                .matches(`/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]$/`)
                .required('Password is required'),
            confirm: Yup.string().when("password", {
                is: value => (value && value.length > 0 ? true : false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    "Password must match"
                )
            }).required('You must confirm the password'),
            role: Yup.string.oneOf(
                [ROLES.USER, ROLES.ADMIN],
                "You must select a Role: User / Admin"
            ).required('Role is required')
        }
    )

    const initialData = [
        {
            username: '',
            email: '',
            password: '',
            confirm: '',
            role: ROLES.USER
        }
    ];

    return (
        <div>
            <h4>Register form</h4>
            <Formik
                initialValues={initialData}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched, isSubmitting }) => {
                    return (
                        <Form>
                            <label htmlFor='username'>Username</label>
                            <Field id="username" type="username" name="username" placeholder="Username" />
                            {errors.username && touched.username && (<ErrorMessage name='username' component='div' />)}

                            <label htmlFor='email'>Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            {errors.email && touched.email && (<ErrorMessage name='email' component='div' />)}

                            <label htmlFor='password'>Password</label>
                            <Field id="password" type="password" name="password" placeholder="Password" />
                            {errors.password && touched.password && (<ErrorMessage name='password' component='div' />)}

                            <label htmlFor='confirm'>confirm</label>
                            <Field id="confirm" type="password" name="confirm" placeholder="Confirm password" />
                            {errors.confirm && touched.confirm && (<ErrorMessage name='confirm' component='div' />)}

                            <button type='submit'>Register</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>) : null}
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}