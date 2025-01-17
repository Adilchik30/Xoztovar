import React from 'react'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products'


function Home({data}) {
  return (
    <div>
      <Banner/>
      <Products data={data} title="Yangi chegirmalar"/>
    </div>
  )
}

export default Home