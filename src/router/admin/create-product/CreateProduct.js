import React from 'react'
import "../Admin.css"

function CreateProduct() {
  return (
    <div className='create__product'>
      <h1>Yangi mahsulot qo'shish</h1><br />
      <div className="add__new-product">
        <input type="text" placeholder='Yangi mahsulot nomi' /><br /><br />
        <input type="number" placeholder='Yangi mahsulot narxi' /><br /><br />
        <select name="Kategoriyasi" id="">
        <option value="">Kategoriyasini tanlang</option>
          <option value="">Uy-ro'zg'or</option>
          <option value="">Maktab jihozlari</option>
          <option value="">Kiyimlar</option>
          <option value="">Maishiy texnika</option>
          <option value="">Tozalik uskunalari</option>
        </select><br /><br />
        <input className='file__inp' type="file" /><br /><br />
        <button className='create__product-btn'>Mahsulotni sotish</button>
      </div>
    </div>
  )
}

export default CreateProduct