import { CognitoUser } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
import React from 'react';
import * as yup from 'yup';
import useForm from '../../../hooks/useForm';
import useSnackbar from '../../../hooks/useSnackbar';
import NewPassword from './NewPassword';

export type TNewPassword = {
  password: string;
};

const formInitialValues: TNewPassword = {
  password: '',
};

const formSchemaValidation = {
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
};

interface IProps {
  user: CognitoUser;
}

const NewPasswordContainer: React.FC<IProps> = ({ user }: IProps) => {
  const sb = useSnackbar();

  const submit = async (values: TNewPassword) => {
    try {
      await Auth.completeNewPassword(user, values.password);
    } catch (e) {
      sb.trigger(`${e.message}`);
    }
  };

  const formik = useForm<TNewPassword>(
    formInitialValues,
    formSchemaValidation,
    submit
  );

  return <NewPassword formik={formik} />;
};

export default NewPasswordContainer;
