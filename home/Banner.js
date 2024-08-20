import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
     <div className="banner_text">
     <p className="banner_p">
        Istalgan vaqtda, <br /> Istalgan kunda Retseptlar
      </p>
      <p className="banner_2p">
        O'z retseptlaringizni 24/7 va 365 kun <br /> ichida aytishingiz mumkin
      </p>
     </div>
      <button className="read_button">O'qish</button>
    </div>
  );
}

export default Banner;
