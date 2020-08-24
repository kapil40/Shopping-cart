import React from 'react';
import classes from './Toolbar.css';
import NaviagationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div></div>
        <div></div>
        <nav>
            <NaviagationItems />
        </nav>

    </header>
);

export default toolbar;