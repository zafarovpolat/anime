"use client";

import { useEffect, useState } from "react";

interface ReviewModalProps {
  onClose: () => void;
}

function CloseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.8998 11.9L6.3999 6.40002M6.3999 6.40002L0.899902 0.900024M6.3999 6.40002L11.8999 0.900024M6.3999 6.40002L0.899902 11.9"
        stroke="black"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ReviewModal({ onClose }: ReviewModalProps) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="review-overlay" onMouseDown={onClose}>
      <div
        className="review-modal"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="review-modal__close" onClick={onClose} aria-label="Закрыть">
          <CloseIcon />
        </button>

        <h2 className="review-modal__title">НАПИСАТЬ ОТЗЫВ</h2>

        <p className="review-modal__subtitle">
          Пишите только оригинальные отзывы. Если нечего сказать — не пишите.
          Указывайте плюсы и минусы, избегайте оскорблений и спама. За спам — блокировка.
        </p>

        <div className="review-modal__fields">
          <div className="review-modal__field">
            <input
              className="review-modal__input"
              type="text"
              placeholder="Название отзыва"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="review-modal__field review-modal__field--textarea">
            <textarea
              className="review-modal__textarea"
              placeholder="Текст отзыва"
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
            />
          </div>
        </div>

        <button className="review-modal__submit">Отправить</button>
      </div>
    </div>
  );
}
