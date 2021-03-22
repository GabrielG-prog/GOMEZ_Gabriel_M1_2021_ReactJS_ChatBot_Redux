import React, { Fragment } from 'react';

import { connect } from "react-redux";
import { botSelector} from '../../store/selector';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

export const BotList = ({bot}) => {
  return (
    <Fragment>
      {bot.map(d => 
        <ListItem alignItems="flex-start" key={d.id}>
          <ListItemAvatar>
            <Avatar alt={d.name} src={d.avatar}  />
          </ListItemAvatar>
          <ListItemText primary={d.name} />
        </ListItem>
      )}  
    </Fragment>
  );
}

export const BotListStore = connect (
  (state) => ({
    bot: botSelector(state)
  }),
)(BotList)