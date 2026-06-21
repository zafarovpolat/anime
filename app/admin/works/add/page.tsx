'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';

const GENRES = [
  "Боевые искусства", "Гарем", "Гендерная интрига", "Героическое фэнтези",
  "Детектив", "Дзёсэй", "Драма", "Исекай",
  "Комедия", "Мистика", "Приключения", "Романтика",
  "Сёнэн", "Сёдзё", "Фэнтези",
];

const YEARS = Array.from({ length: 30 }, (_, i) => String(2025 - i));
const TYPES = ['Манга', 'Манхва', 'Маньхуа', 'Руманга'];
const STATUSES = ['Выходит', 'Завершено', 'Анонс', 'Заморожено'];

export default function AdminAddWorkPage() {
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('2024');
  const [type, setType] = useState('Манга');
  const [status, setStatus] = useState('Выходит');
  const [description, setDescription] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const toggleGenre = (g: string) => {
    setSelectedGenres(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
  };

  const handleCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCoverPreview(URL.createObjectURL(file));
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
                <span className="admin-breadcrumb__cur">Добавить произведение</span>
              </div>
              <h1 className="admin-page__title">Добавить произведение</h1>
            </div>

            <div className="admin-form-layout">
              {/* Cover upload */}
              <div className="admin-cover-upload">
                <div
                  className="admin-cover-upload__area"
                  onClick={() => fileRef.current?.click()}
                >
                  {coverPreview ? (
                    <Image src={coverPreview} alt="Обложка" fill sizes="220px" style={{ objectFit: 'cover', borderRadius: 16 }} />
                  ) : (
                    <div className="admin-cover-upload__placeholder">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#97989b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 8L12 3L7 8" stroke="#97989b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 3V15" stroke="#97989b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Загрузить обложку</span>
                      <span className="admin-cover-upload__hint">JPG, PNG до 5 МБ</span>
                    </div>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleCover} />
                {coverPreview && (
                  <button className="admin-btn admin-btn--sm admin-btn--outline" style={{ marginTop: 10, width: '100%' }} onClick={() => setCoverPreview(null)}>
                    Удалить обложку
                  </button>
                )}
              </div>

              {/* Form fields */}
              <div className="admin-form">
                <div className="admin-form__row">
                  <div className="admin-form__field">
                    <label className="admin-form__label">Название *</label>
                    <input className="admin-form__input" type="text" placeholder="Введите название" value={title} onChange={e => setTitle(e.target.value)} />
                  </div>
                  <div className="admin-form__field">
                    <label className="admin-form__label">Автор *</label>
                    <input className="admin-form__input" type="text" placeholder="Имя автора" value={author} onChange={e => setAuthor(e.target.value)} />
                  </div>
                </div>

                <div className="admin-form__row admin-form__row--3">
                  <div className="admin-form__field">
                    <label className="admin-form__label">Тип</label>
                    <select className="admin-form__select" value={type} onChange={e => setType(e.target.value)}>
                      {TYPES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="admin-form__field">
                    <label className="admin-form__label">Год выпуска</label>
                    <select className="admin-form__select" value={year} onChange={e => setYear(e.target.value)}>
                      {YEARS.map(y => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                  <div className="admin-form__field">
                    <label className="admin-form__label">Статус</label>
                    <select className="admin-form__select" value={status} onChange={e => setStatus(e.target.value)}>
                      {STATUSES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="admin-form__field">
                  <label className="admin-form__label">Описание</label>
                  <textarea className="admin-form__textarea" rows={4} placeholder="Краткое описание произведения..." value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <div className="admin-form__field">
                  <label className="admin-form__label">Жанры</label>
                  <div className="admin-genres-grid">
                    {GENRES.map(genre => (
                      <label key={genre} className="catalog-filter__checkbox-row admin-genre-row">
                        <input
                          type="checkbox"
                          className="catalog-filter__checkbox"
                          checked={selectedGenres.includes(genre)}
                          onChange={() => toggleGenre(genre)}
                        />
                        <span className="catalog-filter__checkbox-label">{genre}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="admin-form__actions">
                  <button className="admin-btn admin-btn--primary admin-btn--lg">Сохранить</button>
                  <Link href="/admin/works" className="admin-btn admin-btn--outline admin-btn--lg">Отмена</Link>
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
