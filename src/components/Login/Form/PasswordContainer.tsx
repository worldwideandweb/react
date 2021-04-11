import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import React from 'react';
import * as yup from 'yup';

import useForm from '../../../hooks/useForm';
import useSnackbar from '../../../hooks/useSnackbar';
import Password from './Password';

export type TLogin = {
  username: string;
  password: string;
};

const formInitialValues: TLogin = {
  username: '',
  password: '',
};

const formSchemaValidation = {
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
};

const PasswordContainer: React.FC = () => {
  const sb = useSnackbar();

  const submit = async (values: TLogin) => {
    try {
      const user: CognitoUser = await Auth.signIn(
        values.username,
        values.password
      );
      console.log(user);
    } catch (e) {
      sb.trigger(`${e.message}`);
    }
  };

  const formik = useForm<TLogin>(
    formInitialValues,
    formSchemaValidation,
    submit
  );

  return <Password formik={formik} />;
};

export default PasswordContainer;
