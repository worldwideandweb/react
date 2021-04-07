import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Drawer as MuiDrawer } from 'worldwideandweb-storybook/dist/components/External';
import routes from '../../../routes/routes';
import useStyles from './Drawer.styles';
import List from './List/List';

interface IProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<IProps> = ({ drawerOpen, setDrawerOpen }: IProps) => {
  const styles = useStyles();
  return (
    <MuiDrawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      className={styles.root}
    >
      <List
        icon={faHome}
        text={'Home'}
        to={routes.home.base}
        handleDrawerClose={() => setDrawerOpen(false)}
      />
    </MuiDrawer>
  );
};

export default Drawer;
