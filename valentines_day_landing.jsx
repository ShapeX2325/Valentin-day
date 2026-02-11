import React, { useEffect } from "react";

export default function ValentinesForMaria() {
  useEffect(() => {
    const heartsContainer = document.getElementById("hearts");
    if (!heartsContainer) return;

    heartsContainer.innerHTML = "";

    for (let i = 0; i < 40; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 5 + Math.random() * 5 + "s";
      heart.style.fontSize = 15 + Math.random() * 20 + "px";
      heartsContainer.appendChild(heart);
    }
  }, []);

  const downloadCertificate = () => {
    const content = `ПОДАРОЧНЫЙ СЕРТИФИКАТ ДЛЯ МАРИИ

Для самой прекрасной девушки — Марии 💖

Мария, я люблю тебя сильнее, чем можно выразить словами.
Ты — моё вдохновение, моя радость и самое тёплое чувство в сердце.
С тобой каждый день особенный, а каждый момент — бесценный.

Этот подарок — лишь маленькое напоминание о том,
как сильно ты дорога мне.

С любовью, навсегда твой Дима ❤️

Дата: 14 февраля 2026`;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Сертификат_Золотое_Яблоко.txt";
    link.click();
  };

  return (
    <div className="page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .page {
          min-height: 100vh;
          background: #ffe6f0;
          overflow-x: hidden;
          position: relative;
          padding: 40px 20px;
          text-align: center;
        }

        .hearts {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 0;
        }

        .heart {
          position: absolute;
          color: rgba(255, 0, 90, 0.4);
          animation: float 10s linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) scale(1.5);
            opacity: 0;
          }
        }

        h1 {
          font-size: 48px;
          color: #d1005d;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        p {
          font-size: 18px;
          color: #444;
          margin-bottom: 40px;
          position: relative;
          z-index: 1;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }

        .gallery img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .gallery img:hover {
          transform: scale(1.05);
        }

        .certificate {
          background: white;
          padding: 40px;
          border-radius: 25px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
          max-width: 600px;
          margin: auto;
          position: relative;
          z-index: 1;
        }

        .certificate h2 {
          color: #d1005d;
          margin-bottom: 20px;
        }

        button {
          margin-top: 20px;
          padding: 15px 30px;
          font-size: 18px;
          border: none;
          border-radius: 30px;
          background: #ff2e84;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #d1005d;
        }

        footer {
          margin-top: 60px;
          font-size: 14px;
          color: #777;
          position: relative;
          z-index: 1;
        }
      `}</style>

      <div className="hearts" id="hearts"></div>

      <h1>Мария, с Днём Святого Валентина ❤️</h1>
      <p>
        Мария, ты — самое прекрасное, что произошло в моей жизни.
        Я люблю тебя бесконечно сильно и искренне.
        Ты наполняешь мой мир светом, теплом и счастьем.
        Каждый день рядом с тобой — это подарок,
        и я благодарен судьбе за тебя.
        💕
      </p>

      <div className="gallery">
        <img
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80"
          alt="valentine"
        />
        <img
          src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80"
          alt="valentine"
        />
        <img
          src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80"
          alt="valentine"
        />
      </div>

      <div className="certificate">
        <h2>Подарочный сертификат</h2>
        <p>
          Мария, этот сертификат — лишь маленький символ того,
          как сильно я тебя люблю.
          Ты заслуживаешь весь мир, и я хочу делать тебя счастливой
          каждый день. ❤️
          <br /><br />
          С любовью, твой Дима 💖
        </p>
        <button onClick={downloadCertificate}>Скачать сертификат</button>
      </div>

      <footer>Сделано с любовью к 14 февраля 💖</footer>
    </div>
  );
}
