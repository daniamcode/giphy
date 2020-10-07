import actionTypes from '../actions/actionTypes';

const gifReducer = (state = {gifs: [], isLoading: true}, action) => {
    switch(action.type) {
        case actionTypes.LOAD_GIFS:
            return action.payload;
        default:
            return state;
    }
}

export default gifReducer;