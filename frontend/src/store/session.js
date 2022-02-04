import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
};

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
};

//call the API to restore User Session
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
};


// call the API to login then set the session user from the response which includes id, username, email, dates
export const login = ({ email, password }) => async (dispatch) => {
    console.log(email, password)
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
    });
    const data = await response.json();
    console.log('===LOGIN THUNK', data);
    console.log('===LOGIN THUNK DATA.USER', data.user);
    dispatch(setUser(data.user));
    return response;
};


/*{ structure for session slice of state
    user: {
        id,
        email,
        username,
        createdAt,
        updatedAt
      }
    }
*/

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;