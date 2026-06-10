'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SearchDropdownProps {
  onClose: () => void;
}

const POPULAR = [
  { id: 1, cover: '/images/cover_1.jpg', type: 'Манга', title: 'План перерожденного наёмника' },
  { id: 2, cover: '/images/cover_2.jpg', type: 'Манга', title: 'Я стала приёмной дочерью в семье убийц' },
  { id: 3, cover: '/images/cover_3.jpg', type: 'Манга', title: 'Леди-малышка изменяет мир деньгами' },
  { id: 4, cover: '/images/cover_4.jpg', type: 'Манга', title: 'Следуйте за своим сердцем' },
];

export default function SearchDropdown({ onClose }: SearchDropdownProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const handleMouseDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleMouseDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleMouseDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="search-dropdown" ref={panelRef}>
      <div className="search-dropdown__input-wrap">
        <div className="search-dropdown__input-field">
          <svg className="search-dropdown__search-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3333 23.3333L18.4372 18.4372M18.4372 18.4372C20.0206 16.8537 21 14.6662 21 12.25C21 7.41751 17.0825 3.5 12.25 3.5C7.41751 3.5 3.5 7.41751 3.5 12.25C3.5 17.0825 7.41751 21 12.25 21C14.6662 21 16.8537 20.0206 18.4372 18.4372Z" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input
            ref={inputRef}
            className="search-dropdown__input"
            type="text"
            placeholder="Поиск по Жанрам"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <button className="search-dropdown__close-btn" onClick={onClose} aria-label="Закрыть поиск">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <p className="search-dropdown__label">Часто ищут</p>

      <div className="search-dropdown__grid">
        {POPULAR.map(item => (
          <Link key={item.id} href="#" className="search-dropdown__card" onClick={onClose}>
            <div className="search-dropdown__card-img">
              <Image src={item.cover} alt={item.title} fill sizes="72px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="search-dropdown__card-info">
              <span className="search-dropdown__card-type">{item.type}</span>
              <span className="search-dropdown__card-title">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
