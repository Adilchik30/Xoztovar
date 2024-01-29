import React from 'react'
import CartProduct from '../../components/cart-product/CartProduct'
import { useSelector } from 'react-redux'
import EmptyCart from '../../components/emptyCart/emptycart'

function Cart() {
  const cart = useSelector(s => s.cart.value)
  return (
    <div>
      {
        cart.length ? <CartProduct data={cart} /> : <EmptyCart />
      }
    </div>
  )
}

export default Cart