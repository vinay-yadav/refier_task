import React from 'react';
import {withRouter} from 'react-router-dom';
import Webinar from './Webinar/Webinar';
import classes from './Webinars.module.css';
import {connect} from "react-redux";
import * as action from '../../store/actions/webinar';

const webinars = (props) => {
    const upVoteHandler = (webinar) => {
        props.onUpVote(webinar);
    }

    const downVoteHandler = (webinar) => {
        props.onDownVote(webinar);
    }

    const webinar = props.data.map(element => (
        <Webinar
            key={element.id} {...element}
            btnClicked={() => props.history.push("/webinar/book" + element.id)}
            upClick={() => upVoteHandler(element)}
            downClick={() => downVoteHandler(element)}
        />
    ))

    return (
        <div className={classes.Webinars}>
            {webinar}
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onUpVote: (webinar) => dispatch(action.upVoteProcess(webinar)),
        onDownVote: (webinar) => dispatch(action.downVoteProcess(webinar))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(webinars));