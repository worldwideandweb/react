import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import WWWButton from 'worldwideandweb-storybook/dist/components/Button/Button';
import WWWCard from 'worldwideandweb-storybook/dist/components/Card';
import { Typography } from 'worldwideandweb-storybook/dist/components/External';
import useStyles from './Card.styles';

const CardLeft: React.FC = () => {
  const styles = useStyles();
  return (
    <WWWCard.Left>
      <div className={styles.left}>
        <div>
          <Typography variant="h1">Get Started</Typography>
          <Typography variant="subtitle1">
            Get a head start on our app and find out the full potential it
            brings to your application. It's amazing and make the most of it!
            Click on the button below to view our training video!
          </Typography>
        </div>
        <div className="button">
          <WWWButton
            variant="contained"
            color="secondary"
            endIcon={<FontAwesomeIcon icon={faVideo} />}
          >
            Watch Tutorial
          </WWWButton>
        </div>
      </div>
    </WWWCard.Left>
  );
};

export default CardLeft;
