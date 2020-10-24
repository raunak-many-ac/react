import caseStudyReducer from "./reducers/caseStudyReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import {combineReducers} from "redux";

const globalReducer = combineReducers({
     caseStudyReducer,
     dashboardReducer
})

export default globalReducer;