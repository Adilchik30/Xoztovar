import "./Footer.css";
import { Link } from "react-router-dom";
import apple from "../../assets/uzum market/apple store.png";
import play from "../../assets/uzum market/google play.png";
import telegram from "../../assets/uzum market/telegram.png";
import youtube from "../../assets/uzum market/youtube.png";
import instagram from "../../assets/uzum market/instagram.png";
import facebook from "../../assets/uzum market/facebook.png";

function Footer() {
    return (
        <div className=' container'>
            <div className="footer">
            <div className="Footer__info">
                <p>Biz haqimizda</p>
                <span>Topshirish punktlari</span>
                <span>Vakansiyalar</span>
            </div>
            <div className="Footer__info">
                <p>Foydalanuvchilarga</p>
                <span>Topshirish punktlari</span>
                <span>Sotuv kabinetiga kirish</span>
            </div>
            <div className="Footer__info">
                <p>Tadbirkorlarga</p>
                <span>Uzumda soting</span>
                <span>Vakansiyalar</span>
            </div>
            <div className="footer__links">
                <div className="footer__download__app">
                    <p>Ilovani yuklab olish</p>
                    <div className="app__play">
                        <img src={apple} />
                        <img src={play} />
                    </div>
                </div>
                <div className="footer__share__info">
                    <p>Uzum ijtimoiy tarmoqlarda</p>
                    <div className="social__media">
                        <img src={telegram} />
                        <img src={youtube} />
                        <img src={instagram} />
                        <img src={facebook} />
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Footer