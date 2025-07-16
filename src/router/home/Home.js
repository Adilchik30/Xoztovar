import React from 'react'
import Banner from '../../components/banner/Banner'
import Infos from '../../components/infos/Infos'

function Home() {
  return (
    <div className='home'>
      <Banner/>
      <h1 style={{textAlign: "center", fontFamily: "cursive", marginTop: "20px"}}>Biz haqimizda</h1>
      <Infos/>
    </div>
  )
}

export default Home