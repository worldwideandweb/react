import React from 'react';
import WWWCard from 'worldwideandweb-storybook/dist/components/Card';
import useStyles from './Card.styles';
import CardRight from './CardRight';
import CardLeft from './CardLeft';


const Card: React.FC = () => {
    const styles = useStyles();
  return (
    <div className={styles.root}>
      <WWWCard.Card className={styles.card}>
        <CardLeft />
        <CardRight />
      </WWWCard.Card>
    </div>
  );
};

export default Card;
