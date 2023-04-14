import {legacy_createStore,applyMiddleware} from "redux";
import logger  from "redux-logger"
import { reducer } from "./Reducer";


const store = legacy_createStore(reducer,applyMiddleware(logger));

export default store;