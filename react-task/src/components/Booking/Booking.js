import React from 'react';
import {Route} from "react-router-dom";
import classes from './Booking.module.css';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import UserForm from './UserBooking/UserBooking';

const booking = (props) => {
    let pageData = <Redirect to='/'/>

    if (props.free.length !== 0 && props.premium.length !== 0) {
        const data = props.free.concat(props.premium).find(element => element.id === props.match.params.webId);
        pageData = (
            <React.Fragment>
                <div className={classes.Card}>
                    <div>
                        <div className={classes.Title}>{data.title}</div>
                        <div className={classes.Info}>
                            <div> March 30, 2021</div>
                            <div> 5 p.m.</div>
                            <div>{data.instructor}</div>
                        </div>
                        <button onClick={() => props.history.replace(props.match.url + '/booking')}>
                            Book Your Seat
                        </button>
                    </div>
                </div>
                <Route path={props.match.url + '/booking'} exact
                       render={() => <UserForm webinarData={data}/>}
                />
            </React.Fragment>

        )
    }

    return pageData;
}

const mapStateToProps = state => {
    return {
        free: state.free,
        premium: state.premium
    }
}

export default connect(mapStateToProps)(withRouter(booking));