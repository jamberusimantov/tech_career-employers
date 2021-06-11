import usersActions from '../actions/user.actions';
const {
    SET_USER_DATA,
} = usersActions.usersTypes;


export default function user(
    state = { userData: Object },
    action: { type: string, payload: Object }) {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userData: action.payload,
            };
        default:
            return state;
    }
}