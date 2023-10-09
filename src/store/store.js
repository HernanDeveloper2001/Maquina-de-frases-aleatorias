import { createStore, combineReducers } from 'redux'
import letterMessagesReducer from "./letterMessagesReducer"

const rootReducer = combineReducers({
  letterMessages: letterMessagesReducer,
});
  

export const store = createStore(rootReducer);
