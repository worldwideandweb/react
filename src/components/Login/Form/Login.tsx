import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import WWWButton from 'worldwideandweb-storybook/dist/components/Button/Button';
import { TextField, Typography } from 'worldwideandweb-storybook/dist/components/External';


interface IProps {

}

const Login: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <div>
        <TextField label="Username / Email" color={'primary'} />
        <TextField label="Password" type="password" color={'primary'} />
      </div>
      <div className="footer">
        <div className={'button'}>
          <WWWButton
            variant="contained"
            size={'large'}
            color="primary"
            endIcon={<FontAwesomeIcon icon={faArrowRight} />}
          >
            SIGN IN
          </WWWButton>
        </div>
        <Typography variant={'subtitle2'} className="terms">
          By signing in you are agreeing to our
          <b> Terms & Conditions</b>.
        </Typography>
      </div>
    </>
  );
};

export default Login;
