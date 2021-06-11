const SET_USER_DATA = 'SET_USER_DATA';


function setUserData(data: Object) {
    return { type: SET_USER_DATA, payload: data };
}


const actions = {
    usersActions: {
        setUserData,

    },
    usersTypes: {
        SET_USER_DATA,
    
    },
}
export default actions 