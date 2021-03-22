import { botReducer } from "./botReducer"
import { messageReducer } from "./messageReducer"

const {
  combineReducers,
  createStore
} = require("redux")

export default createStore(
  combineReducers({
    message: messageReducer,
    bot: botReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)