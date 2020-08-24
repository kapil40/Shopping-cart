import React, { Component } from 'react'; 
import Orders from '../../components/Orders/Orders';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class MyCart extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    deleteOrderHandler = (key) => {
        axios.delete(`/orders/${key}.json`)
        .then(res => {
            //console.log(res);
        } )
    }
        
    render() {
        return(
            <div>
                {this.state.orders.map((order,index) => (
                    <div>
                    <h1 style={{textAlign: 'center'}}>YOUR ORDER NO: {index + 1}</h1>
                    <Orders 
                        key={order.id}
                        items={order.items}
                        price={order.price}
                        deleteOrder={() => this.deleteOrderHandler(order.id)}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default withErrorHandler(MyCart ,axios);