import React from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import CancelPresentationSharpIcon from '@material-ui/icons/CancelPresentationSharp';
import IconButton from '@material-ui/core/IconButton';
import CheckSharpIcon from '@material-ui/icons/CheckSharp';

const orderSummary = (props) => {

    

    const itemsSummary = Object.keys(props.items)
        .map(igKey => {
        return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.items[igKey]}
                </li> );
        })

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <ul>
                {itemsSummary}
            </ul>
            <p><strong>TOTAL PRICE:₹ {props.price}</strong></p>
            <p>Continue to Cart?</p>
            <IconButton 
                onClick={props.purchaseCancel}>
                <CancelPresentationSharpIcon />
            </IconButton>
                <IconButton
                onClick={props.purchaseContinue}>
                <CheckSharpIcon />
            </IconButton>

        </Auxiliary>
    );
}

export default orderSummary;