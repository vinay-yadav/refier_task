import * as actionTypes from './actionTypes';
import axios from "axios";

export const fetchBookingsStart = () => {
    return {
        type: actionTypes.FETCH_BOOKINGS_START
    }
}

export const fetchBookingsFail = () => {
    return {
        type: actionTypes.FETCH_BOOKINGS_FAIL
    }
}


export const fetchBookingsSuccess = (bookings) => {
    return {
        type: actionTypes.FETCH_BOOKINGS_SUCCESS,
        bookings: bookings
    }
}

export const fetchBookings = () => {
    return dispatch => {
        dispatch(fetchBookingsStart());

        axios.get('/api/all-bookings/')
            .then(res => {
                dispatch(fetchBookingsSuccess(res.data));
            })
            .catch(err => dispatch(fetchBookingsFail()));
    }
}

export const createBookingSuccess = (formData) => {
    return {
        type: actionTypes.CREATE_BOOKING_SUCCESS,
        data: formData
    }
}

export const createBooking = (webId, formData) => {
    return dispatch => {
        axios.post('/api/create-booking/' + webId + '/', formData)
            .then(response => {
                dispatch(createBookingSuccess({
                    ...formData,
                    bookId: response.data.name
                }))
            })
            .catch(err => console.log(err));
    }
}


export const createBookingInit = () => {
    return {
        type: actionTypes.BOOKED_INIT
    }
}