import React from 'react';
import {Route} from "react-router-dom";
import classes from './Booking.module.css';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import UserForm from './UserBooking/UserBooking';
import * as actions from '../../store/actions/webinar';
import PreRequisite from '../PreRequisite/PreRequisite';

const booking = (props) => {
    const upVoteHandler = (webinar) => {
        props.onUpVote(webinar);
    }

    const downVoteHandler = (webinar) => {
        props.onDownVote(webinar);
    }

    let preRequisite = null;

    let pageData = <Redirect to='/'/>

    if (props.free.length !== 0 && props.premium.length !== 0) {
        const data = props.free.concat(props.premium).find(element => element.id === +props.match.params.webId);

        if (data.id === 10) {
            preRequisite = (
                <React.Fragment>
                    <br/><br/>
                    <PreRequisite/>
                    <br/><br/>
                </React.Fragment>
            )
        }

        pageData = (
            <React.Fragment>
                <div className={classes.Card}>
                    <div>
                        <div className={classes.Title}>{data.title}</div>
                        <div className={classes.Info}>
                            <div> March 30, 2021</div>
                            <div> 5 p.m.</div>
                            <div>{data.instructor}</div>
                            Up Vote
                            <div className={classes.Vote} onClick={() => upVoteHandler(data)}>{data.up_vote}</div>
                            Down Vote
                            <div className={classes.Vote} onClick={() => downVoteHandler(data)}>{data.down_vote}</div>
                        </div>
                        <button onClick={() => props.history.replace(props.match.url + '/booking')}>
                            Book Your Seat
                        </button>
                    </div>
                </div>
                {preRequisite}
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

const mapDispatchToProps = dispatch => {
    return {
        onUpVote: (webinar) => dispatch(actions.upVoteProcess(webinar)),
        onDownVote: (webinar) => dispatch(actions.downVoteProcess(webinar))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(booking));