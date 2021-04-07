import { makeStyles } from 'worldwideandweb-storybook/dist/components/External';

const useStyles = makeStyles(() => {
  return {
    root: {
      '& .MuiPaper-root': {
        width: '250px',
        padding: '8px 0',
        boxSizing: 'border-box',
        backgroundColor: '#424242',
      },
    },
  };
});

export default useStyles;
