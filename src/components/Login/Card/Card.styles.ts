import { makeStyles } from 'worldwideandweb-storybook/dist/components/External';
import theme, { flex } from 'worldwideandweb-storybook/dist/theme/theme';

const useStyles = makeStyles({
  root: {
    ...flex('column', 'center', 'center'),
    height: '100%',
  },
  right: {
    ...flex('column', 'center', 'flex-start'),
    marginTop: '60px',
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
