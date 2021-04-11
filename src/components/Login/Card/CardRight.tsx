import React from 'react';
import WWWCard from 'worldwideandweb-storybook/dist/components/Card';
import Authentication from '../Form';
import useStyles from './Card.styles';

const CardRight: React.FC = () => {
  const styles = useStyles();
  return (
    <WWWCard.Right className={styles.cardRight}>
      <img
        className={styles.rightImage}
        src={
          'https://worldwideandweb.com/wp-content/uploads/2020/05/blueLogo-1.png'
        }
        alt="Logo"
      />
      <div className={styles.right}>
        <Authentication />
      </div>
    </WWWCard.Right>
  );
};

export default CardRight;
