import {createStore} from "redux";
import dashboardReducer from "./dashboardReducer";

const store = createStore(dashboardReducer);

export default store;