import windowDimensions from './windowDimensions.reducer';
import user from './user.reducer';

import { combineReducers } from 'redux'
export default combineReducers({
    windowDimensions,
    user,
})
