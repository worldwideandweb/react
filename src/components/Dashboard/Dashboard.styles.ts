import { makeStyles } from 'worldwideandweb-storybook/dist/components/External';
import { flex } from 'worldwideandweb-storybook/dist/theme/theme';

const useStyles = makeStyles({
  root: {
    ...flex('row', 'space-between'),
    '& > div': {
        width: '49%',
    },
  },
});

export default useStyles;
