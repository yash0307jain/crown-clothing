import React from "react";
import { connect } from "react-redux";

import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  let count = 0;
  for(let i = 0; i < cartItems.length; i++) {
    count = count + cartItems[i].quantity;
  }
  
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
  <span className="item-count">{ count }</span>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems: cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
