'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const MANGA_DATA: Record<number, {
  title: string;
  genres: string[];
  year: number;
  likes: string;
  views: string;
  bookmarks: string;
  rating: number;
  ratingCount: string;
  description: string[];
  totalChapters: number;
  totalReviews: number;
}> = {};

const DEFAULT_DATA = {
  title: 'НАНОМАШИНЫ',
  genres: ['Боевые искусства', '2024'],
  year: 2024,
  likes: '12.5k',
  views: '140k',
  bookmarks: '24.4k',
  rating: 9.6,
  ratingCount: '21 401 оценок',
  description: [
    'Чон Еун - рождённый в незаконном браке принц. С самого детства он страдал от полного отсутствия внутренней энергии, что вызывало всеобщую отвращение и презрение к нему. Угнетённый и лишённый мотивации, он проживал жалкое существование, не надеясь на что-либо большее. Еун был изгоем, презираемым шести великими кланами, но однажды все изменилось.',
    'В один день он был окружён десятком убийц, готовых уничтожить его. Подавленный и уже готовый сдаться, Еун чуть не потерял сознание, окутываясь белым светом безнадёжности и отчаяния, но тут на горизонте появилась еле заметная фигура. Этот незнакомец был "потомком" из будущего и моментально уничтожил всех врагов. Затем он вложил странный предмет под названием Наномашина в тело Еуна. С этого момента все изменилось.',
    'Искусственный интеллект, заложенный внутрь этой Наномашины, дал новый импульс его жизни. Больше ничего не будет как прежде. Это начало новой истории, истории о парне, который решил перейти через небеса и поднять вызов им.',
  ],
  totalChapters: 309,
  totalReviews: 47,
};

const MANGA_TITLES = [
  "Выбери меня!", "Я стала приёмной дочерью в семье убийц",
  "Леди-малышка изменяет мир деньгами", "Следуйте за своим сердцем",
  "Не подбирайте выброшенный мусор", "Таков закон",
  "Истинная красота", "Игрок падшего дворянского рода",
  "Я растерялась, когда оказалась женой зверолова", "План перерожденного наёмника",
  "Мир Зомби", "Присцилла просит о замужестве",
];

function StarIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M8.2091 1.01094L9.44445 3.49535C9.61092 3.83894 10.0578 4.16491 10.4345 4.23538L12.6687 4.6054C14.0969 4.84327 14.4298 5.88285 13.4047 6.92242L11.6611 8.6756C11.372 8.96633 11.2055 9.53898 11.3019 9.95305L11.8013 12.1203C12.1956 13.8294 11.2844 14.499 9.78617 13.6004L7.69214 12.3494C7.3154 12.1203 6.68458 12.1203 6.30783 12.3494L4.21381 13.6004C2.71558 14.4902 1.80439 13.8294 2.19866 12.1203L2.69808 9.95305C2.79445 9.54779 2.62798 8.97514 2.33885 8.6756L0.595308 6.92242C-0.429794 5.89165 -0.0968578 4.85208 1.33128 4.6054L3.56546 4.23538C3.94221 4.17372 4.38905 3.83894 4.55552 3.49535L5.7909 1.01094C6.44802 -0.336981 7.53446 -0.336981 8.2091 1.01094Z" fill="white"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.41 13.7701C8.19 13.8501 7.81 13.8501 7.59 13.7701C5.67 13.0701 1.5 10.4801 1.5 5.99006C1.5 4.01006 3.09 2.41006 5.06 2.41006C6.22 2.41006 7.24 2.96006 7.9 3.82006C8.24 3.38006 8.68 3.03006 9.18 2.79006C9.68 2.55006 10.23 2.42006 10.79 2.42006C12.76 2.42006 14.35 4.02006 14.35 6.00006C14.35 10.4901 10.18 13.0801 8.41 13.7701Z" fill="#562CF0"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.3866 8.00001C10.3866 9.32001 9.31995 10.3867 7.99995 10.3867C6.67995 10.3867 5.61328 9.32001 5.61328 8.00001C5.61328 6.68001 6.67995 5.61334 7.99995 5.61334C9.31995 5.61334 10.3866 6.68001 10.3866 8.00001Z" stroke="#562CF0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99999 13.5133C10.3533 13.5133 12.5466 12.1267 14.0733 9.72668C14.6733 8.78668 14.6733 7.20668 14.0733 6.26668C12.5466 3.86668 10.3533 2.48001 7.99999 2.48001C5.64666 2.48001 3.45332 3.86668 1.92666 6.26668C1.32666 7.20668 1.32666 8.78668 1.92666 9.72668C3.45332 12.1267 5.64666 13.5133 7.99999 13.5133Z" stroke="#562CF0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2133 1.33334H4.78659C3.36659 1.33334 2.21326 2.49334 2.21326 3.90668V13.3C2.21326 14.5 3.07326 15.0067 4.12659 14.4267L7.37992 12.62C7.72659 12.4267 8.28659 12.4267 8.62659 12.62L11.88 14.4267C12.9333 15.0133 13.7933 14.5067 13.7933 13.3V3.90668C13.7866 2.49334 12.6333 1.33334 11.2133 1.33334Z" fill="#562CF0"/>
    </svg>
  );
}

function BookmarkOutlineIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M16.8199 2H7.17995C5.04995 2 3.31995 3.74 3.31995 5.86V19.95C3.31995 21.75 4.60995 22.51 6.18995 21.64L11.0699 18.93C11.5899 18.64 12.4299 18.64 12.9399 18.93L17.8199 21.64C19.3999 22.52 20.6899 21.76 20.6899 19.95V5.86C20.6799 3.74 18.9499 2 16.8199 2Z" fill="#562CF0"/>
      <path d="M12 10.28C10.98 10.28 9.96 10.1 8.99 9.74999C8.6 9.60999 8.4 9.17999 8.54 8.78999C8.69 8.39999 9.12 8.19999 9.51 8.33999C11.12 8.91999 12.89 8.91999 14.5 8.33999C14.89 8.19999 15.32 8.39999 15.46 8.78999C15.6 9.17999 15.4 9.60999 15.01 9.74999C14.04 10.1 13.02 10.28 12 10.28Z" fill="#562CF0"/>
    </svg>
  );
}

export default function MangaPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id) || 0;
  const data = MANGA_DATA[id] || DEFAULT_DATA;
  const coverIdx = (id % 12) + 1;
  const title = MANGA_TITLES[id % MANGA_TITLES.length] || data.title;

  const [activeTab, setActiveTab] = useState<'main' | 'chapters' | 'reviews'>('main');

  const chapters = Array.from({ length: 8 }, (_, i) => 241 - i);

  return (
    <>
      <Header />
      <main className="main">
        <section className="section manga-inner-section">
          <div className="container">
            <div className="manga-inner">
              {/* Cover */}
              <div className="manga-inner__cover">
                <img
                  src={`/images/cover_${coverIdx}.jpg`}
                  alt={title}
                />
              </div>

              {/* Info */}
              <div className="manga-inner__info">
                {/* Genre & Year tags */}
                <div className="manga-inner__tags">
                  <span className="manga-inner__tag">Боевые искусства 🔥</span>
                  <span className="manga-inner__tag-sep">•</span>
                  <span className="manga-inner__tag">2024 📅</span>
                </div>

                {/* Title + Rating row */}
                <div className="manga-inner__title-row">
                  <h1 className="manga-inner__title">{data.title}</h1>
                  <div className="manga-inner__rating-block">
                    <div className="manga-inner__rating-score">{data.rating}</div>
                    <div className="manga-inner__rating-count">{data.ratingCount}</div>
                    <button className="manga-inner__rating-btn">Оценить</button>
                  </div>
                </div>

                {/* Stats */}
                <div className="manga-inner__stats">
                  <span className="manga-inner__stat">
                    <HeartIcon />
                    Лайков: {data.likes}
                  </span>
                  <span className="manga-inner__stat">
                    <EyeIcon />
                    Просмотров: {data.views}
                  </span>
                  <span className="manga-inner__stat">
                    <BookmarkIcon />
                    Закладок: {data.bookmarks}
                  </span>
                </div>

                {/* Tabs */}
                <div className="manga-inner__tabs">
                  <button
                    className={`manga-inner__tab ${activeTab === 'main' ? 'manga-inner__tab--active' : ''}`}
                    onClick={() => setActiveTab('main')}
                  >
                    Главная
                  </button>
                  <button
                    className={`manga-inner__tab ${activeTab === 'chapters' ? 'manga-inner__tab--active' : ''}`}
                    onClick={() => setActiveTab('chapters')}
                  >
                    Главы ({data.totalChapters})
                  </button>
                  <button
                    className={`manga-inner__tab ${activeTab === 'reviews' ? 'manga-inner__tab--active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    Отзывы ({data.totalReviews})
                  </button>
                </div>

                {/* Tab content */}
                {activeTab === 'main' && (
                  <div className="manga-inner__content">
                    <div className="manga-inner__description">
                      {data.description.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'chapters' && (
                  <div className="manga-inner__content">
                    <div className="manga-inner__chapters-full">
                      {Array.from({ length: 20 }, (_, i) => (
                        <Link href="#" key={i} className="manga-inner__chapter-card">
                          <span className="manga-inner__chapter-num">{241 - i}</span>
                          <span className="manga-inner__chapter-label">глава</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="manga-inner__content">
                    <p className="manga-inner__description" style={{ padding: '20px 0' }}>
                      Отзывы пока недоступны.
                    </p>
                  </div>
                )}

                {/* Action buttons */}
                <div className="manga-inner__actions">
                  <button className="manga-inner__read-btn">Читать</button>
                  <button className="manga-inner__bookmark-btn">
                    <BookmarkOutlineIcon />
                    В закладки
                  </button>
                </div>

                {/* New chapters */}
                <div className="manga-inner__new-chapters">
                  <h3 className="manga-inner__new-chapters-title">Новые главы</h3>
                  <div className="manga-inner__chapters-grid">
                    {chapters.map((ch) => (
                      <Link href="#" key={ch} className="manga-inner__chapter-card">
                        <span className="manga-inner__chapter-num">{ch}</span>
                        <span className="manga-inner__chapter-label">глава</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
