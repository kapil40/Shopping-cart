import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>SHOP</NavigationItem>
        <NavigationItem link="/my-cart">MY CART</NavigationItem>
    </ul>
);

export default navigationItems;