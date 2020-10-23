import {createStore, applyMiddleware} from "redux";
import globalReducer from "./globalReducer";
import thunk from "redux-thunk";


const store = createStore(globalReducer, applyMiddleware(thunk));

export default store;