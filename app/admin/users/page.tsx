'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import Image from 'next/image';

type UserStatus = 'active' | 'banned' | 'restricted';

interface AdminUser {
  id: number;
  avatar: string;
  username: string;
  email: string;
  registered: string;
  status: UserStatus;
}

const MOCK_USERS: AdminUser[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  avatar: i < 3 ? `/images/avatar${i + 1}.png` : '',
  username: ['Sempai_11', 'OtakuKing', 'MangaLover', 'DarkReader', 'SakuraChan', 'NightWolf', 'AniMax', 'ZeroOne', 'StarDust', 'ShadowByte', 'CrystalMoon', 'IronFist'][i],
  email: `user${i + 1}@example.com`,
  registered: `${10 + i}.0${(i % 9) + 1}.2024`,
  status: i === 2 ? 'banned' : i === 5 ? 'restricted' : 'active',
}));

const STATUS_LABEL: Record<UserStatus, string> = {
  active: 'Активен',
  banned: 'Заблокирован',
  restricted: 'Ограничен',
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>(MOCK_USERS);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<UserStatus | 'all'>('all');
  const [confirmModal, setConfirmModal] = useState<{ id: number; action: 'ban' | 'restrict' | 'unban' } | null>(null);

  const filtered = users.filter(u => {
    const matchSearch = u.username.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'all' || u.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const applyAction = (id: number, action: 'ban' | 'restrict' | 'unban') => {
    setUsers(prev => prev.map(u => {
      if (u.id !== id) return u;
      return { ...u, status: action === 'ban' ? 'banned' : action === 'restrict' ? 'restricted' : 'active' };
    }));
    setConfirmModal(null);
  };

  const ACTION_LABEL = { ban: 'заблокировать', restrict: 'ограничить', unban: 'разблокировать' };

  return (
    <>
      <Header />
      <main className="main">
        <section className="admin-page">
          <div className="container">
            <div className="admin-page__head">
              <h1 className="admin-page__title">Список пользователей</h1>
              <span className="admin-counter">{users.length} пользователей</span>
            </div>

            <div className="admin-toolbar">
              <div className="admin-search-bar">
                <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                  <path d="M23.3333 23.3333L18.4372 18.4372M18.4372 18.4372C20.0206 16.8537 21 14.6662 21 12.25C21 7.41751 17.0825 3.5 12.25 3.5C7.41751 3.5 3.5 7.41751 3.5 12.25C3.5 17.0825 7.41751 21 12.25 21C14.6662 21 16.8537 20.0206 18.4372 18.4372Z" stroke="#97989b" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  className="admin-search-bar__input"
                  type="text"
                  placeholder="Поиск по нику или email..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <div className="admin-filter-tabs">
                {(['all', 'active', 'restricted', 'banned'] as const).map(s => (
                  <button
                    key={s}
                    className={`admin-filter-tab${filterStatus === s ? ' admin-filter-tab--active' : ''}`}
                    onClick={() => setFilterStatus(s)}
                  >
                    {s === 'all' ? 'Все' : STATUS_LABEL[s]}
                  </button>
                ))}
              </div>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th className="admin-table__th">Пользователь</th>
                    <th className="admin-table__th">Email</th>
                    <th className="admin-table__th">Дата регистрации</th>
                    <th className="admin-table__th">Статус</th>
                    <th className="admin-table__th admin-table__th--actions">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(user => (
                    <tr key={user.id} className="admin-table__row">
                      <td className="admin-table__td">
                        <div className="admin-user-cell">
                          <div className="admin-user-cell__avatar">
                            {user.avatar ? (
                              <Image src={user.avatar} alt={user.username} fill sizes="36px" style={{ objectFit: 'cover' }} />
                            ) : (
                              <span className="admin-user-cell__initials">{user.username[0].toUpperCase()}</span>
                            )}
                          </div>
                          <span className="admin-user-cell__name">{user.username}</span>
                        </div>
                      </td>
                      <td className="admin-table__td admin-table__td--muted">{user.email}</td>
                      <td className="admin-table__td admin-table__td--muted">{user.registered}</td>
                      <td className="admin-table__td">
                        <span className={`admin-status admin-status--${user.status}`}>
                          {STATUS_LABEL[user.status]}
                        </span>
                      </td>
                      <td className="admin-table__td admin-table__td--actions">
                        {user.status !== 'banned' && (
                          <button
                            className="admin-btn admin-btn--sm admin-btn--danger"
                            onClick={() => setConfirmModal({ id: user.id, action: 'ban' })}
                          >
                            Заблокировать
                          </button>
                        )}
                        {user.status !== 'restricted' && user.status !== 'banned' && (
                          <button
                            className="admin-btn admin-btn--sm admin-btn--warn"
                            onClick={() => setConfirmModal({ id: user.id, action: 'restrict' })}
                          >
                            Ограничить
                          </button>
                        )}
                        {user.status !== 'active' && (
                          <button
                            className="admin-btn admin-btn--sm admin-btn--outline"
                            onClick={() => setConfirmModal({ id: user.id, action: 'unban' })}
                          >
                            Разблокировать
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={5} className="admin-table__empty">Пользователи не найдены</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {confirmModal && (
        <div className="admin-confirm-overlay" onClick={() => setConfirmModal(null)}>
          <div className="admin-confirm" onClick={e => e.stopPropagation()}>
            <p className="admin-confirm__text">
              Вы уверены, что хотите <strong>{ACTION_LABEL[confirmModal.action]}</strong> пользователя?
            </p>
            <div className="admin-confirm__btns">
              <button
                className={`admin-btn ${confirmModal.action === 'unban' ? 'admin-btn--outline' : 'admin-btn--danger'}`}
                onClick={() => applyAction(confirmModal.id, confirmModal.action)}
              >
                Подтвердить
              </button>
              <button className="admin-btn admin-btn--outline" onClick={() => setConfirmModal(null)}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
