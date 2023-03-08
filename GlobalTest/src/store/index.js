/* redux의 rootReducer를 정의하세요 */
import { combineReducers } from "redux";
import { PostReducer } from './4_redux';

                                        // ⬇️ 반찬통 넣어주기
export const rootReducer = combineReducers({PostReducer});
