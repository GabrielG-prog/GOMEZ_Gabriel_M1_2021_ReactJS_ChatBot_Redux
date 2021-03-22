import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { messageSelector} from '../../store/selector';

import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

export const MessageList = ({message}) => {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
  }))(Badge);

  return (
    <Fragment>
      {message.map(m => m.message !== '' &&
        <Fragment>
          {m.isUser ?
            <ListItem button key={m.id}>
              <ListItemAvatar>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar alt={m.pseudo} src={m.avatar} />
                </StyledBadge>
              </ListItemAvatar>
              <Box color="primary.main">
                <ListItemText primary='You' secondary={m.message} />
              </Box>
              <Box position="absolute" right={0} mt={0} mr="15px" fontSize={10} fontFamily="fontFamily">
                <p >{m.sentAt}</p>
              </Box>
            </ListItem>
          :
            <ListItem button key={m.id}>
              <ListItemAvatar>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar alt={m.pseudo} src={m.avatar} />
                </StyledBadge>
              </ListItemAvatar>
              <ListItemText primary={m.pseudo} secondary={m.message} />
              <Box mt={0} mr="15px" fontSize={10} fontFamily="fontFamily">
                <p >{m.sentAt}</p>
              </Box>
            </ListItem>
          }
        </Fragment>
      )}
    </Fragment>
  )
}

export const MessageListStore = connect (
  (state) => ({
    message: messageSelector(state)
  }),
)(MessageList)