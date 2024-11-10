import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reduxStore/userSlice';


// Configure and create the Redux store
const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;;