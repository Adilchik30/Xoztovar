import React, { useState } from 'react';
import './Wishes.css';
import { toast } from 'react-toastify';
import { incCart } from '../../context/cartSlice';
import { useDispatch } from 'react-redux';
import Products from '../../components/products/Products';

function Wishes() {
  const [lang, setLang] = useState('uz');
  const dispatch = useDispatch();

  const data = [
    {
      uz: "Qorin bo'shlig'ining ultratovush tekshiruvi",
      ru: "УЗИ брюшной полости",
      price: "240 000 UZS"
    },
    {
      uz: "Bachadon va qo‘shimchalarning UTT",
      ru: "УЗИ матки и придатков",
      price: "2 300 000 UZS"
    },
    {
      uz: "Dopplerometriya bilan ko‘krak UTT",
      ru: "УЗИ молочной железы с допплером",
      price: "180 000 UZS"
    },
    {
      uz: "Qalqonsimon bez UTT",
      ru: "УЗИ щитовидной железы с допплером",
      price: "180 000 UZS"
    },
    {
      uz: "Prostata UTT",
      ru: "УЗИ простаты",
      price: "160 000 UZS"
    },
    {
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },
    {
      uz: "Jigar va o't pufagining ultratovush tekshiruvi",
      ru: "УЗИ печени и желчного пузыря",
      price: "70 000 UZS"
    },
    {
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },{
      uz: "Quviq UTT",
      ru: "УЗИ мочевого пузыря",
      price: "70 000 UZS"
    },
  ];


  const formattedData = data.map((item, index) => ({
    id: index + 1,
    title: item[lang],
    price: parseInt(item.price.replace(/\D/g, ''), 10),
    category: "Ultratovush xizmati"
  }));

  return (
    <div className="wishes-container">
      <div className="wishes-header">
        <div className="lang-buttons">
          <button onClick={() => setLang('uz')} className={lang === 'uz' ? 'active' : ''}>UZ</button>
          <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'active' : ''}>РУ</button>
        </div>
      </div>
      <div className='title-type'><Products data={formattedData} /></div>
    </div>
  );
}

export default Wishes;
