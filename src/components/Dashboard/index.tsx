import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Grid } from 'worldwideandweb-storybook/dist/components/External';
import Chart from '../Charts';
import NavigationContainer from '../Navigation/NavigationContainer/NavigationContainer';
import useStyles from './Dashboard.styles';
import styles from './Dashboard.styles';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const Dashboard = () => {
  const styles = useStyles();
  return (
    <>
      <NavigationContainer />
      <Grid container className={styles.root} spacing={2}>
        <Grid item sm={6} xs={12}>
          <Chart>
            <Bar data={data} />
          </Chart>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Chart>
            <Bar data={data} />
          </Chart>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
