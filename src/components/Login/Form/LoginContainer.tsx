import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import React, { useState } from 'react';
import * as yup from 'yup';

import useForm from '../../../hooks/useForm';
import useSnackbar from '../../../hooks/useSnackbar';
import Login from './Login';

export type TLogin = {
  username: string;
  password: string;
};

const formInitialValues: TLogin = {
  username: '',
  password: '',
};

const formSchemaValidation = {
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
};

interface IProps {
  setUser: React.Dispatch<React.SetStateAction<CognitoUser | undefined>>;
}

const LoginContainer: React.FC<IProps> = ({ setUser }: IProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const sb = useSnackbar();

  const submitLogin = async (values: TLogin) => {
    try {
      setLoading(true);
      sb.trigger('Please wait, logging you in....', 'info');
      const user: CognitoUser = await Auth.signIn(
        values.username,
        values.password
      );
      setUser(user);
    } catch (e) {
      sb.trigger(`${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  const formik = useForm<TLogin>(
    formInitialValues,
    formSchemaValidation,
    submitLogin
  );

  return <Login formik={formik} loading={loading} />;
};

export default LoginContainer;
