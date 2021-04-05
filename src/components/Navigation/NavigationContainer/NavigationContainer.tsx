import React, { useState } from 'react';
import Drawer from '../Drawer/Drawer';
import Navigation from './Navigation/Navigation';

const NavigationContainer = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerClick = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      <Navigation handleDrawerClick={handleDrawerClick} />
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
};

export default NavigationContainer;
