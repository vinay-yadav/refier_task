import React, {Component} from 'react';
import Input from '../../UI/Input/Input';
import classes from './UserBooking.module.css';
import * as actionCreator from '../../../store/actions/booking';
import {connect} from "react-redux";
import {Redirect} from "react-router";

class UserBooking extends Component {
    state = {
        formFields: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            mobile: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Mobile'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 10
                },
                valid: false,
                touched: false
            }
        },
        formValid: false
    }

    componentWillMount() {
        this.props.onInitBooking();
    }

    formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('form submitted', this.props.webinarId);
        
        const formData = {};
        for(let key in this.state.formFields){
            formData[key] = this.state.formFields[key].value;
        }

        formData['webinar'] = this.props.webinarData;

        console.log(formData);
        this.props.onCreateBooking(formData);
    }

    formValidation = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputValueHandler = (event, element) => {
        const newFormField = {...this.state.formFields};
        const updatedElement = {...newFormField[element]};

        updatedElement.value = event.target.value;
        updatedElement.valid = this.formValidation(updatedElement.value, updatedElement.validation);
        updatedElement.touched = true;
        newFormField[element] = updatedElement;

        let formIsValid = true;
        for (let key in newFormField) {
            formIsValid = newFormField[key].valid && formIsValid;
            if (!formIsValid) {
                break;
            }
        }

        this.setState({formFields: newFormField, formValid: formIsValid});
    }

    render() {
        const formElement = Object.keys(this.state.formFields).map(element => {
            return <Input
                key={element}
                elementConfig={this.state.formFields[element].elementConfig}
                value={this.state.formFields[element].value}
                invalid={!this.state.formFields[element].valid}
                shouldValidate={this.state.formFields[element].validation}
                isTouched={this.state.formFields[element].touched}
                changed={(event) => this.inputValueHandler(event, element)}
            />
        })

        return (
            <div className={classes.UserBooking}>
                {this.props.booked ? <Redirect to="/"/> : null}
                <form onSubmit={this.formSubmitHandler}>
                    {formElement}
                    <button disabled={!this.state.formValid} onClick={this.formSubmitHandler}>Submit</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        booked: state.booked
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onCreateBooking: (formData) => dispatch(actionCreator.createBooking(formData)),
        onInitBooking: () => dispatch(actionCreator.createBookingInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBooking);