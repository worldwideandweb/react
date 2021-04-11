import React from 'react';
import WWWCard from 'worldwideandweb-storybook/dist/components/Card';
import Authentication from '../Form';
import useStyles from './Card.styles';

const CardRight: React.FC = () => {
  const styles = useStyles();
  return (
    <WWWCard.Right>
      <div className={styles.right}>
        <Authentication />
      </div>
    </WWWCard.Right>
  );
};

export default CardRight;
