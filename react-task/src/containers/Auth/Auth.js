import React, {Component} from "react";
import Input from '../../components/UI/Input/Input';
import classes from './Auth.module.css';
import axios from "axios";

class Auth extends Component {
    state = {
        formFields: {
            username: {
                type: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Username'
                },
                value: ''
            },
            password: {
                type: 'input',
                config: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: ''
            }
        },
        error: null
    }


    valueChangeHandler = (event, element) => {
        const newField = {...this.state.formFields};
        const newFieldData = {...newField[element]};
        newFieldData.value = event.target.value;
        newField[element] = newFieldData;

        this.setState({formFields: newField});
    }

    formSubmitHandler = (event) => {
        event.preventDefault();

        const formData = {
            username: this.state.formFields.username.value,
            password: this.state.formFields.password.value
        }

        axios.post('/api/login/', formData)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err.response.data.error);
                this.setState({error: err.response.data.error});
            });
    }

    linkedInHandler = () => {
        const url = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78onguce9sn3d9&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flinkedin-oauth2%2Fcallback&state=foobar&scope=r_liteprofile%20r_emailaddress';
        window.open(url, 'linkedIn', "width=520, height=710, top=200, left=750" );
    }

    render() {
        const formInput = Object.keys(this.state.formFields).map(element => {
            return <Input
                key={element}
                elementConfig={this.state.formFields[element].config}
                value={this.state.formFields[element].value}
                changed={(event) => this.valueChangeHandler(event, element)}
            />
        })

        return (
            <div className={classes.Auth}>
                {this.state.error ? this.state.error : null}
                <form onSubmit={this.formSubmitHandler}>
                    {formInput}
                    <button onClick={this.formSubmitHandler}>Login</button>
                </form>
                <button onClick={this.linkedInHandler}>Continue with LinkedIn</button>
            </div>
        );
    }
}

export default Auth;