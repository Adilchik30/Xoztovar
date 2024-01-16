import React from 'react'
import { PRODUCTS } from '../../static/index'
import { useParams } from 'react-router-dom';
import './SingleRoute.css'

function SingleRoute() {
    const params = useParams()
    const oneItem = PRODUCTS.find((el) => el.id === params.id)
    return (
        <div className='single__route'>
            <div className='single__route-img'>
                <img src={oneItem?.url} width={400} alt="" />
            </div>
            <div className='single__route-info'>
                <h2>{oneItem?.title}</h2><br />
                <p>Turi :  <u>{oneItem?.category.toUpperCase()}</u></p><br />
                <p>Yetkazib berish: <span>1kun, bepul</span></p><br /><hr /><br />
                <div className="single__route-info-size">
                    <p>Rang : <br /> <br />
                    <div className="single__route__boxes">
                    <div className="single__route-box1"></div>
                    <div className="single__route-box2"></div>
                    <div className="single__route-box3"></div>
                    <div className="single__route-box4"></div>
                    <div className="single__route-box5"></div>
                    <div className="single__route-box6"></div>
                    <div className="single__route-box7"></div>
                    </div>
                    </p><br />
                    <p>Erkaklar poyabzali oʻlchami RUS:
                        <br /><br />
                        <div className="single__route__boxes">
                    <div className="single__rout-box1">39</div>
                    <div className="single__rout-box2">40</div>
                    <div className="single__rout-box3">41</div>
                    <div className="single__rout-box4">42</div>
                    <div className="single__rout-box5">43</div>
                    <div className="single__rout-box6">44</div>
                    <div className="single__rout-box7">45</div>
                    </div>
                    </p>
                </div><br /><br />
                <div className="single__route-price">
                    <h2>Narxi : <br /><br /> 
<p>{oneItem?.price} so'm</p>
                    </h2><br /><br />
                    <div className="single__route-monthly">
                        <div className="single__route-amount">
                        <mark>Oyiga {Math.round(oneItem?.price / 12).brm()} so'mdan</mark> muddatli to'lov
                        </div>
                    </div>
                </div><br /><br />
                <div className="two__btn">
                <button className='single__route-btn1'>Savatga qo'shish</button>
                <button className='single__route-btn2'>Tugmani 1 bosishda xarid qilish</button>
                </div>
            </div>

        </div>
    )
}

export default SingleRoute