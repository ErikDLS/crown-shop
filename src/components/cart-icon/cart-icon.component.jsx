import { useDispatch, useSelector } from "react-redux";

import { useEffect, useRef } from "react";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const cartRef = useRef();

  useEffect(() => {
    const closeCart = e => {
      console.log(e);
      console.log(e.composedPath());
      console.log(cartRef.current);
      console.log(e.composedPath[0] !== cartRef.current);
      if (!cartRef.current.contains(e.target)) {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener("click", closeCart);

    return () => document.removeEventListener("click", closeCart);
  });

  return (
    <div ref={cartRef}>
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className={"shopping-icon"}></ShoppingIcon>
        <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
    </div>
  );
};

export default CartIcon;
