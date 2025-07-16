import "./Infos.css";

function Infos() {
  return (
    <div className="infos">
      <div className="infos-one">
        <div className="right">
          <img
            src="https://www.shutterstock.com/image-vector/caucasian-operator-ultrasound-scanning-machine-600nw-648924019.jpg"
            alt=""
          />
        </div>
        <div className="left">
          <h2>
            Mutaxassisning to'liq ism familiyasi: <b>Mirzahmedov Orifjon
            Olimjonovich</b>
          </h2>
          <h2>Tug'ilgan sana va joy: <b>1965</b> yil <b>26 Oktabr</b> , Namangan shahar</h2>
          <h2>Mutaxassisliklar: Kardiolog, UTT mutaxassisi</h2>
          <h2>Oilali, 4 nafar farzandi bor</h2>
        </div>
      </div>
      <div className="infos-two">
        <div className="right">
          <h1 style={{ fontFamily: "Poppins" }}>Yuqori malakali mutaxassis</h1>
          <p>
            35 yillik tajriba, minnatdor mijozlar, zamonaviy tibbiy uskunalar
            bilan xizmat ko‘rsatamiz.
          </p>
        </div>
        <div className="left">
          <img
            src="https://img.freepik.com/free-photo/doctor-doing-ultrasound-patient_23-2149192670.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="infos-three">
        <div className="right">
          <img
            src="https://img.freepik.com/free-photo/ultrasound-exam-clinic_23-2149192654.jpg"
            alt=""
          />
        </div>
        <div className="left">
          <h1 style={{fontFamily: "Poppins"}}>Yuqori sifatli UTT xizmatlari</h1>
          <p>
            Zamonaviy texnologiyalar asosida aniqlik darajasi yuqori bo‘lgan
            ultratovush tekshiruvlari o'tkaziladi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Infos;
