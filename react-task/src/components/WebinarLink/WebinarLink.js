import React, {Component} from 'react';
import {connect} from "react-redux";
import Webinars from "../Webinars/Webinars";
import * as actionCreator from '../../store/actions/webinar';
import Spinner from '../UI/Spinner/Spinner';

class WebinarLink extends Component {
    componentDidMount() {
        if (this.props.premium.length === 0 && this.props.free.length === 0){
            this.props.onFetchWebinar();
        }
    }

    render() {
        let webinar = <Spinner/>

        if(!this.props.loading){
            webinar = (
                <div>
                    <h1>{this.props.type === "premium" ? "Premium" : "Free"} Webinars</h1>
                    <Webinars data={this.props.type === "premium" ? this.props.premium : this.props.free}/>
                </div>
            );
        }

        return webinar;
    }
}

const mapStateToProps = state => {
    return {
        premium: state.premium,
        free: state.free,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchWebinar: () => dispatch(actionCreator.fetchWebinar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebinarLink);
