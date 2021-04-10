import React from 'react';
import * as yup from 'yup';

import useForm from '../../../hooks/useForm';
import Login from './Login';

const formInitialValues = () => {};

const formSchemaValidation = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginContainer: React.FC = () => {
  const form = useForm(formInitialValues, formSchemaValidation, () => {});
  return <Login />;
};

export default LoginContainer;
