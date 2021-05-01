import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationsItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/webinar/premium">Premium</NavigationItem>
        <NavigationItem link="/webinar/free">Free</NavigationItem>
        <NavigationItem link="/bookings">Bookings</NavigationItem>
    </ul>
);

export default navigationsItems;