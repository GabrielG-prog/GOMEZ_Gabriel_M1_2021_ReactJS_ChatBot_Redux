import React, { Fragment } from 'react';
import { Box, Grid, List, Paper } from '@material-ui/core'

import Header from '../header';
import { MessageListStore } from '../messageList';
import { MessageFormStore } from '../messageForm';
import { BotListStore } from '../botList';

const Home = () => {

  return (
    <Fragment>
      <Header />
      <Box mt={3}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        <Grid item xs={12} md={4} >
          <List>
            <Box pl={2} pr={2}>
              <BotListStore />
            </Box>
          </List>
        </Grid>
        <Grid item xs={12} md={8} >
          <Paper square >
            <div className="box">
              <div className="messages">
                <MessageListStore />
              </div>
            </div>
          </Paper>
          <Box mt={2}>
            <MessageFormStore />
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Fragment>
  );
}

export default Home;