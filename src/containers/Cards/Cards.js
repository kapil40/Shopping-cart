import React, { useState, useEffect } from 'react';
import Iphone11 from '../../components/UI/Card/Iphone-11';
import Iphone6 from '../../components/UI/Card/Iphone-6';
import Asus from '../../components/UI/Card/Asus';
import Micromax from '../../components/UI/Card/Micromax';
import Iphone10 from '../../components/UI/Card/Iphone-10';
import LG from '../../components/UI/Card/LG';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import classesCards from './Cards.css';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

const useStyles = makeStyles({
    but: {
      textAlign: 'center'
    },
});
  
const ITEMS_PRICES = {
    iphone10 : 50000,
    iphone11 : 68000,
    iphone6s : 20000,
    micromax : 10000,
    lg : 30000,
    asus: 40000
}

const cards = () => {
    const [items, setItems ] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [purchasable, setPurchasable] = useState(false);
    const [cartClicked, setCartClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('https://shopping-cart-e0ed1.firebaseio.com/items.json')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                setError(true);
            });
    }, []);

    const updatePurchasable = (itemsNew) => {
        
        const sum = Object.keys(itemsNew)
            .map(igKey => {
                return itemsNew[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        setPurchasable(sum > 0);
    }

    const addItems = (type) => {
        const oldCount = items[type];
        const updatedCount = oldCount + 1;
        const updatedItems = {
            ...items
        }
        updatedItems[type] = updatedCount;
        const priceAddition = ITEMS_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice +  priceAddition;
        setItems(updatedItems);
        setTotalPrice(newPrice); 
        updatePurchasable(updatedItems);
    } 

    const removeItems = (type) => {
        const oldCount = items[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedItems = {
            ...items
        }
        updatedItems[type] = updatedCount;
        const priceDeduction = ITEMS_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceDeduction;
        setItems(updatedItems);
        setTotalPrice(newPrice); 
        updatePurchasable(updatedItems);
    }

    const purchaseHandler = () => {
        setCartClicked(true);
    }

    const purchaseCancelHandler = () => {
        setCartClicked(false);
    }

    const purchaseContinueHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        const order = {
            items: items,
            price: totalPrice
        };
        axios.post('./orders.json', order)
            .then(response => {
                setLoading(false);
                setCartClicked(false);
            })
            .catch(error => {
                setLoading(false);
                setCartClicked(false);
            });
    }

    const classes = useStyles();

    const disabledInfo = {
        ...items
    };

    for(let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null; 
    let cart = error ? <p>Items cant be loaded :(</p>:<Spinner />;
    
    if (items)
    {
        cart = (
            <Auxiliary>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="baseline"
                    >
                    <Iphone11 
                        itemsAdded={() => addItems('iphone11')}
                        itemsRemoved={() => removeItems('iphone11')}
                        disabled={disabledInfo}/>
                    <Iphone6 
                        itemsAdded={() => addItems('iphone6s')}
                        itemsRemoved={() => removeItems('iphone6s')}
                        disabled={disabledInfo}/>
                    <Asus 
                        itemsAdded={() => addItems('asus')}
                        itemsRemoved={() => removeItems('asus')}
                        disabled={disabledInfo}/>
                </Grid>
                <br/>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="baseline">
                    <Micromax 
                        itemsAdded={() => addItems('micromax')}
                        itemsRemoved={() => removeItems('micromax')}
                        disabled={disabledInfo}/>
                    <Iphone10 
                        itemsAdded={() => addItems('iphone10')}
                        itemsRemoved={() => removeItems('iphone10')}
                        disabled={disabledInfo}/>
                    <LG 
                        itemsAdded={() => addItems('lg')}
                        itemsRemoved={() => removeItems('lg')}
                        disabled={disabledInfo}/>
                </Grid>
                <br/>
                <div className={classes.but}>
                <p style={{textAlign: 'center'}}><strong>Current Price: {totalPrice}</strong></p>
                
                <Button 
                    variant="contained" 
                    color="primary" 
                    disabled={!purchasable} 
                    onClick={purchaseHandler}>
                    Proceed to Cart
                </Button>
                </div>
            </Auxiliary>
        );
        orderSummary = (
            <OrderSummary 
                        items={items}
                        price={totalPrice}
                        purchaseCancel={purchaseCancelHandler}
                        purchaseContinue={purchaseContinueHandler}/>
        );
    }
    
    if (loading) {
        orderSummary = <Spinner />
    }

    return (
        <div className={classesCards.Cards}>
            <Modal show={cartClicked} modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
          {cart}  
        </div>
    );   
}

export default withErrorHandler(cards, axios);