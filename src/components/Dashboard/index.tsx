import React from 'react';
import { Bar, Line, Radar } from 'react-chartjs-2';
import {
  Grid,
  Typography,
} from 'worldwideandweb-storybook/dist/components/External';
import theme from 'worldwideandweb-storybook/dist/theme/theme';
import Chart from '../Charts';
import NavigationContainer from '../Navigation/NavigationContainer/NavigationContainer';
import useStyles from './Dashboard.styles';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      hoverBackgroundColor: theme.palette.primary.main,
      hoverBorderColor: theme.palette.secondary.main,
      data: [35, 49, 50, 61, 76, 85, 90],
    },
    {
      label: 'My Second dataset',
      borderColor: theme.palette.secondary.main,
      borderWidth: 1,
      hoverBackgroundColor: theme.palette.secondary.main,
      hoverBorderColor: theme.palette.secondary.main,
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
        <Grid item xs={12}>
          <Typography variant={'h2'}>Current Users</Typography>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Bar data={data} />
          </Chart>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Radar data={data} />
          </Chart>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Line data={data} />
          </Chart>
        </Grid>
      </Grid>
      <Grid container className={styles.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant={'h2'}>User Acquisition</Typography>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Bar data={data} />
          </Chart>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Radar data={data} />
          </Chart>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Line data={data} />
          </Chart>
        </Grid>
      </Grid>
      <Grid container className={styles.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant={'h2'}>Popular Pages</Typography>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Bar data={data} />
          </Chart>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Radar data={data} />
          </Chart>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Chart>
            <Line data={data} />
          </Chart>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
