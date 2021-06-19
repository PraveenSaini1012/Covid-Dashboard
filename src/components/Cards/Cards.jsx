import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { dailyconfirmed, dailyrecovered, dailydeceased, date } }) => {
  if (!dailyconfirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">India's Daily Covid Report</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={dailyconfirmed}
          lastUpdate={date}
          cardSubtitle="Number of daily confirmed COVID-19 cases."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={dailyrecovered}
          lastUpdate={date}
          cardSubtitle="Number of daily recovered COVID-19 cases."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={dailydeceased}
          lastUpdate={date}
          cardSubtitle="Number of daily death COVID-19 cases."
        />
      </Grid>
    </div>
  );
};

export default Info;
