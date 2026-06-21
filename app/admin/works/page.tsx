'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const MOCK_WORKS = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  cover: `/images/cover_${(i % 12) + 1}.jpg`,
  title: [
    'Наномашины', 'Мир Зомби', 'Истинная красота', 'Следуйте за своим сердцем',
    'Таков закон', 'Выбери меня!', 'Игрок падшего дворянского рода',
    'Леди-малышка изменяет мир деньгами', 'Присцилла просит о замужестве',
    'План перерожденного наёмника',
  ][i],
  type: 'Манга',
  status: i % 3 === 0 ? 'Завершено' : 'Выходит',
  chapters: 40 + i * 12,
  author: 'Автор ' + (i + 1),
}));

export default function AdminWorksPage() {
  const [works, setWorks] = useState(MOCK_WORKS);
  const [search, setSearch] = useState('');
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const filtered = works.filter(w =>
    w.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setWorks(prev => prev.filter(w => w.id !== id));
    setDeleteId(null);
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="admin-page">
          <div className="container">
            <div className="admin-page__head">
              <h1 className="admin-page__title">Список произведений</h1>
              <Link href="/admin/works/add" className="admin-btn admin-btn--primary">
                + Добавить произведение
              </Link>
            </div>

            <div className="admin-search-bar">
              <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                <path d="M23.3333 23.3333L18.4372 18.4372M18.4372 18.4372C20.0206 16.8537 21 14.6662 21 12.25C21 7.41751 17.0825 3.5 12.25 3.5C7.41751 3.5 3.5 7.41751 3.5 12.25C3.5 17.0825 7.41751 21 12.25 21C14.6662 21 16.8537 20.0206 18.4372 18.4372Z" stroke="#97989b" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                className="admin-search-bar__input"
                type="text"
                placeholder="Поиск по названию..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th className="admin-table__th">Обложка</th>
                    <th className="admin-table__th">Название</th>
                    <th className="admin-table__th">Тип</th>
                    <th className="admin-table__th">Статус</th>
                    <th className="admin-table__th">Глав</th>
                    <th className="admin-table__th">Автор</th>
                    <th className="admin-table__th admin-table__th--actions">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(work => (
                    <tr key={work.id} className="admin-table__row">
                      <td className="admin-table__td">
                        <div className="admin-table__cover">
                          <Image src={work.cover} alt={work.title} fill sizes="48px" style={{ objectFit: 'cover' }} />
                        </div>
                      </td>
                      <td className="admin-table__td admin-table__td--title">{work.title}</td>
                      <td className="admin-table__td">{work.type}</td>
                      <td className="admin-table__td">
                        <span className={`admin-status ${work.status === 'Выходит' ? 'admin-status--active' : 'admin-status--done'}`}>
                          {work.status}
                        </span>
                      </td>
                      <td className="admin-table__td">{work.chapters}</td>
                      <td className="admin-table__td">{work.author}</td>
                      <td className="admin-table__td admin-table__td--actions">
                        <Link href={`/admin/works/add?edit=${work.id}`} className="admin-btn admin-btn--sm admin-btn--outline">
                          Редактировать
                        </Link>
                        <button
                          className="admin-btn admin-btn--sm admin-btn--danger"
                          onClick={() => setDeleteId(work.id)}
                        >
                          Удалить
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={7} className="admin-table__empty">Ничего не найдено</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Confirm delete modal */}
      {deleteId !== null && (
        <div className="admin-confirm-overlay" onClick={() => setDeleteId(null)}>
          <div className="admin-confirm" onClick={e => e.stopPropagation()}>
            <p className="admin-confirm__text">Удалить произведение?</p>
            <div className="admin-confirm__btns">
              <button className="admin-btn admin-btn--danger" onClick={() => handleDelete(deleteId)}>Удалить</button>
              <button className="admin-btn admin-btn--outline" onClick={() => setDeleteId(null)}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
