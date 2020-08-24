import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';


const layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar />
            <main className={classes.Context}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default layout;