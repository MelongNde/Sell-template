import React from 'react';
import RegisterLayout from '../templates/RegisterLayout'
import RegisterForm from '../organismes/RegisterForm'
const Register = () => {
    return (
        <RegisterLayout className='mt-5'>
            <RegisterForm />
        </RegisterLayout>
    );
}

export default Register;
