import React, { memo } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
} from 'worldwideandweb-storybook/dist/components/External';
import {
  AccountCircle,
  Menu,
} from 'worldwideandweb-storybook/dist/icons/External';
import useStyles from './Navigation.styles';

interface IProps {
  handleDrawerClick: () => void;
}

const Navigation: React.FC<IProps> = ({ handleDrawerClick }: IProps) => {
  const styles = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={styles.root}>
        <div className={styles.left}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerClick}
          >
            <Menu />
          </IconButton>
          <img src="https://worldwideandweb.com/wp-content/uploads/2020/05/cropped-blueLogo-1.png" />
        </div>
        <div className={styles.right}>
          <Button
            color="inherit"
            className={'menuButton'}
            startIcon={<AccountCircle />}
          >
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default memo(Navigation);
