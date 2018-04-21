import React from 'react';
import PropTypes from 'prop-types';
import Product from './product';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ProductItem = ({ product, onAddToCartClicked }) => (
  <Card className="itemCard">
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory} />
    <CardActions>
      <FlatButton
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? false : true}
        label={product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      />
    </CardActions>
  </Card>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem