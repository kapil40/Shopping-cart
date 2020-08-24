import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://shopping-cart-e0ed1.firebaseio.com/'
});

export default instance;