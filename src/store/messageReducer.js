const initialState = [];

export const ADD_MESSAGE = 'ADD_MESSAGE';

export function messageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.payload]
    default:
      return state
  }
}

export default messageReducer;