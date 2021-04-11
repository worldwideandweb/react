import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormikProps } from 'formik/dist/types';
import React, { memo } from 'react';
import WWWButton from 'worldwideandweb-storybook/dist/components/Button/Button';
import {
  CircularProgress,
  TextField,
  Typography,
} from 'worldwideandweb-storybook/dist/components/External';
import { TLogin } from './LoginContainer';

interface IProps {
  formik: FormikProps<TLogin>;
  loading: boolean;
}

const Login: React.FC<IProps> = ({ formik, loading }: IProps) => {
  const loadingIcon = loading ? (
    <CircularProgress disableShrink size={20} color='inherit' />
  ) : (
    <FontAwesomeIcon icon={faArrowRight} />
  );
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          id="username"
          name="username"
          label="Username / Email"
          color={'primary'}
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          autoComplete="off"
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          color={'primary'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          autoComplete="off"
        />
      </div>
      <div className="footer">
        <div className={'button'}>
          <WWWButton
            variant="contained"
            size={'large'}
            color="primary"
            endIcon={loadingIcon}
            type="submit"
          >
            SIGN IN
          </WWWButton>
        </div>
        <Typography variant={'subtitle2'} className="terms">
          By signing in you are agreeing to our
          <b> Terms & Conditions</b>.
        </Typography>
      </div>
    </form>
  );
};

export default memo(Login);
