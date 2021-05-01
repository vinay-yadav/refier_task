import React from 'react';
import {withRouter} from 'react-router-dom';
import Webinar from './Webinar/Webinar';
import classes from './Webinars.module.css';

const webinars = (props) => {
    const webinar = props.data.map(element => (
        <Webinar key={element.id} {...element} btnClicked={() => props.history.push("/webinar/book" + element.id)} />
    ))

    return (
        <div className={classes.Webinars}>
            {webinar}
        </div>
    )
}

export default withRouter(webinars);