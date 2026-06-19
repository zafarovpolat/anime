'use client';

import { useState } from 'react';
import Link from 'next/link';

const UPDATES = [
  { title: "Таков закон", time: "22 минуты назад" },
  { title: "Истинная красота", time: "32 минуты назад" },
  { title: "Игрок падшего дворянского рода", time: "37 минуты назад" },
  { title: "Я растерялась, когда оказалась женой зверолова", time: "48 минуты назад" },
  { title: "План перерожденного наёмника", time: "1 час назад" },
  { title: "Мир Зомби", time: "2 час назад" },
  { title: "Присцилла просит о замужестве", time: "3 час назад" },
];

const MORE_UPDATES = [
  { title: "Тёмный маг возвращается", time: "4 часа назад" },
  { title: "Путь восхождения", time: "5 часов назад" },
  { title: "Академия магии", time: "6 часов назад" },
];

export default function UpdatesSection() {
  const [bookmarksOnly, setBookmarksOnly] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const visibleUpdates = showMore ? [...UPDATES, ...MORE_UPDATES] : UPDATES;

  return (
    <section className="section updates-section" id="updates" aria-labelledby="updates-title">
      <div className="updates-wrapper">
        <div className="container">
          <div className="updates-header">
            <h2 className="section-title" id="updates-title">Обновления</h2>
          </div>
          <div className="updates-toggle">
            <span className="updates-toggle__label">Только мои закладки</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={bookmarksOnly}
                onChange={() => setBookmarksOnly(!bookmarksOnly)}
              />
              <span className="toggle-switch__slider"></span>
            </label>
          </div>
          <div className="updates-list">
            {visibleUpdates.map((update, i) => (
              <Link href={`/manga/${i}`} key={i} className="update-item">
                <div className="update-item__thumb">
                  <img
                    src={`/images/cover_${(i % 7) + 1}.jpg`}
                    alt={update.title}
                    loading="lazy"
                  />
                </div>
                <div className="update-item__info">
                  <div className="update-item__title">{update.title}</div>
                  <div className="update-item__chapter">Том 5 Глава 194</div>
                </div>
                <span className="update-item__time">{update.time}</span>
              </Link>
            ))}
          </div>
          <button
            className="show-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Скрыть' : 'Показать еще...'}
          </button>
        </div>
      </div>
    </section>
  );
}
