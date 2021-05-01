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

        axios.get('/bookings.json')
            .then(res => {
                console.log(res);
                const bookings = Object.keys(res.data).map(ele => ({
                    ...res.data[ele],
                    bookId: ele
                }));
                dispatch(fetchBookingsSuccess(bookings));
            })
            .catch(err => dispatch(fetchBookingsFail()));
    }
}

export const createBookingSuccess = (formData) => {
    console.log(formData, 'createBookingSuccess');
    return {
        type: actionTypes.CREATE_BOOKING_SUCCESS,
        data: formData
    }
}

export const createBooking = (formData) => {
    return dispatch => {
        axios.post('/bookings.json', formData)
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