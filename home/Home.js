import React from 'react'
import TopNavbar from './TopNavbar'
import Banner from './Banner'
import ProductList from './ProductList'

export const Home = () => {
  return (
    <div style={{width:"100%", height: "900px"}}>
        <TopNavbar/>
        <Banner/><br /><br />
        <ProductList/>
    </div>
  )
}
