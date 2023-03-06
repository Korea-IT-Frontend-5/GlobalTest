import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../store";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development' && composeWithDevTools(applyMiddleware(logger))
)