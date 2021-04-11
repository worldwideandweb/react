import { makeStyles } from 'worldwideandweb-storybook/dist/components/External';
import theme, { flex } from 'worldwideandweb-storybook/dist/theme/theme';

const useStyles = makeStyles({
  root: {
    ...flex('column', 'center', 'center'),
    height: '100%',
  },
  card: {
    height: 'fit-content',
    [theme.breakpoints.down('md')]: {
      maxWidth: 'none',
      minWidth: 'revert',
      width: 'auto',
    },
  },
  cardLeft: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  cardRight: {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      borderTopLeftRadius: '30px',
      borderBottomLeftRadius: '30px',
    },
  },
  right: {
    ...flex('column', 'center', 'flex-start'),
    width: '100%',
    position: 'relative',
    height: '100%',
    '& .MuiFormControl-root': {
      width: '100%',
      marginBottom: '16px',
      '& .MuiFormLabel-root, & .MuiInputBase-root': {
        fontSize: '24px',
      },
    },
    '& .footer': {
      width: '100%',
    },
    '& .button': {
      ...flex('row', 'flex-end'),
      marginTop: '16px',
      width: '100%',
      '& button': {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      },
    },
    '& h6': {
      width: '100%',
      fontWeight: 300,
      marginTop: '32px',
      textAlign: 'center',
      '& b': {
        color: theme.palette.primary.main,
      },
    },
  },
  rightImage: {
    width: '250px',
    maxWidth: '100%',
  },
  left: {
    ...flex('column', 'space-between', 'flex-start'),
    width: '100%',
    height: '400px',
    '& h1': {
      marginBottom: '32px',
    },
    '& h6': {
      color: 'white',
      fontWeight: 300,
    },
    '& .button': {
      width: '100%',
      textAlign: 'center',
    },
  },
});

export default useStyles;
