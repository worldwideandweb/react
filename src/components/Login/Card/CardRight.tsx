import React from 'react';
import WWWCard from 'worldwideandweb-storybook/dist/components/Card';
import LoginContainer from '../Form/LoginContainer';
import useStyles from './Card.styles';

const CardRight: React.FC = () => {
  const styles = useStyles();
  return (
    <WWWCard.Right>
      <div className={styles.right}>
        <LoginContainer />
      </div>
    </WWWCard.Right>
  );
};

export default CardRight;
