import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { PostReducer } from "./4_redux";

/* redux의 rootReducer를 정의하세요 */
// rootReducer안에는 PostReducer가 있다.
export const rootReducer = combineReducers({ PostReducer });

// store안에는 rootReducer가 있어야 한다
const reduxConfig = () => {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === "development" &&
      composeWithDevTools(applyMiddleware(logger))
  );
  return store;
};
export default reduxConfig;
