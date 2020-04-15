import { combineReducers } from "redux";
import { loggedUser, isProgressBar, fetchedData } from "./logginReducer";

export default combineReducers({
    loggedUser,
    isProgressBar,
    fetchedData
});