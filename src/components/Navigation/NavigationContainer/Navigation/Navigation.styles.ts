import { makeStyles } from 'worldwideandweb-storybook/dist/components/External';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '80px',
      '& img': {
        width: '200px',
        margin: '0 16px',
      },
      '& .menuButton': {
        textTransform: 'uppercase',
        fontWeight: 600,
        '& .MuiButton-iconSizeMedium > svg': {
          fontSize: '24px',
        },
      },
    },
    right: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    left: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };
});

export default useStyles;
