import caseStudyReducer from "./caseStudyReducer";
import dashboardReducer from "./dashboardReducer";
import {combineReducers} from "redux";

const globalReducer = combineReducers({
     caseStudyReducer,
     dashboardReducer
})

export default globalReducer;