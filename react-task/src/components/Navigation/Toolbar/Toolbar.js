import React from "react";
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;