import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessageAction } from '../../store/action';
import { 
  Box, 
  InputBase, 
  Toolbar,
  IconButton,
  Paper
} 
from '@material-ui/core';

import {connect} from 'react-redux';
import { botSelector } from '../../store/selector';

import SendIcon from '@material-ui/icons/Send';

export const MessageForm = ({bot}) => {
    
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const createMessage = (messageInput) => {
    if (messageInput !== '--commands'){
      const message = {
        id: String(Math.floor(Math.random() * Math.floor(10000))),
        pseudo: 'user',
        isUser: true,
        message: messageInput,
        sentAt: Date.now()
      }   
      addMessage(message)
    } else {
      const messageHelp = {
        id: String(Math.floor(Math.random() * Math.floor(10000))),
        pseudo: 'Bot assistant',
        avatar: 'robot.jpg',
        isUser: false,
        message: 'Les commandes disponibles : Bots, Salut, Bye, Bonjour, Méteo, Hey, Au revoir, Date, ça va, bien',
        sentAt: Date.now()
      }
        addMessage(messageHelp)
    }
    setMessage("");
  }

  const addMessage = messageUser => {
    dispatch(addMessageAction(messageUser))
    bot.map((i, index) =>
      i.options.map(o => o.item === messageUser.message ? createMessageBot(i.name, o.response , i.avatar) : false)
    )
  }

  const createMessageBot = (name, messagebot, avatar) => {

    const messageBot = {
      id: String(Math.floor(Math.random() * Math.floor(10000))),
      pseudo: name,
      avatar,
      message: messagebot,
      isUser: false,
      sentAt: Date.now()
    }
    dispatch(addMessageAction(messageBot))
  }

      
  const handleKeyUp = event => {
    if (message.trim() === "") return false;
    if (event.key === 'Enter') {
      createMessage(message)
    }
  }

  const handleChange = e => {
    let newMessage = e.target.value;
    setMessage(newMessage);
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (message.trim() === "") return false;
    createMessage(message);
  }

  return (      
    <Toolbar position="relative" >
      <Box width="85%" m="auto">
        <Paper onSubmit={handleSubmit} component="form" >
          <Box p="5px" display="flex" >
            <InputBase
              fullWidth={true}
              onKeyUp={handleKeyUp}
              required
              onChange={handleChange}
              value={message}
              placeholder='--commands: voir les commandes'
              inputProps={{ 'aria-label': '--commands: voir les commandes' }}
            />
            <IconButton type="submit" aria-label="search">
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Toolbar>
  )
}

export const MessageFormStore = connect (
  (state) => ({
    bot: botSelector(state)
  }),
)(MessageForm)