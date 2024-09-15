import { SET_USER } from '../actions/user.actions';

const initialState = {
    username: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, username: action.payload.username };
        default:
            return state;
    }
};

export default userReducer