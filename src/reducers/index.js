import { combineReducers } from "redux";
import { loggedUser, isProgressBar, fetchedData,  isUserRegistered } from "./logginReducer";

export default combineReducers({
    loggedUser,
    isProgressBar,
    fetchedData,
    isUserRegistered
});