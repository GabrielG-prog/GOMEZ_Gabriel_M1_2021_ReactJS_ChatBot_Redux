import { ADD_MESSAGE } from "./messageReducer";

export const addMessageAction = (message) => ({
  type: ADD_MESSAGE,
  payload: message

})