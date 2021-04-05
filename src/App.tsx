import React from 'react';
import WWWButton from 'worldwideandweb-storybook/dist/components/Button/Button';
import { Box } from 'worldwideandweb-storybook/dist/components/External';
import './App.css';
import NavigationContainer from './components/Navigation/NavigationContainer/NavigationContainer';

function App() {
  return (
    <div className="App">
      <NavigationContainer />
      <WWWButton variant="contained">testing button</WWWButton>
      <Box marginRight={'amir'}>Muddasir is the best</Box>
    </div>
  );
}

export default App;
