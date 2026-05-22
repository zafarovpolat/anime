# Panelia — Next.js

Манга-ридер Panelia, переписанный на Next.js (App Router) + TypeScript.

## Запуск

```bash
cd panelia-next
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Структура

```
panelia-next/
├── app/
│   ├── layout.tsx          # Корневой layout (метаданные, шрифты)
│   ├── page.tsx            # Главная страница
│   ├── globals.css         # Глобальные стили
│   ├── catalog/page.tsx    # Каталог
│   ├── popular/page.tsx    # Популярное
│   ├── bookmarks/page.tsx  # Закладки
│   ├── manga/[id]/page.tsx # Страница манги
│   ├── offer/page.tsx      # Оферта
│   ├── privacy/page.tsx    # Политика конфиденциальности
│   └── terms/page.tsx      # Пользовательское соглашение
├── components/
│   ├── Header.tsx          # Шапка с навигацией
│   ├── MangaGrid.tsx       # Грид карточек манги
│   ├── BookmarksCarousel.tsx # Карусель закладок
│   ├── UpdatesSection.tsx  # Секция обновлений
│   └── Footer.tsx          # Подвал
├── public/
│   ├── fonts/              # Шрифты (Golos, SONGER)
│   └── images/             # Обложки, логотип
├── package.json
├── tsconfig.json
└── next.config.js
```

## Функциональность

- ✅ Все ссылки кликабельны (навигация, карточки, футер)
- ✅ Карусель закладок с кнопками вперёд/назад
- ✅ Переключатель "Только мои закладки"
- ✅ Кнопка "Показать ещё" в обновлениях
- ✅ Страница манги с описанием и главами
- ✅ Все страницы из навигации доступны
- ✅ Полностью сохранён оригинальный дизайн
