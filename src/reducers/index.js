import gifReducer from './gif';
import {
    combineReducers
} from 'redux';

const rootReducer = combineReducers({
    gif: gifReducer
})

export default rootReducer;
