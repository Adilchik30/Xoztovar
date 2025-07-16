import "./Footer.css";
import { Link } from "react-router-dom";
import apple from "../../assets/uzum market/apple store.png";
import play from "../../assets/uzum market/google play.png";
import telegram from "../../assets/uzum market/telegram.png";
import youtube from "../../assets/uzum market/youtube.png";
import instagram from "../../assets/uzum market/instagram.png";
import facebook from "../../assets/uzum market/facebook.png";
import { useLocation } from "react-router-dom";
function Footer() {
  const { pathname } = useLocation();
  if (pathname.includes("login") || pathname.includes("admin")) {
    return <></>;
  }
  return (
    <div className=" container">
      <div className="footer">
        <div className="Footer__info">
          <p>Batafsil</p>
          <span>Mo'ljal: KosonPetak, 5 Poliklinika oldida.</span>
          <span>Telefon raqami: +998902602414</span>
        </div>
        <div className="Footer__info">
          <p>Foydalanuvchilarga</p>
          <span>Namangan shahridagi malakali UZI <br /> mutaxassislaridan biriga albatta tashrif buyuring.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
