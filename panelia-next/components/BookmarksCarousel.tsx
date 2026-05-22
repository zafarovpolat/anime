'use client';

import { useState } from 'react';
import Link from 'next/link';

const MANGA_TITLES = [
  "Выбери меня!",
  "Я стала приёмной дочерью в семье убийц",
  "Леди-малышка изменяет мир деньгами",
  "Следуйте за своим сердцем",
  "Не подбирайте выброшенный мусор",
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.2091 1.01094L9.44445 3.49535C9.61092 3.83894 10.0578 4.16491 10.4345 4.23538L12.6687 4.6054C14.0969 4.84327 14.4298 5.88285 13.4047 6.92242L11.6611 8.6756C11.372 8.96633 11.2055 9.53898 11.3019 9.95305L11.8013 12.1203C12.1956 13.8294 11.2844 14.499 9.78617 13.6004L7.69214 12.3494C7.3154 12.1203 6.68458 12.1203 6.30783 12.3494L4.21381 13.6004C2.71558 14.4902 1.80439 13.8294 2.19866 12.1203L2.69808 9.95305C2.79445 9.54779 2.62798 8.97514 2.33885 8.6756L0.595308 6.92242C-0.429794 5.89165 -0.0968578 4.85208 1.33128 4.6054L3.56546 4.23538C3.94221 4.17372 4.38905 3.83894 4.55552 3.49535L5.7909 1.01094C6.44802 -0.336981 7.53446 -0.336981 8.2091 1.01094Z" fill="white"/>
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.999965 10.8995L10.8995 1.00001M10.8995 9.48529V1.00001H2.41418" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const STATUS_ICONS = {
  reading: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path opacity="0.4" d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z" fill="#292D32"/>
      <path d="M11.9999 9.14001C10.4299 9.14001 9.1499 10.42 9.1499 12C9.1499 13.57 10.4299 14.85 11.9999 14.85C13.5699 14.85 14.8599 13.57 14.8599 12C14.8599 10.43 13.5699 9.14001 11.9999 9.14001Z" fill="#292D32"/>
    </svg>
  ),
  planned: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path opacity="0.4" d="M10 4.41662V17.775C10.1417 17.775 10.2917 17.7499 10.4083 17.6833L10.4417 17.6666C12.0417 16.7916 14.8333 15.875 16.6416 15.6333L16.8833 15.5999C17.6833 15.4999 18.3333 14.75 18.3333 13.95V3.88328C18.3333 2.89161 17.525 2.14162 16.5334 2.22495C14.7834 2.36662 12.1334 3.24998 10.65 4.17498L10.4417 4.29995C10.3167 4.37495 10.1583 4.41662 10 4.41662Z" fill="#292D32"/>
      <path d="M1.66675 3.89164V13.95C1.66675 14.75 2.31674 15.5 3.11674 15.6L3.39175 15.6333C5.20842 15.875 8.00844 16.8 9.60844 17.6833C9.71677 17.75 9.85008 17.775 10.0001 17.775V4.41665C9.84175 4.41665 9.68339 4.37497 9.55839 4.29997L9.41674 4.20831C7.9334 3.27498 5.27507 2.38332 3.52507 2.23332H3.47507C2.4834 2.14998 1.66675 2.89164 1.66675 3.89164Z" fill="#292D32"/>
      <path d="M15.8333 2.31665V5.89163C15.8333 6.22497 15.4666 6.42495 15.1833 6.24162L14.1667 5.56662L13.15 6.24162C12.875 6.42495 12.5 6.22497 12.5 5.89163V3.26661C13.5917 2.83328 14.8083 2.48332 15.8333 2.31665Z" fill="#292D32"/>
    </svg>
  ),
  completed: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path opacity="0.4" d="M9.85414 2.24583C10.4866 1.705 11.5225 1.705 12.1641 2.24583L13.6125 3.4925C13.8875 3.73083 14.4008 3.92333 14.7675 3.92333H16.3258C17.2975 3.92333 18.095 4.72083 18.095 5.6925V7.25083C18.095 7.60833 18.2875 8.13083 18.5258 8.40583L19.7725 9.85417C20.3133 10.4867 20.3133 11.5225 19.7725 12.1642L18.5258 13.6125C18.2875 13.8875 18.095 14.4008 18.095 14.7675V16.3258C18.095 17.2975 17.2975 18.095 16.3258 18.095H14.7675C14.41 18.095 13.8875 18.2875 13.6125 18.5258L12.1641 19.7725C11.5316 20.3133 10.4958 20.3133 9.85414 19.7725L8.40581 18.5258C8.13081 18.2875 7.61747 18.095 7.25081 18.095H5.66497C4.69331 18.095 3.89581 17.2975 3.89581 16.3258V14.7583C3.89581 14.4008 3.70331 13.8875 3.47414 13.6125L2.23664 12.155C1.70497 11.5225 1.70497 10.4958 2.23664 9.86333L3.47414 8.40583C3.70331 8.13083 3.89581 7.6175 3.89581 7.26V5.68333C3.89581 4.71167 4.69331 3.91417 5.66497 3.91417H7.25081C7.60831 3.91417 8.13081 3.72167 8.40581 3.48333L9.85414 2.24583Z" fill="#292D32"/>
      <path d="M9.89085 13.9058C9.70751 13.9058 9.53335 13.8325 9.40501 13.7041L7.18668 11.4858C6.92085 11.22 6.92085 10.78 7.18668 10.5141C7.45251 10.2483 7.89251 10.2483 8.15835 10.5141L9.89085 12.2466L13.8325 8.30497C14.0983 8.03913 14.5383 8.03913 14.8042 8.30497C15.07 8.5708 15.07 9.0108 14.8042 9.27663L10.3767 13.7041C10.2483 13.8325 10.0742 13.9058 9.89085 13.9058Z" fill="#292D32"/>
    </svg>
  ),
  dropped: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path opacity="0.4" d="M12.4166 1.66663H7.5833C7.01663 1.66663 6.21662 1.99996 5.81662 2.39996L2.39996 5.81664C1.99996 6.21664 1.66663 7.01663 1.66663 7.5833V12.4166C1.66663 12.9833 1.99996 13.7833 2.39996 14.1833L5.81662 17.6C6.21662 18 7.01663 18.3333 7.5833 18.3333H12.4166C12.9833 18.3333 13.7833 18 14.1833 17.6L17.6 14.1833C18 13.7833 18.3333 12.9833 18.3333 12.4166V7.5833C18.3333 7.01663 18 6.21664 17.6 5.81664L14.1833 2.39996C13.7833 1.99996 12.9833 1.66663 12.4166 1.66663Z" fill="#292D32"/>
      <path d="M10.8834 10L13.3584 7.52503C13.6 7.28336 13.6 6.88337 13.3584 6.6417C13.1167 6.40003 12.7167 6.40003 12.475 6.6417L10 9.1167L7.52503 6.6417C7.28336 6.40003 6.88337 6.40003 6.6417 6.6417C6.40003 6.88337 6.40003 7.28336 6.6417 7.52503L9.1167 10L6.6417 12.475C6.40003 12.7167 6.40003 13.1167 6.6417 13.3584C6.7667 13.4834 6.92503 13.5417 7.08336 13.5417C7.2417 13.5417 7.40003 13.4834 7.52503 13.3584L10 10.8834L12.475 13.3584C12.6 13.4834 12.7584 13.5417 12.9167 13.5417C13.075 13.5417 13.2334 13.4834 13.3584 13.3584C13.6 13.1167 13.6 12.7167 13.3584 12.475L10.8834 10Z" fill="#292D32"/>
    </svg>
  ),
};

const BOOKMARK_STATUSES = [
  { label: "Читаю", icon: STATUS_ICONS.reading },
  { label: "Буду читать", icon: STATUS_ICONS.planned },
  { label: "Прочитано", icon: STATUS_ICONS.completed },
  { label: "Заброшено", icon: STATUS_ICONS.dropped },
  { label: "Прочитано", icon: STATUS_ICONS.completed },
];

export default function BookmarksCarousel() {
  const [offset, setOffset] = useState(0);

  const handlePrev = () => {
    setOffset((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setOffset((prev) => Math.min(prev + 1, 2));
  };

  const cards = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    coverIdx: i + 1,
    title: MANGA_TITLES[i],
    status: BOOKMARK_STATUSES[i],
  }));

  return (
    <section className="section manga-section bookmarks-section" id="bookmarks" aria-labelledby="bookmarks-title">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="bookmarks-title">Мои закладки</h2>
          <Link href="/bookmarks" className="section-more">
            <span>Смотреть больше</span>
            <span className="section-more__arrow">
              <ArrowIcon />
            </span>
          </Link>
        </div>
        <div className="bookmarks-carousel" style={{ transform: `translateX(-${offset * 20}%)`, transition: 'transform 0.3s ease' }}>
          {cards.map((card) => (
            <Link href={`/manga/${card.id}`} key={card.id} className="bookmark-card">
              <div className="bookmark-card__image-wrapper">
                <img
                  src={`/images/cover_${card.coverIdx}.jpg`}
                  alt={card.title}
                  loading="lazy"
                />
                <div className="badges-row">
                  <div className="rating-badge">
                    9.6 <StarIcon />
                  </div>
                  <div className="status-badge">
                    <span className="status-badge__icon">{card.status.icon}</span>
                    <span>{card.status.label}</span>
                  </div>
                </div>
              </div>
              <h3 className="bookmark-card__title">{card.title}</h3>
              <span className="bookmark-card__genre">Манхва, экшен</span>
            </Link>
          ))}
        </div>
        <div className="carousel-controls">
          <div className="carousel-btns">
            <button
              className={`carousel-btn ${offset === 0 ? '' : 'carousel-btn--active'}`}
              onClick={handlePrev}
              aria-label="Назад"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7H1M7 13L1 7L7 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className={`carousel-btn ${offset > 0 ? '' : 'carousel-btn--active'}`}
              onClick={handleNext}
              aria-label="Вперёд"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H15M9 13L15 7L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
