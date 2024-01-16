import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products';


function Wishes() {
  const wishes = useSelector(state => state.wishes.value)
  console.log(wishes);
  return (
    <div>
      <Products data={wishes} title="Sevimlilar"/>
    </div>
  )
}

export default Wishes