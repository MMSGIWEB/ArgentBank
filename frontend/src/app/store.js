import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reduxStore/userSlice';


// Configure the Redux store
const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;;