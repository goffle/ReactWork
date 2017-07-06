import firebase from 'firebase';


export const POST_SHOP = 'POST_SHOP';
export const POST_BID = 'POST_BID';
export const POST_CUSTOMER = 'POST_CUSTOMER';
export const POST_PRODUCT = 'POST_PRODUCT';

export const FETCH_SHOPS = 'FETCH_SHOPS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_BIDS = 'FETCH_BIDS';
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';


var config = {
    apiKey: "AIzaSyDpI0vIZo1hp7aNwe22-QbEYbnvYCzHVvM",
    authDomain: "artemis-6031a.firebaseapp.com",
    databaseURL: "https://artemis-6031a.firebaseio.com",
    projectId: "artemis-6031a",
    storageBucket: "artemis-6031a.appspot.com",
    messagingSenderId: "678722706715"
};
firebase.initializeApp(config);

export function postShop(props) {
    var newPostRef = firebase.database().ref().child('shops').push();
    newPostRef.set(props);
    return {
        type: POST_SHOP,
        payload: newPostRef
    };
}

export function postCustomer(props) {
    var newPostRef = firebase.database().ref().child('customers').push();
    newPostRef.set(props);
    return {
        type: POST_CUSTOMER,
        payload: newPostRef
    };
}

export function postBid(props) {
    var newPostRef = firebase.database().ref().child('bids').push();
    newPostRef.set(props);
    return {
        type: POST_BID,
        payload: newPostRef
    };
}

export function postProduct(props) {
    var newPostRef = firebase.database().ref().child('products').push();
    newPostRef.set(props);
    return {
        type: POST_PRODUCT,
        payload: newPostRef
    };
}



export function fetchShops(props) {
    const request = firebase.database().ref('/shops/').once('value');
    return {
        type: FETCH_SHOPS,
        payload: request
    };
}

export function fetchProducts(props) {
    const request = firebase.database().ref('/products/').once('value');
    return {
        type: FETCH_PRODUCTS,
        payload: request
    };
}

export function fetchBids(props) {
    const request = firebase.database().ref('/bids/').once('value');
    return {
        type: FETCH_BIDS,
        payload: request
    };
}

export function fetchCustomers(props) {
    const request = firebase.database().ref('/customers/').once('value');
    return {
        type: FETCH_CUSTOMERS,
        payload: request
    };
}
