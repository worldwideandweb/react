import { faArchive, faBriefcase, faChartLine, faCogs, faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
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
        icon={faChartLine}
        text={'Dashboard'}
        to={routes.home.base}
        handleDrawerClose={() => setDrawerOpen(false)}
      />
      <List
        icon={faUserFriends}
        text={'Customers'}
        to={routes.home.base}
        handleDrawerClose={() => setDrawerOpen(false)}
      />
      <List
        icon={faBriefcase}
        text={'Employees'}
        to={routes.home.base}
        handleDrawerClose={() => setDrawerOpen(false)}
      />
      <List
        icon={faArchive}
        text={'Storage'}
        to={routes.home.base}
        handleDrawerClose={() => setDrawerOpen(false)}
      />
      <List
        icon={faCogs}
        text={'Settings'}
        to={routes.home.base}
        handleDrawerClose={() => setDrawerOpen(false)}
      />
    </MuiDrawer>
  );
};

export default Drawer;
