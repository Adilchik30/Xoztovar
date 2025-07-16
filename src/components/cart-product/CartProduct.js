import React, { useState, useEffect } from "react";
import "./CartProduct.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeFromCart, removeAllCart } from "../../context/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const BOT_TOKEN = "6971186925:AAEUUB5Vs96v65p29-KvRLXvqZ5R2KDCWpY";
const USER_ID = 5409529185;

// Format price helper
const formatPrice = (price) => {
  const numeric = parseInt(String(price).replace(/\D/g, ""), 10);
  return numeric.toLocaleString("ru-RU");
};

// Check and reset queue daily
function getTodayQueueNumber() {
  const today = new Date().toLocaleDateString("en-GB"); // e.g. "15/07/2025"
  const savedDate = localStorage.getItem("queue_date");
  let queue = Number(localStorage.getItem("queue_number")) || 0;

  if (savedDate !== today) {
    queue = 0;
    localStorage.setItem("queue_date", today);
    localStorage.setItem("queue_number", "0");
  }

  return queue;
}

function CartProducts({ data }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [queueNumber, setQueueNumber] = useState(getTodayQueueNumber() + 1);

  useEffect(() => {
    // Update shown number but don’t save it yet (only on submit)
    setQueueNumber(getTodayQueueNumber() + 1);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentQueue = getTodayQueueNumber() + 1;
    setQueueNumber(currentQueue);
    localStorage.setItem("queue_number", String(currentQueue));

    let text = `Yangi mijoz %0A%0A`;
    text += `Navbat raqami: <b>${currentQueue}</b> %0A`;
    text += `Ism Familiya: <b>${name}</b> %0A`;
    text += `Telefon Raqami: <b>${phoneNumber}</b> %0A`;
    text += `Xabari: <b>${message}</b> %0A %0A`;

    data.forEach((item) => {
      const numericPrice = parseInt(String(item.price).replace(/\D/g, ""), 10);
      const totalItemPrice = numericPrice * item.quantity;
      text += `nomi: ${item.title} %0A`;
      text += `soni: ${item.quantity} dona %0A`;
      text += `narxi: ${formatPrice(numericPrice)} x ${item.quantity} = ${formatPrice(totalItemPrice)} so'm %0A%0A`;
    });

    const total = data.reduce((sum, item) => {
      const numericPrice = parseInt(String(item.price).replace(/\D/g, ""), 10);
      return sum + numericPrice * item.quantity;
    }, 0);

    text += `Jami: <b>${formatPrice(total)} so'm</b>`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
    const api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    toast.success("Qabul qilindi. Xaridingizdan minnatdormiz! Davom etish uchun 3 soniya kuting 😊👌", {
      position: "top-center",
    });

    dispatch(removeAllCart());
    setName("");
    setPhoneNumber("");
    setAddress("");
    setMessage("");
  };

  return (
    <div className="container cart__wrapper">
      <div className="cart__products">
        {data?.map((el) => {
          const numericPrice = parseInt(String(el.price).replace(/\D/g, ""), 10);
          const totalPrice = numericPrice * el.quantity;

          return (
            <div key={el.title} className="cart__item">
              <div>
                <h4 style={{ paddingLeft: "10px" }}>
                  {el.title}{" "}
                  <span style={{ fontWeight: "normal", color: "#666" }}>
                    ({el.quantity} ta)
                  </span>
                </h4>
              </div>
              <div className="cart__item-right">
                <button
                  onClick={() => dispatch(removeFromCart(el))}
                  className="cart__trash-btn"
                >
                  <FaRegTrashAlt />
                </button>
                <div>
                  <h3>
                    {formatPrice(numericPrice)} x {el.quantity}
                  </h3>
                  <p>= {formatPrice(totalPrice)} so'm</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart__register">
        <div className="input__reg">
          <h3>Ma'lumotlarni to'ldiring:</h3>
          <form onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="To'liq ismingiz"
            />
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              type="tel"
              placeholder="+998 00-000-00-00"
            />
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Mutaxassisga habar yo'llash"
            />

            <div className="queue-number">
              <p style={{ fontSize: "25px", margin: "10px 0" }}>
                Siz <strong>#{queueNumber}</strong> navbatdasiz
              </p>
            </div>

            <div style={{display: "block", textAlign: "center"}} className="total">
              <p>Umumiy narx:</p>
              <b>
                {formatPrice(
                  data.reduce((sum, item) => {
                    const numericPrice = parseInt(String(item.price).replace(/\D/g, ""), 10);
                    return sum + numericPrice * item.quantity;
                  }, 0)
                )}{" "}
                so'm
              </b>
            </div>

            <button className="btn-reg">Rasmiylashtirishga o'tish</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
