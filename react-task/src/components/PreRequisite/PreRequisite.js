import React from 'react';
import classes from './PreRequisite.module.css';

const preRequisite = (props) => (
    <div className={classes.Container}>
        <p>Pre-Requisite: <span>JavaScript</span></p>
        <h1>Introduction</h1>
        <p>
            JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric
            applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because
            it is integrated with HTML. It is open and cross-platform.
        </p>
        <h2>Basics: </h2>
        <ul>
            <li><a href="https://www.tutorialspoint.com/javascript/javascript_variables.htm"
                   target="_blank" rel="noreferrer">Variables</a></li>
            <li><a href="https://www.tutorialspoint.com/javascript/javascript_operators.htm"
                   target="_blank" rel="noreferrer">Operators</a></li>
            <li><a href="https://www.tutorialspoint.com/javascript/javascript_ifelse.htm" target="_blank"
                   rel="noreferrer">if-else
                statement</a></li>
            <li><a href="https://www.tutorialspoint.com/javascript/javascript_switch_case.htm" target="_blank"
                   rel="noreferrer">Switch
                Cases</a></li>
            <li><a href="https://www.tutorialspoint.com/javascript/javascript_functions.htm"
                   target="_blank" rel="noreferrer">Functions</a></li>
        </ul>

        <h3><a href="https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP" target="_blank"
               rel="noreferrer">Learn JS
            Playlist</a></h3>
    </div>
);

export default preRequisite;