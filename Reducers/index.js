//here we combining all reducers avaailable in reducers folder an export which is going to be accessed in app.js
//can import multiple reducers here 
import todoReducer from "./todo";
import { combineReducers } from "redux";

const allReducers=combineReducers({//can call multiple reducers here and passing as an object
    todo:todoReducer
})

export default allReducers;