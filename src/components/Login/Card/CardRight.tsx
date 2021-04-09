import React from 'react';
import WWWCard from 'worldwideandweb-storybook/dist/components/Card';
import WWWButton from 'worldwideandweb-storybook/dist/components/Button/Button';
import {
  TextField,
  Typography,
} from 'worldwideandweb-storybook/dist/components/External';
import useStyles from './Card.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CardRight: React.FC = () => {
  const styles = useStyles();
  return (
    <WWWCard.Right>
      <div className={styles.right}>
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
      </div>
    </WWWCard.Right>
  );
};

export default CardRight;
