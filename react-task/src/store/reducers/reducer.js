import * as actionTypes from '../actions/actionTypes';

const initialState = {
    free: [],
    premium: [],
    bookings: [],
    loading: false,
    booked: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FETCH_WEBINAR_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.FETCH_WEBINAR_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.FETCH_WEBINAR_SUCCESS):
            return {
                ...state,
                loading: false,
                free: action.webinars.free,
                premium: action.webinars.premium
            }
        case (actionTypes.FETCH_BOOKINGS_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.FETCH_BOOKINGS_FAIL):
            return {
                ...state,
                loading: false
            }
        case (actionTypes.FETCH_BOOKINGS_SUCCESS):
            return {
                ...state,
                loading: false,
                bookings: action.bookings
            }
        case (actionTypes.CREATE_BOOKING_SUCCESS):
            return {
                ...state,
                bookings: state.bookings.concat([action.data]),
                booked: true
            }
        case (actionTypes.BOOKED_INIT):
            return {
                ...state,
                booked: false
            }
        default:
            return state;
    }
}

export default reducer;