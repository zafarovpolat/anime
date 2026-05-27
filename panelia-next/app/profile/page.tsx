'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

/* ── SVG Icons ── */
function ProfileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#562CF0"/>
      <path d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z" fill="#562CF0"/>
    </svg>
  );
}

function BookmarkMenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86V19.95C3.32 21.75 4.61 22.51 6.19 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z" fill="#562CF0"/>
    </svg>
  );
}

function CommentsMenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.43 13 15.25C13 12.56 10.76 10.37 8 10.37C6.81 10.37 5.72 10.78 4.85 11.47C4.82 11.2 4.81 10.93 4.81 10.65C4.81 6.27 8.69 2.73 13.47 2.73C18.25 2.73 22.13 6.27 22.13 10.65C22.13 13.21 20.69 15.46 18.47 16.83Z" fill="#562CF0"/>
      <path d="M13 15.25C13 16.43 12.56 17.52 11.82 18.39C10.83 19.59 9.26 20.25 7.44 20.25L5.1 21.67C4.67 21.93 4.12 21.57 4.17 21.07L4.37 19.24C2.91 18.25 2 16.82 2 15.25C2 13.6 2.98 12.12 4.55 11.14C4.73 11.02 4.92 10.91 5.12 10.81C5.72 10.5 6.39 10.29 7.1 10.19C7.39 10.15 7.69 10.12 8 10.12C10.76 10.37 13 12.56 13 15.25Z" fill="#562CF0"/>
    </svg>
  );
}

function HistoryMenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7Z" fill="#562CF0"/>
      <path d="M8 2V5" stroke="#562CF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2V5" stroke="#562CF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SettingsMenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#562CF0"/>
      <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#562CF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M17.44 14.62L20 12.06L17.44 9.5" stroke="#FF4D4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.76001 12.06H19.93" stroke="#FF4D4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4" stroke="#FF4D4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8.84 2.4L3.37 8.19C3.17 8.41 2.97 8.84 2.93 9.14L2.68 11.31C2.59 12.09 3.15 12.62 3.92 12.49L6.07 12.12C6.37 12.07 6.79 11.85 6.99 11.63L12.46 5.84C13.41 4.82 13.84 3.66 12.36 2.27C10.89 0.9 9.79 1.38 8.84 2.4Z" stroke="#97989B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EyePasswordIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.387 8C10.387 9.32 9.32 10.387 8 10.387C6.68 10.387 5.613 9.32 5.613 8C5.613 6.68 6.68 5.613 8 5.613C9.32 5.613 10.387 6.68 10.387 8Z" stroke="#97989B" strokeWidth="1.2"/>
      <path d="M8 13.513C10.353 13.513 12.547 12.127 14.073 9.727C14.673 8.787 14.673 7.207 14.073 6.267C12.547 3.867 10.353 2.48 8 2.48C5.647 2.48 3.453 3.867 1.927 6.267C1.327 7.207 1.327 8.787 1.927 9.727C3.453 12.127 5.647 13.513 8 13.513Z" stroke="#97989B" strokeWidth="1.2"/>
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 17V11L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11L11 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

/* ── Mock data ── */
const BOOKMARKS = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  title: 'НАНОМАШИНЫ',
  tags: ['Боевые искусства', '🔥', '2024', '📅'],
  volume: 1,
  chapter: 240,
}));

const MY_COMMENTS = [
  {
    id: 0,
    username: 'Sempai_11',
    text: 'Надеюсь я дождусь до финала данного шедевра.',
    time: '14 часов назад',
    likes: 10,
  },
];

const READING_HISTORY = [
  { id: 0, title: 'Выбери меня!', genres: 'Манхва, Экшен', rating: 9.6, cover: 1 },
  { id: 1, title: 'Я стала приёмной дочерью в семье убийц', genres: 'Манхва, Экшен', rating: 9.6, cover: 2 },
  { id: 2, title: 'Леди-малышка изменяет мир деньгами', genres: 'Манхва, Экшен', rating: 9.6, cover: 3 },
];

const MENU_ITEMS = [
  { id: 'profile', label: 'Профиль', icon: <ProfileIcon /> },
  { id: 'bookmarks', label: 'Закладки', icon: <BookmarkMenuIcon /> },
  { id: 'comments', label: 'Мои комментарии', icon: <CommentsMenuIcon /> },
  { id: 'history', label: 'История чтения', icon: <HistoryMenuIcon /> },
  { id: 'settings', label: 'Настройки аккаунта', icon: <SettingsMenuIcon /> },
];

const BOOKMARK_TABS = ['Читаю', 'Буду читать', 'Брошено', 'Прочитано', 'Избранное'];

const SOCIAL_LINKS = [
  { name: 'Telegram', icon: '✈️' },
  { name: 'Yandex', icon: 'Y' },
  { name: 'ВКонтакте', icon: 'VK' },
  { name: 'Google', icon: 'G' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [activeBookmarkFilter, setActiveBookmarkFilter] = useState('Читаю');

  return (
    <>
      <Header />
      <main className="main">
        {/* ── Banner ── */}
        <section className="profile-banner">
          <div className="profile-banner__overlay"></div>
          <div className="profile-banner__content">
            <div className="profile-banner__avatar">
              <img src="/images/cover_1.jpg" alt="Avatar" />
            </div>
            <div className="profile-banner__info">
              <h2 className="profile-banner__name">SEMPAI_11</h2>
              <p className="profile-banner__status">Пользователь | В сети 2 минуты назад</p>
            </div>
            <button className="profile-banner__upload">
              <UploadIcon />
            </button>
          </div>
        </section>

        {/* ── Mobile tab bar ── */}
        <div className="profile-mobile-tabs">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`profile-mobile-tabs__item${activeTab === item.id ? ' profile-mobile-tabs__item--active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <button
            className={`profile-mobile-tabs__item${activeTab === 'logout' ? ' profile-mobile-tabs__item--active' : ''}`}
          >
            <LogoutIcon />
            Настройки аккаунта
          </button>
        </div>

        {/* ── Body: sidebar + content ── */}
        <section className="section profile-section">
          <div className="container">
            <div className="profile-layout">
              {/* ── Left sidebar ── */}
              <aside className="profile-sidebar">
                <nav className="profile-sidebar__nav">
                  {MENU_ITEMS.map((item) => (
                    <button
                      key={item.id}
                      className={`profile-sidebar__item${activeTab === item.id ? ' profile-sidebar__item--active' : ''}`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="profile-sidebar__divider"></div>
                <button className="profile-sidebar__logout">
                  <LogoutIcon />
                  Выйти
                </button>
              </aside>

              {/* ── Right content ── */}
              <div className="profile-content">
                {/* ── Tab: Профиль ── */}
                {activeTab === 'profile' && (
                  <div className="profile-tab-profile">
                    <h2 className="profile-content__title">ЛИЧНЫЕ ДАННЫЕ</h2>
                    <div className="profile-form">
                      <div className="profile-form__row">
                        <div className="profile-form__field">
                          <label className="profile-form__label">Никнейм</label>
                          <div className="profile-form__input-wrap">
                            <input type="text" defaultValue="Sempai_11" className="profile-form__input" />
                            <button className="profile-form__edit-btn"><EditIcon /></button>
                          </div>
                        </div>
                        <div className="profile-form__field">
                          <label className="profile-form__label">Пол</label>
                          <div className="profile-form__input-wrap">
                            <select className="profile-form__select">
                              <option>Мужской</option>
                              <option>Женский</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="profile-form__field profile-form__field--full">
                        <label className="profile-form__label">О себе</label>
                        <textarea className="profile-form__textarea" placeholder="О себе"></textarea>
                      </div>
                      <button className="profile-form__save">Сохранить</button>
                    </div>
                  </div>
                )}

                {/* ── Tab: Закладки ── */}
                {activeTab === 'bookmarks' && (
                  <div className="profile-tab-bookmarks">
                    <h2 className="profile-content__title">МОИ ЗАКЛАДКИ</h2>
                    <div className="profile-bookmarks__filters">
                      {BOOKMARK_TABS.map((tab) => (
                        <button
                          key={tab}
                          className={`profile-bookmarks__filter${activeBookmarkFilter === tab ? ' profile-bookmarks__filter--active' : ''}`}
                          onClick={() => setActiveBookmarkFilter(tab)}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                    <div className="profile-bookmarks__toolbar">
                      <button className="profile-bookmarks__edit">Редактировать ✏️</button>
                      <button className="profile-bookmarks__sort">📋 По добавлению</button>
                    </div>
                    <div className="profile-bookmarks__list">
                      {BOOKMARKS.map((b) => (
                        <div key={b.id} className="profile-bookmark-item">
                          <div className="profile-bookmark-item__cover">
                            <img src={`/images/cover_${(b.id % 12) + 1}.jpg`} alt={b.title} />
                          </div>
                          <div className="profile-bookmark-item__info">
                            <h4 className="profile-bookmark-item__title">{b.title}</h4>
                            <p className="profile-bookmark-item__tags">
                              Боевые искусства 🔥 • 2024 📅
                            </p>
                          </div>
                          <button className="profile-bookmark-item__continue">
                            Продолжить Том {b.volume} Глава {b.chapter}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Tab: Мои комментарии ── */}
                {activeTab === 'comments' && (
                  <div className="profile-tab-comments">
                    <h2 className="profile-content__title">МОИ КОММЕНТАРИИ</h2>
                    <div className="profile-comments__list">
                      {MY_COMMENTS.map((c) => (
                        <div key={c.id} className="profile-comment-item">
                          <div className="profile-comment-item__avatar">
                            <img src="/images/cover_1.jpg" alt={c.username} />
                          </div>
                          <div className="profile-comment-item__body">
                            <div className="profile-comment-item__header">
                              <span className="profile-comment-item__name">{c.username}</span>
                              <button className="profile-comment-item__menu">
                                <ThreeDotsIcon />
                              </button>
                            </div>
                            <p className="profile-comment-item__text">{c.text}</p>
                            <div className="profile-comment-item__footer">
                              <span className="profile-comment-item__time">{c.time}</span>
                              <span className="profile-comment-item__link">Перейти к комментарии</span>
                              <div className="profile-comment-item__reactions">
                                <span className="profile-comment-item__like">
                                  <ThumbUpIcon /> {c.likes}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Tab: История чтения ── */}
                {activeTab === 'history' && (
                  <div className="profile-tab-history">
                    <h2 className="profile-content__title">ИСТОРИЯ ЧТЕНИЯ</h2>
                    <div className="profile-history__grid">
                      {READING_HISTORY.map((item) => (
                        <div key={item.id} className="profile-history-card">
                          <div className="profile-history-card__cover">
                            <img src={`/images/cover_${item.cover}.jpg`} alt={item.title} />
                            <span className="profile-history-card__rating">{item.rating} ★</span>
                          </div>
                          <h4 className="profile-history-card__title">{item.title}</h4>
                          <p className="profile-history-card__genres">{item.genres}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Tab: Настройки аккаунта ── */}
                {activeTab === 'settings' && (
                  <div className="profile-tab-settings">
                    <h2 className="profile-content__title">СМЕНА ПАРОЛЯ</h2>
                    <div className="profile-settings__password">
                      <div className="profile-form__field profile-form__field--full">
                        <label className="profile-form__label">Старый пароль</label>
                        <div className="profile-form__input-wrap">
                          <input type="password" className="profile-form__input" />
                          <button className="profile-form__edit-btn"><EyePasswordIcon /></button>
                        </div>
                      </div>
                      <div className="profile-form__row">
                        <div className="profile-form__field">
                          <label className="profile-form__label">Новый пароль</label>
                          <div className="profile-form__input-wrap">
                            <input type="password" className="profile-form__input" />
                            <button className="profile-form__edit-btn"><EyePasswordIcon /></button>
                          </div>
                        </div>
                        <div className="profile-form__field">
                          <label className="profile-form__label">Введите пароль ещё раз</label>
                          <div className="profile-form__input-wrap">
                            <input type="password" className="profile-form__input" />
                            <button className="profile-form__edit-btn"><EyePasswordIcon /></button>
                          </div>
                        </div>
                      </div>
                      <button className="profile-form__save">Сохранить</button>
                    </div>

                    <h2 className="profile-content__title profile-content__title--mt">ПРИВЯЗАТЬ ПРОФИЛЬ</h2>
                    <div className="profile-settings__social">
                      {SOCIAL_LINKS.map((s) => (
                        <div key={s.name} className="profile-social-item">
                          <div className="profile-social-item__icon">{s.icon}</div>
                          <span className="profile-social-item__name">{s.name}</span>
                          <button className="profile-social-item__btn">Привязать</button>
                        </div>
                      ))}
                    </div>
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
