import React from 'react';
import classes from './Webinar.module.css';

const webinar = (props) => {
    return (
        <div className={classes.Webinar}>
            <div>
                <div>
                    <h4>{props.title}</h4>
                </div>
                <div>
                    <p>{props.description}</p>
                    <div className={classes.Event}>
                        <div>{props.event_on}</div>
                        <div>DATE</div>
                    </div>
                    <div className={classes.Event}>
                        <div><strong>{props.instructor}</strong></div>
                        <div>{props.cost === "0" ? "Free" : props.cost}</div>
                    </div>
                    <div className={classes.Event}>
                        <div className={classes.Btn} onClick={props.btnClicked}>click to know more</div>
                        <div className={classes.Votes}>
                            <span>{props.up_vote}</span>
                            <span>{props.down_vote}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default webinar;