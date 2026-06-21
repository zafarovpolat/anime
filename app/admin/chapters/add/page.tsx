'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useRef } from 'react';

const MOCK_WORKS_LIST = [
  'Наномашины', 'Мир Зомби', 'Истинная красота', 'Следуйте за своим сердцем',
  'Таков закон', 'Выбери меня!', 'Игрок падшего дворянского рода',
  'Леди-малышка изменяет мир деньгами',
];

export default function AdminAddChapterPage() {
  const [workTitle, setWorkTitle] = useState('');
  const [chapterNum, setChapterNum] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');
  const [volume, setVolume] = useState('1');
  const [pages, setPages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const handlePages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const urls = files.map(f => URL.createObjectURL(f));
    setPages(prev => [...prev, ...urls]);
  };

  const removePage = (idx: number) => {
    setPages(prev => prev.filter((_, i) => i !== idx));
  };

  const movePage = (idx: number, dir: -1 | 1) => {
    setPages(prev => {
      const next = [...prev];
      const swap = idx + dir;
      if (swap < 0 || swap >= next.length) return next;
      [next[idx], next[swap]] = [next[swap], next[idx]];
      return next;
    });
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="admin-page">
          <div className="container">
            <div className="admin-page__head">
              <div className="admin-breadcrumb">
                <Link href="/admin/works" className="admin-breadcrumb__link">Список произведений</Link>
                <span className="admin-breadcrumb__sep">/</span>
                <span className="admin-breadcrumb__cur">Добавить главу</span>
              </div>
              <h1 className="admin-page__title">Добавить главу</h1>
            </div>

            <div className="admin-form admin-form--wide">
              <div className="admin-form__row">
                <div className="admin-form__field">
                  <label className="admin-form__label">Произведение *</label>
                  <select className="admin-form__select" value={workTitle} onChange={e => setWorkTitle(e.target.value)}>
                    <option value="">— Выбрать произведение —</option>
                    {MOCK_WORKS_LIST.map(w => <option key={w}>{w}</option>)}
                  </select>
                </div>
                <div className="admin-form__field">
                  <label className="admin-form__label">Том</label>
                  <input className="admin-form__input" type="number" min="1" placeholder="1" value={volume} onChange={e => setVolume(e.target.value)} />
                </div>
              </div>

              <div className="admin-form__row">
                <div className="admin-form__field">
                  <label className="admin-form__label">Номер главы *</label>
                  <input className="admin-form__input" type="number" min="1" placeholder="Например: 42" value={chapterNum} onChange={e => setChapterNum(e.target.value)} />
                </div>
                <div className="admin-form__field">
                  <label className="admin-form__label">Название главы</label>
                  <input className="admin-form__input" type="text" placeholder="Необязательно" value={chapterTitle} onChange={e => setChapterTitle(e.target.value)} />
                </div>
              </div>

              {/* Pages upload */}
              <div className="admin-form__field">
                <label className="admin-form__label">Страницы главы *</label>
                <div
                  className="admin-pages-drop"
                  onClick={() => fileRef.current?.click()}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#97989b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 8L12 3L7 8" stroke="#97989b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V15" stroke="#97989b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Нажмите или перетащите страницы</span>
                  <span className="admin-pages-drop__hint">JPG, PNG, WebP — порядок можно изменить</span>
                </div>
                <input ref={fileRef} type="file" accept="image/*" multiple style={{ display: 'none' }} onChange={handlePages} />
              </div>

              {pages.length > 0 && (
                <div className="admin-pages-list">
                  {pages.map((src, idx) => (
                    <div key={idx} className="admin-pages-item">
                      <span className="admin-pages-item__num">{idx + 1}</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={`Страница ${idx + 1}`} className="admin-pages-item__img" />
                      <div className="admin-pages-item__actions">
                        <button className="admin-pages-item__btn" onClick={() => movePage(idx, -1)} disabled={idx === 0}>↑</button>
                        <button className="admin-pages-item__btn" onClick={() => movePage(idx, 1)} disabled={idx === pages.length - 1}>↓</button>
                        <button className="admin-pages-item__btn admin-pages-item__btn--del" onClick={() => removePage(idx)}>✕</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="admin-form__actions">
                <button className="admin-btn admin-btn--primary admin-btn--lg">Сохранить главу</button>
                <Link href="/admin/works" className="admin-btn admin-btn--outline admin-btn--lg">Отмена</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
