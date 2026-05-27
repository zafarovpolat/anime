'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

const READING_LIST = [
  { id: 0, title: 'Выбери меня!', chapter: 'Том 5 Глава 194', time: '22 минуты назад', cover: 1, status: 'Читаю' },
  { id: 1, title: 'Я стала приёмной дочерью в семье убийц', chapter: 'Том 3 Глава 87', time: '1 час назад', cover: 2, status: 'Читаю' },
  { id: 2, title: 'Леди-малышка изменяет мир деньгами', chapter: 'Том 2 Глава 45', time: '2 часа назад', cover: 3, status: 'Буду читать' },
  { id: 3, title: 'Следуйте за своим сердцем', chapter: 'Том 1 Глава 12', time: '3 часа назад', cover: 4, status: 'Прочитано' },
  { id: 4, title: 'Не подбирайте выброшенный мусор', chapter: 'Том 4 Глава 120', time: '5 часов назад', cover: 5, status: 'Заброшено' },
];

const STATS = [
  { label: 'Читаю', value: 12, color: '#562CF0' },
  { label: 'Буду читать', value: 8, color: '#45B346' },
  { label: 'Прочитано', value: 24, color: '#3B82F6' },
  { label: 'Заброшено', value: 3, color: '#97989B' },
];

function UserIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill="#562CF0"/>
      <path d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z" fill="#562CF0"/>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0F172A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.33 19.7 5.02 18.53 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88Z" stroke="#0F172A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 12H3.62" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.85 8.65L2.5 12L5.85 15.35" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'reading' | 'completed' | 'settings'>('reading');

  return (
    <>
      <Header />
      <main className="main">
        <section className="section profile-section">
          <div className="container">
            {/* Profile Header Card */}
            <div className="profile-card">
              <div className="profile-card__header">
                <div className="profile-card__avatar">
                  <UserIcon />
                </div>
                <div className="profile-card__info">
                  <h1 className="profile-card__name">Пользователь</h1>
                  <p className="profile-card__email">user@example.com</p>
                </div>
                <div className="profile-card__actions-top">
                  <button className="profile-card__settings-btn" aria-label="Настройки">
                    <SettingsIcon />
                  </button>
                  <button className="profile-card__logout-btn" aria-label="Выйти">
                    <LogoutIcon />
                    <span>Выйти</span>
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="profile-stats">
                {STATS.map((stat) => (
                  <div className="profile-stats__item" key={stat.label}>
                    <span className="profile-stats__value" style={{ color: stat.color }}>{stat.value}</span>
                    <span className="profile-stats__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="profile-tabs">
              <button
                className={`profile-tabs__tab ${activeTab === 'reading' ? 'profile-tabs__tab--active' : ''}`}
                onClick={() => setActiveTab('reading')}
              >
                Мои закладки
              </button>
              <button
                className={`profile-tabs__tab ${activeTab === 'completed' ? 'profile-tabs__tab--active' : ''}`}
                onClick={() => setActiveTab('completed')}
              >
                История чтения
              </button>
              <button
                className={`profile-tabs__tab ${activeTab === 'settings' ? 'profile-tabs__tab--active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                Настройки
              </button>
            </div>

            {/* Tab content */}
            {(activeTab === 'reading' || activeTab === 'completed') && (
              <div className="profile-list">
                {READING_LIST.map((item) => (
                  <Link href={`/manga/${item.id}`} key={item.id} className="profile-list__item">
                    <div className="profile-list__thumb">
                      <img
                        src={`/images/cover_${item.cover}.jpg`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="profile-list__info">
                      <div className="profile-list__title">{item.title}</div>
                      <div className="profile-list__chapter">{item.chapter}</div>
                    </div>
                    <div className="profile-list__meta">
                      <span className={`profile-list__status profile-list__status--${item.status === 'Читаю' ? 'reading' : item.status === 'Буду читать' ? 'planned' : item.status === 'Прочитано' ? 'completed' : 'dropped'}`}>
                        {item.status}
                      </span>
                      <span className="profile-list__time">{item.time}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="profile-settings">
                <div className="profile-settings__group">
                  <h3 className="profile-settings__title">Основные</h3>
                  <div className="profile-settings__field">
                    <label className="profile-settings__label">Имя пользователя</label>
                    <input type="text" className="profile-settings__input" defaultValue="Пользователь" />
                  </div>
                  <div className="profile-settings__field">
                    <label className="profile-settings__label">Email</label>
                    <input type="email" className="profile-settings__input" defaultValue="user@example.com" />
                  </div>
                </div>
                <div className="profile-settings__group">
                  <h3 className="profile-settings__title">Уведомления</h3>
                  <div className="profile-settings__toggle-row">
                    <span>Уведомления о новых главах</span>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-switch__slider"></span>
                    </label>
                  </div>
                  <div className="profile-settings__toggle-row">
                    <span>Уведомления по email</span>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="toggle-switch__slider"></span>
                    </label>
                  </div>
                </div>
                <button className="profile-settings__save">Сохранить</button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
