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

        axios.get('/api/')
            .then(response => {
                dispatch(fetchWebinarSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchWebinarFail());
            })
    }
}

export const upVoteHandler = (premium, free) => {
    return {
        type: actionTypes.UP_VOTE,
        premium: premium,
        free: free
    }
}

export const upVoteProcess = (webinar) => {
    return (dispatch, getState) => {

        axios.post('/api/up-vote/' + webinar.id + '/')
            .then(res => {
                let free = null;
                let premium = null;

                if (webinar.cost === "0") {
                    free = getState().free.map(element => {
                        if (element.id === webinar.id) {
                            return {
                                ...element,
                                up_vote: element.up_vote + 1
                            }
                        } else {
                            return element
                        }
                    })
                } else {
                    premium = getState().premium.map(element => {
                        if (element.id === webinar.id) {
                            return {
                                ...element,
                                up_vote: element.up_vote + 1
                            }
                        } else {
                            return element
                        }
                    })
                }

                dispatch(upVoteHandler(premium, free));
            })
            .catch(err => console.log(err));
    }
}


export const downVoteHandler = (premium, free) => {
    return {
        type: actionTypes.DOWN_VOTE,
        premium: premium,
        free: free
    }
}


export const downVoteProcess = (webinar) => {
    return (dispatch, getState) => {

        axios.post('/api/down-vote/' + webinar.id + '/')
            .then(res => {
                let free = null;
                let premium = null;

                if (webinar.cost === "0") {
                    free = getState().free.map(element => {
                        if (element.id === webinar.id) {
                            return {
                                ...element,
                                down_vote: element.down_vote + 1
                            }
                        } else {
                            return element
                        }
                    })
                } else {
                    premium = getState().premium.map(element => {
                        if (element.id === webinar.id) {
                            return {
                                ...element,
                                down_vote: element.down_vote + 1
                            }
                        } else {
                            return element
                        }
                    })
                }

                dispatch(downVoteHandler(premium, free));
            })
            .catch(err => console.log(err));
    }
}

