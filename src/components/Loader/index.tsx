import React from 'react';
import {
  CircularProgress,
  makeStyles,
} from 'worldwideandweb-storybook/dist/components/External';
import { flex } from 'worldwideandweb-storybook/dist/theme/theme';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    ...flex('column', 'center', 'center'),
  },
});

const Loader = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <CircularProgress disableShrink className={'spinner'} />
    </div>
  );
};

export default Loader;
