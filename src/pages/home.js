import React, { Component } from 'react';
import RaisedButton  from 'material-ui/RaisedButton';
import Header from '../containers/header';
import ProductsContainer from '../containers/productContainer';
import CartContainer from '../containers/cartContainer';
import * as firebase from 'firebase';
import {receiveProducts} from '../actions/index';
import configureStore from '../store';

class Home extends Component {
    constructor()
    {
        super();
        this.store = configureStore();
        this.state = {products: null}
    }

    componentDidMount()
    {
        const rootRef = firebase.database().ref();
        const productsRef = rootRef.child('products');
        productsRef.on('value', snap =>
        {
            this.setState({
                products: snap.val()
            })
            this.store.dispatch(receiveProducts(snap.val()));
        })
    }

    render()
    {
        return (
            <div className="App">
                <Header />
                <ProductsContainer products={this.state.products} />
                <CartContainer />

            </div>
        );
    }
}

export default Home;