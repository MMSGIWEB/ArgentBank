import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './userSlice';


// Combine reducers
const rootReducer = combineReducers({
    //pp : reducer(avec fonction créée au préalable dans un autre fichier)
    user: userSlice
    // data: asynchronousReducer
});

// Configure the Redux store
const store = configureStore({
    reducer: rootReducer
});

export default store;;