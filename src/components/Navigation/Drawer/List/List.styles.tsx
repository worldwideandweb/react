import { makeStyles } from 'worldwideandweb-storybook/dist/components/External';
import theme from 'worldwideandweb-storybook/dist/theme/theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '8px 16px',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'bottom',
    textDecoration: 'none',
    color: theme.typography.h1.color,
    '& svg': {
      fontSize: '24px',
      marginRight: '24px',
      color: theme.typography.h1.color,
    },
    '& p': {
      lineHeight: '1.9',
      fontWeight: 500,
      color: theme.typography.h1.color,
    },
  },
});

export default useStyles;
