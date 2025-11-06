import React, { useState } from "react";
import "./style.css";

function Index() {
  const images = [
    "rasm.png", // bu joylarga o'z rasmlaringizni qo'yasiz
    "1.png",
    "2.png"
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className=" container">
     <div className="blue">
     <h4 className="contact-title">КОНТАКТЫ</h4>
      <h2 className="showroom-title">ШОУ РУМ TRUE В ТАШКЕНТЕ</h2>
      <p className="subtitle">
        ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD
      </p>
     </div>

      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <img src={images[current]} alt="Showroom" className="carousel-img" />
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Tashkent%20City%20Boulevard,%20Tashkent&output=embed"
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>

        <div className="contact-info">
          <h3>ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР В УЗБЕКИСТАНЕ - PROWELLNESS</h3>
          <p>📞 +998 (90) 606-66-66</p>
          <p>
            ✉️ <a href="mailto:info@prowellness.uz">info@prowellness.uz</a>
          </p>
          <p>📍 Адрес: Ташкент Сити, Бульвар, Ул. Фурката 2А</p>
          <p className="hours">
            ПН-СБ С 9:00-19:00 <br />
            ВС НЕ РАБОЧИЙ
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
