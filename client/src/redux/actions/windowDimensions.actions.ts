const GET_WINDOW_DIMENSIONS = 'GET_WINDOW_DIMENSIONS';
const SET_WINDOW_DIMENSIONS = 'SET_WINDOW_DIMENSIONS';

function getWindowDimensions() {
    return { type: GET_WINDOW_DIMENSIONS };
}
function setWindowDimensions(size: Object) {
    return { type: SET_WINDOW_DIMENSIONS, payload: size };
}
const actions = {
    windowDimensionsTypes: { GET_WINDOW_DIMENSIONS, SET_WINDOW_DIMENSIONS },
    windowDimensionsActions: { getWindowDimensions, setWindowDimensions },
}
export default (actions);
