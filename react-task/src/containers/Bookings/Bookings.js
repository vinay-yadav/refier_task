import React, {Component} from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Bookings.module.css';
import {connect} from "react-redux";
import * as actionCreator from '../../store/actions/booking';


class Bookings extends Component {
    componentDidMount() {
        if (this.props.bookings.length === 0 && !this.props.loading)
        this.props.onFetchBookings();
    }

    render() {
        let showData = <Spinner/>;

        const allBookings = this.props.bookings.map(ele => {
            return (
                <tr key={ele.bookId}>
                    <td>{ele.bookId}</td>
                    <td>{ele.name}</td>
                    <td>{ele.mobile}</td>
                    <td>{ele.email}</td>
                    <td>{ele.webinar.title}</td>
                    <td>{ele.webinar.event_on}</td>
                </tr>
            )
        })

        if (!this.props.loading) {
            showData = (
                <div className={classes.Bookings}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Booking ID</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Webinar</th>
                                <th>Event On</th>
                            </tr>
                            {allBookings}
                        </tbody>
                    </table>
                </div>
            );
        }


        return (
            <React.Fragment>
                <h1>All Bookings</h1>
                {showData}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookings: state.bookings,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchBookings: () => dispatch(actionCreator.fetchBookings())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookings);