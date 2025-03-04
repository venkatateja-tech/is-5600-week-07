import React, { useContext } from 'react';
import PurchaseForm from './PurchaseForm';

import { useCart } from '../state/CartProvider';
const Cart = () => {
  // TODO - get cart items from context
  const cartItems = [];
  const removeFromCart = () => {};
  const updateItemQuantity = () => {};
  const getCartTotal = () => {};

  const {cartItems, removeFromCart, getCartTotal, updateItemQuantity} = useCart();


  return (
    <div className="center mw7 mv4">
      <div className="bg-white pa3 mb3">
@@ -24,7 +21,7 @@ const Cart = () => {
          <tbody>
            {cartItems && cartItems.map((item) => (
              <tr key={item._id}>
                <td className="tl pv2">{item.description}</td>
                <td className="tl pv2">{item.description ?? item.alt_description}</td>
                <td className="tr pv2">
                  <a
                    className="pointer ba b--black-10 pv1 ph2 mr2"
