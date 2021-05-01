import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.isTouched) {
        inputClasses.push(classes.Invalid);
    }

    return (
        <div className={classes}>
            <label className={classes.Label}>{props.children}</label>
            <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
        </div>
    );
}

export default input;