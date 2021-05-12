import windowSize from '../actions/windowDimensions.actions';

export default function windowDimensions(state = {
    width: Number,
    height: Number
}, action: { type: String, payload: { width: Number, height: Number } }) {
    const { SET_WINDOW_DIMENSIONS } = windowSize.windowDimensionsTypes;

    switch (action.type) {

        case SET_WINDOW_DIMENSIONS:
            return { width: action.payload.width, height: action.payload.height };
        default:
            return state;
    }
}