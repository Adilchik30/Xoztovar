import React from 'react'
import "./Admin.css"
import ManageProduct from './manage-product/ManageProduct'
import CreateProduct from './create-product/CreateProduct'
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Statistic from './statistic/Statistic'

function Admin() {
  const navigate = useNavigate()
  return (
    <div className='admin'>
      <div className="admin__sidebar">
      <button className='navigating__btn' onClick={()=> navigate("/")}>Asosoy sahifa</button><br /><br />
        <h2>Admin Dashboard</h2>
        <div className="admin__links">
          <NavLink to="create-product">Mahsulot qo'shish</NavLink>
          <NavLink to="manage-product">Mahsulotni ko'rish</NavLink>
          <NavLink to="statistic">Ma'lumotlar</NavLink>
        </div>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path='/create-product' element={<CreateProduct/>}/>
          <Route path='/manage-product' element={<ManageProduct/>}/>
          <Route path='/statistic' element={<Statistic/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Admin