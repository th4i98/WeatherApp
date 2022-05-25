import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
    weather: weatherReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
