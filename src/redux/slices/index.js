import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import taskSlice from './taskSlice';
import weatherSlice from './weatherSlice';


export default rootReducer = combineReducers({
    user: userSlice,
    tasks: taskSlice,
    weather: weatherSlice
});

