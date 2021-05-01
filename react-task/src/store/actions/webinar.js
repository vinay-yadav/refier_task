import * as actionTypes from './actionTypes';
import axios from "axios";

export const fetchWebinarStart = () => {
    return {
        type: actionTypes.FETCH_WEBINAR_START
    }
}

export const fetchWebinarFail = () => {
    return {
        type: actionTypes.FETCH_WEBINAR_FAIL
    }
}

export const fetchWebinarSuccess = (webinars) => {
    const freeWebinars = webinars.filter(element => element['cost'] === "0");
    const premiumWebinars = webinars.filter(element => element['cost'] !== "0");

    return {
        type: actionTypes.FETCH_WEBINAR_SUCCESS,
        webinars: {free: freeWebinars, premium: premiumWebinars}
    }
}

export const fetchWebinar = () => {
    return dispatch => {
        dispatch(fetchWebinarStart());

        axios.get('/webinars.json')
            .then(response => {
                const webinars = Object.keys(response.data).map(element => {
                    return {
                        ...response.data[element],
                        id: element
                    }
                });
                dispatch(fetchWebinarSuccess(webinars));
            })
            .catch(error => {
                dispatch(fetchWebinarFail());
            })
    }
}