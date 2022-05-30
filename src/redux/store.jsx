// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
// import weatherReducer from "../redux/weatherReducer";

// const rootReducer = combineReducers({
//     weather: weatherReducer,
// });
// export const store = createStore(rootReducer, applyMiddleware(thunk));
//====================================================================
import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../redux-toolkit/weatherSlice";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});

