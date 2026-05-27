'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

/* ── mock data ── */
const DEFAULT_DATA = {
  title: 'НАНОМАШИНЫ',
  genres: ['Боевые искусства', '2024'],
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

const CHAPTERS_LIST = Array.from({ length: 13 }, (_, i) => ({
  volume: 1,
  chapter: 241 - i,
  date: '09.01.2026',
  views: '3 646',
}));

const COMMENTS = Array.from({ length: 7 }, (_, i) => ({
  id: i,
  avatar: '/images/avatar_default.png',
  username: 'Jul_Mol',
  text: 'Нравится и рисовка да фантазия автора удивляет',
  time: '14 часов назад',
  likes: 20,
  dislikes: 1,
}));

/* ── SVG icons ── */
function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8.41 13.77C8.19 13.85 7.81 13.85 7.59 13.77C5.67 13.07 1.5 10.48 1.5 5.99C1.5 4.01 3.09 2.41 5.06 2.41C6.22 2.41 7.24 2.96 7.9 3.82C8.24 3.38 8.68 3.03 9.18 2.79C9.68 2.55 10.23 2.42 10.79 2.42C12.76 2.42 14.35 4.02 14.35 6C14.35 10.49 10.18 13.08 8.41 13.77Z" fill="#562CF0"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.387 8C10.387 9.32 9.32 10.387 8 10.387C6.68 10.387 5.613 9.32 5.613 8C5.613 6.68 6.68 5.613 8 5.613C9.32 5.613 10.387 6.68 10.387 8Z" stroke="#562CF0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 13.513C10.353 13.513 12.547 12.127 14.073 9.727C14.673 8.787 14.673 7.207 14.073 6.267C12.547 3.867 10.353 2.48 8 2.48C5.647 2.48 3.453 3.867 1.927 6.267C1.327 7.207 1.327 8.787 1.927 9.727C3.453 12.127 5.647 13.513 8 13.513Z" stroke="#562CF0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BookmarkFillIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M11.213 1.333H4.787C3.367 1.333 2.213 2.493 2.213 3.907V13.3C2.213 14.5 3.073 15.007 4.127 14.427L7.38 12.62C7.727 12.427 8.287 12.427 8.627 12.62L11.88 14.427C12.933 15.013 13.793 14.507 13.793 13.3V3.907C13.787 2.493 12.633 1.333 11.213 1.333Z" fill="#562CF0"/>
    </svg>
  );
}

function BookmarkOutlineIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path opacity="0.4" d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86V19.95C3.32 21.75 4.61 22.51 6.19 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" fill="#562CF0"/>
      <path d="M12 10.28C10.98 10.28 9.96 10.1 8.99 9.75C8.6 9.61 8.4 9.18 8.54 8.79C8.69 8.4 9.12 8.2 9.51 8.34C11.12 8.92 12.89 8.92 14.5 8.34C14.89 8.2 15.32 8.4 15.46 8.79C15.6 9.18 15.4 9.61 15.01 9.75C14.04 10.1 13.02 10.28 12 10.28Z" fill="#562CF0"/>
    </svg>
  );
}

function BookSquareIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" fill="none">
      <path d="M22 16.74V4.67C22 3.47 21.02 2.58 19.83 2.68H19.77C17.67 2.86 14.48 3.93 12.7 5.05L12.53 5.16C12.24 5.34 11.76 5.34 11.47 5.16L11.22 5.01C9.44 3.9 6.26 2.84 4.16 2.67C2.97 2.57 2 3.47 2 4.66V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z" fill="white"/>
      <path d="M12 5.49V20.49" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0"/>
      <path d="M7.75 8.49H5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0"/>
      <path d="M8.5 11.49H5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#97989B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 22L20 20" stroke="#97989B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M7.39999 6.32L15.89 3.49C19.7 2.22 21.77 4.3 20.51 8.11L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23 7.39999 6.32Z" fill="white"/>
    </svg>
  );
}

function EyeSmallIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M10.387 8C10.387 9.32 9.32 10.387 8 10.387C6.68 10.387 5.613 9.32 5.613 8C5.613 6.68 6.68 5.613 8 5.613C9.32 5.613 10.387 6.68 10.387 8Z" stroke="#97989B" strokeWidth="1.2"/>
      <path d="M8 13.513C10.353 13.513 12.547 12.127 14.073 9.727C14.673 8.787 14.673 7.207 14.073 6.267C12.547 3.867 10.353 2.48 8 2.48C5.647 2.48 3.453 3.867 1.927 6.267C1.327 7.207 1.327 8.787 1.927 9.727C3.453 12.127 5.647 13.513 8 13.513Z" stroke="#97989B" strokeWidth="1.2"/>
    </svg>
  );
}

function ThreeDotsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="3" r="1.5" fill="#97989B"/>
      <circle cx="8" cy="8" r="1.5" fill="#97989B"/>
      <circle cx="8" cy="13" r="1.5" fill="#97989B"/>
    </svg>
  );
}

function ThumbUpIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M4.67 6.67H2.67C2.3 6.67 2 6.97 2 7.33V13.33C2 13.7 2.3 14 2.67 14H4.67C5.03 14 5.33 13.7 5.33 13.33V7.33C5.33 6.97 5.03 6.67 4.67 6.67Z" fill="#562CF0"/>
      <path d="M9.33 2L7.33 6.67V14H12.2C12.73 14.01 13.19 13.63 13.27 13.1L14 8.44C14.05 8.12 13.96 7.8 13.75 7.55C13.54 7.31 13.24 7.17 12.93 7.17H10L10.67 4.23C10.72 4.01 10.67 3.78 10.54 3.6L9.93 2.73" stroke="#562CF0" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ThumbDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ transform: 'rotate(180deg)' }}>
      <path d="M4.67 6.67H2.67C2.3 6.67 2 6.97 2 7.33V13.33C2 13.7 2.3 14 2.67 14H4.67C5.03 14 5.33 13.7 5.33 13.33V7.33C5.33 6.97 5.03 6.67 4.67 6.67Z" fill="#97989B"/>
      <path d="M9.33 2L7.33 6.67V14H12.2C12.73 14.01 13.19 13.63 13.27 13.1L14 8.44C14.05 8.12 13.96 7.8 13.75 7.55C13.54 7.31 13.24 7.17 12.93 7.17H10L10.67 4.23C10.72 4.01 10.67 3.78 10.54 3.6L9.93 2.73" stroke="#97989B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ReverseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M5.33 2.67L2 6L5.33 9.33" stroke="#180F2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 6H10.67C12.51 6 14 7.49 14 9.33C14 11.17 12.51 12.67 10.67 12.67H8" stroke="#180F2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── Page Component ── */
export default function MangaPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id) || 0;
  const data = DEFAULT_DATA;
  const coverIdx = (id % 12) + 1;

  const [activeTab, setActiveTab] = useState<'main' | 'chapters' | 'reviews'>('main');

  const newChapters = Array.from({ length: 8 }, (_, i) => 241 - i);

  return (
    <>
      <Header />
      <main className="main">
        <section className="section manga-inner-section">
          <div className="container">
            <div className="manga-inner">
              {/* ── Left: Cover card ── */}
              <div className="manga-inner__left">
                <div className="manga-inner__cover">
                  <img src={`/images/cover_${coverIdx}.jpg`} alt={data.title} />
                </div>
                <div className="manga-inner__left-btns">
                  <button className="manga-inner__read-btn">
                    <BookSquareIcon />
                    Читать
                  </button>
                  <button className="manga-inner__bookmark-btn">
                    <BookmarkOutlineIcon />
                    В закладки
                  </button>
                </div>
              </div>

              {/* ── Right: Info ── */}
              <div className="manga-inner__info">
                {/* Genre + Year tags */}
                <div className="manga-inner__tags">
                  <span className="manga-inner__tag">{data.genres[0]} 🔥</span>
                  <span className="manga-inner__tag-sep">•</span>
                  <span className="manga-inner__tag">{data.genres[1]} 📅</span>
                </div>

                {/* Title */}
                <h1 className="manga-inner__title">{data.title}</h1>

                {/* Stats row */}
                <div className="manga-inner__stats">
                  <span className="manga-inner__stat">
                    <HeartIcon /> Лайков: {data.likes}
                  </span>
                  <span className="manga-inner__stat">
                    <EyeIcon /> Просмотров: {data.views}
                  </span>
                  <span className="manga-inner__stat">
                    <BookmarkFillIcon /> Закладок: {data.bookmarks}
                  </span>
                </div>

                {/* Rating block (top-right) */}
                <div className="manga-inner__rating-block">
                  <div className="manga-inner__rating-score">{data.rating}</div>
                  <div className="manga-inner__rating-count">{data.ratingCount}</div>
                  <button className="manga-inner__rating-btn">Оценить</button>
                </div>

                {/* Tabs */}
                <div className="manga-inner__tabs">
                  <button
                    className={`manga-inner__tab${activeTab === 'main' ? ' manga-inner__tab--active' : ''}`}
                    onClick={() => setActiveTab('main')}
                  >
                    Главная
                  </button>
                  <button
                    className={`manga-inner__tab${activeTab === 'chapters' ? ' manga-inner__tab--active' : ''}`}
                    onClick={() => setActiveTab('chapters')}
                  >
                    Главы ({data.totalChapters})
                  </button>
                  <button
                    className={`manga-inner__tab${activeTab === 'reviews' ? ' manga-inner__tab--active' : ''}`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    Отзывы ({data.totalReviews})
                  </button>
                </div>

                {/* ── Tab: Главная ── */}
                {activeTab === 'main' && (
                  <div className="manga-inner__content">
                    <div className="manga-inner__description">
                      {data.description.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>

                    <div className="manga-inner__new-chapters">
                      <h3 className="manga-inner__new-chapters-title">Новые главы</h3>
                      <div className="manga-inner__chapters-grid">
                        {newChapters.map((ch) => (
                          <Link href="#" key={ch} className="manga-inner__chapter-card">
                            <span className="manga-inner__chapter-num">{ch}</span>
                            <span className="manga-inner__chapter-label">глава</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Tab: Главы ── */}
                {activeTab === 'chapters' && (
                  <div className="manga-inner__content">
                    {/* Search + reverse */}
                    <div className="manga-inner__chapters-toolbar">
                      <div className="manga-inner__chapters-search">
                        <SearchIcon />
                        <span>Поиск по названию</span>
                      </div>
                      <button className="manga-inner__chapters-reverse">
                        <ReverseIcon />
                        Показать с начала
                      </button>
                    </div>

                    {/* Chapter rows */}
                    <div className="manga-inner__chapters-list">
                      {CHAPTERS_LIST.map((ch) => (
                        <Link href="#" key={ch.chapter} className="manga-inner__chapter-row">
                          <div className="manga-inner__chapter-row-title">
                            <span className="manga-inner__chapter-row-vol">Том {ch.volume}</span>
                            <span className="manga-inner__chapter-row-ch">Глава {ch.chapter}</span>
                          </div>
                          <div className="manga-inner__chapter-row-info">
                            <span className="manga-inner__chapter-row-date">{ch.date}</span>
                            <span className="manga-inner__chapter-row-views">
                              <EyeSmallIcon /> {ch.views}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Tab: Отзывы ── */}
                {activeTab === 'reviews' && (
                  <div className="manga-inner__content">
                    <h3 className="manga-inner__comments-title">
                      КОММЕНТАРИИ <span>{data.totalReviews}</span>
                    </h3>

                    {/* Comment input */}
                    <div className="manga-inner__comment-input">
                      <input type="text" placeholder="Оставить комментарий" />
                      <button className="manga-inner__comment-send">
                        <SendIcon />
                      </button>
                    </div>

                    {/* Comments list */}
                    <div className="manga-inner__comments-list">
                      {COMMENTS.map((c) => (
                        <div key={c.id} className="manga-inner__comment">
                          <div className="manga-inner__comment-avatar">
                            <img src={`/images/cover_${(c.id % 12) + 1}.jpg`} alt={c.username} />
                          </div>
                          <div className="manga-inner__comment-body">
                            <div className="manga-inner__comment-header">
                              <span className="manga-inner__comment-name">{c.username}</span>
                              <button className="manga-inner__comment-menu">
                                <ThreeDotsIcon />
                              </button>
                            </div>
                            <p className="manga-inner__comment-text">{c.text}</p>
                            <div className="manga-inner__comment-footer">
                              <span className="manga-inner__comment-time">{c.time}</span>
                              <span className="manga-inner__comment-reply">Ответить</span>
                              <div className="manga-inner__comment-reactions">
                                <span className="manga-inner__comment-like">
                                  <ThumbUpIcon /> {c.likes}
                                </span>
                                <span className="manga-inner__comment-dislike">
                                  <ThumbDownIcon /> {c.dislikes}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="manga-inner__show-more">Показать ещё</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
