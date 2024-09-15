import { combineReducers } from 'redux';
import userReducer from './user.reducers';

const rootReducer = combineReducers({
    userState: userReducer
});

export default rootReducer;