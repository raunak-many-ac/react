import {createStore, applyMiddleware} from "redux";
import dashboardReducer from "./dashboardReducer";
import thunk from "redux-thunk";


const store = createStore(dashboardReducer, applyMiddleware(thunk));

export default store;