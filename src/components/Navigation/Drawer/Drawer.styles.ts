import { makeStyles } from 'worldwideandweb-storybook/dist/components/External';

const useStyles = makeStyles(() => {
  return {
    root: {
      '& .MuiPaper-root': {
        width: '250px',
        backgroundColor: '#ffffff',
      },
    },
  };
});

export default useStyles;
