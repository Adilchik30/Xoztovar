import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';
import EmptyWishes from '../../components/emptyWishes/emptyWishes';

function Wishes() {
  const wishes = useSelector(state => state.wishes.value)
  console.log(wishes);
  return (
    <div>
      <Products data={wishes} /><br />
      {
        wishes.length ? <Products/> : <EmptyWishes/>
        
      }
    </div>
  )
}

export default Wishes