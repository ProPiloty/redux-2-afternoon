import axios from 'axios';

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

// ACTION TYPES
const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

// ACTION EXPORTS
export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data);
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

// USER REDUCER
function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email, firstName, lastName} = action.payload.user;
            return {email, firstName, lastName};
        default:
            return state;
    }
}

export default reducer;