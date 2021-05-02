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

        if (!this.props.loading) {
            const dateTimeHandler = (date) => {
                const dateTime = new Date(date);
                const dateP = `${dateTime.getDate()}-${dateTime.getMonth()}-${dateTime.getFullYear()}`;
                const timeP = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
                return `${dateP} ${timeP}`;
            }

            const allBookings = this.props.bookings.map(ele => {
                return (
                    <tr key={ele.bookId}>
                        <td>{ele.bookId}</td>
                        <td>{ele.name}</td>
                        <td>{ele.mobile}</td>
                        <td>{ele.email}</td>
                        <td>{ele.webinar.title}</td>
                        <td>{dateTimeHandler(ele.webinar.event_on)}</td>
                    </tr>
                )
            })

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