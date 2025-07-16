import React from 'react'
import './Products.css'
import { IoHeartOutline, IoCartOutline, IoHeart } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishes, removeFromWishes } from '../../context/wishesSlice'
import { incCart } from '../../context/cartSlice';
import { toast } from 'react-toastify';
function Products({ title, data }) {
    const dispatch = useDispatch()
    const wishes = useSelector((s) => s.wishes.value)
    const handleAddCart = (el) =>{
        dispatch(incCart(el))
        toast.success("Savatchaga muvvafaqiyatli qo'shildi", {position:"top-center"})
    }
    return (
        <div className='container'>
            <div className="products">
                <h2>{title}</h2>
                <div className="products__wrapper">
                    {
                        data?.map((el) => <div key={el.id} className="product__card">
                            <Link to={`/product/${el.id}`}>

                            </Link>
                            <p className='product__title'>{el.title}</p>
                                <b className='product__price'>{el.price?.brm()} so'm</b>

                            <div onClick={() => handleAddCart(el)} className="product__cart">
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
