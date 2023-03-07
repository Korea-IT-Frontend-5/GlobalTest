/* redux의 rootReducer를 정의하세요 */
import { combineReducers } from "redux";
import user from "./user";

export const rootReducer = combineReducers({ user });