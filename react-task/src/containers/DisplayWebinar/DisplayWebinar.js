import React, {Component} from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import Webinars from '../../components/Webinars/Webinars';
import {connect} from "react-redux";
import * as actionCreate from '../../store/actions/webinar';

class DisplayWebinar extends Component {
    componentDidMount() {
        if (this.props.free.length === 0 && this.props.premium.length === 0)
            this.props.onFetchWebinar();
    }

    render() {
        let webinar = <Spinner/>;

        if (!this.props.loading) {
            webinar = (
                <React.Fragment>
                    <h2>Free Webinars</h2>
                    <Webinars data={this.props.free}/>
                    <hr style={{margin: '30px'}} />
                    <h2>Premium Webinars</h2>
                    <Webinars data={this.props.premium}/>
                </React.Fragment>
            );
        }


        return (
            <div>
                <h1>All Webinars</h1>
                {webinar}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        free: state.free,
        premium: state.premium,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchWebinar: () => dispatch(actionCreate.fetchWebinar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayWebinar);