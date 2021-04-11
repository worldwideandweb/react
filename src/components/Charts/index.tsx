import { makeStyles } from '@material-ui/core';
import React from 'react';
import WWWCard from 'worldwideandweb-storybook/dist/components/Card';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const useStyles = makeStyles({
  root: {
    padding: '24px',
    backgroundColor: 'white',
    width: '100%',
    minWidth: 'revert',
    maxWidth: '100%',
    boxSizing: 'border-box',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
});

const Chart: React.FC<IProps> = (props: IProps) => {
  const styles = useStyles();
  return <WWWCard.Card className={styles.root}>{props.children}</WWWCard.Card>;
};

export default Chart;
