import React from 'react'
import './Products.css'
import { IoHeartOutline, IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishes } from '../../context/wishesSlice'

function Products({ title, data }) {
    const dispatch = useDispatch()
    return (
        <div className='container'>
            <div className="products">
                <h2>{title}</h2>
                <div className="products__wrapper">
                    {
                        data?.map((el) => <div key={el.id} className="product__card">
                            <Link to={`/product/${el.id}`}>
                                <div className="product__image">
                                    <img src={el.url[0]} alt="" />
                                </div>

                            </Link>
                            <p className='product__title'>{el.title}</p>
                            <mark className='product__monthly'>1500 so'm / oyiga</mark><br />
                            <del className='product__old-price'>1500 so'm</del>
                            <b className='product__price'>{el.price?.brm()} so'm</b>
                            <div onClick={() => dispatch(addToWishes(el))} className="product__heart">
                                <IoHeartOutline  />
                            </div>
                            <div className="product__cart">
                                <IoCartOutline />
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default Products;
