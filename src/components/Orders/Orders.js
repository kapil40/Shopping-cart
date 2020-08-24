import React from 'react';
import Iphone11 from './Iphone11/Iphone11';
import Iphone10 from './Iphone10/Iphone10';
import Iphone6s from './Iphone6s/Iphone6s';
import Micromax from './Micromax/micromax';
import Asus from './Asus/asus';
import LG from './LG/lg';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const orders = (props) => {
    
    const items = [];
    for (let itemName in props.items) {
        items.push({
            name: itemName,
            amount: props.items[itemName]
        });
    }

    const output = items.map( ig => {
        if(ig.amount > 0) {
            if (ig.name === 'asus')
                return <div key={ig.name}><Asus price="40000" quantity={ig.amount} /> <br /></div>;
            else if (ig.name ==='lg')
                return <div key={ig.name}><LG price="30000" quantity={ig.amount}/><br /></div>;
            else if (ig.name ==='micromax')
                return <div key={ig.name}><Micromax price="10000" quantity={ig.amount}/><br/></div>;
            else if (ig.name ==='iphone6s')
                return <div key={ig.name}><Iphone6s price="20000" quantity={ig.amount}/><br/></div>;
            else if (ig.name ==='iphone11')
                return <div key={ig.name}><Iphone11 price="68000" quantity={ig.amount}/><br/></div>;
            else
                return <div key={ig.name}><Iphone10 price="50000" quantity={ig.amount}/><br/></div>;
        }
        
    });

    return(
        <div>
            {output}
            <p style={{textAlign: 'center'}}>PRICE:<strong>₹ {props.price}</strong></p>
            <div style={{textAlign: 'center'}}>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={props.deleteOrder}
            >
                Delete
            </Button>
            </div>
        </div>
    );
}

export default orders;