import React from 'react';
import { Drawer as MuiDrawer } from 'worldwideandweb-storybook/dist/components/External';
import useStyles from './Drawer.styles';

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
      
    </MuiDrawer>
  );
};

export default Drawer;
