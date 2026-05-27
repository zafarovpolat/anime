import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const MANGA_TITLES = [
  "Выбери меня!", "Я стала приёмной дочерью в семье убийц",
  "Леди-малышка изменяет мир деньгами", "Следуйте за своим сердцем",
  "Не подбирайте выброшенный мусор", "Таков закон",
  "Истинная красота", "Игрок падшего дворянского рода",
  "Я растерялась, когда оказалась женой зверолова", "План перерожденного наёмника",
  "Мир Зомби", "Присцилла просит о замужестве",
];

export default function MangaPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id) || 0;
  const title = MANGA_TITLES[id % MANGA_TITLES.length];
  const coverIdx = (id % 12) + 1;

  return (
    <>
      <Header />
      <main className="main">
        <section className="section">
          <div className="container manga-detail-container">
            <div className="manga-detail-cover">
              <img
                src={`/images/cover_${coverIdx}.jpg`}
                alt={title}
              />
            </div>
            <div className="manga-detail-info">
              <h1 className="section-title manga-detail-title">{title}</h1>
              <div className="manga-detail-badges">
                <span className="manga-detail-rating">
                  9.6
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.2091 1.01094L9.44445 3.49535C9.61092 3.83894 10.0578 4.16491 10.4345 4.23538L12.6687 4.6054C14.0969 4.84327 14.4298 5.88285 13.4047 6.92242L11.6611 8.6756C11.372 8.96633 11.2055 9.53898 11.3019 9.95305L11.8013 12.1203C12.1956 13.8294 11.2844 14.499 9.78617 13.6004L7.69214 12.3494C7.3154 12.1203 6.68458 12.1203 6.30783 12.3494L4.21381 13.6004C2.71558 14.4902 1.80439 13.8294 2.19866 12.1203L2.69808 9.95305C2.79445 9.54779 2.62798 8.97514 2.33885 8.6756L0.595308 6.92242C-0.429794 5.89165 -0.0968578 4.85208 1.33128 4.6054L3.56546 4.23538C3.94221 4.17372 4.38905 3.83894 4.55552 3.49535L5.7909 1.01094C6.44802 -0.336981 7.53446 -0.336981 8.2091 1.01094Z" fill="white"/></svg>
                </span>
                <span className="manga-detail-tag">Манхва</span>
                <span className="manga-detail-tag">Экшен</span>
              </div>
              <p className="manga-detail-description">
                Захватывающая история с неожиданными поворотами. Каждая глава наполнена динамичным действием,
                глубокими персонажами и интригующим сюжетом, который не отпускает до последней страницы.
              </p>
              <div className="manga-detail-actions">
                <button className="manga-detail-btn manga-detail-btn--primary">
                  Читать
                </button>
                <button className="manga-detail-btn manga-detail-btn--secondary">
                  В закладки
                </button>
              </div>
              <div className="manga-detail-chapters">
                <h3 className="manga-detail-chapters-title">Главы</h3>
                <div className="manga-detail-chapters-list">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Link href="#" key={i} className="manga-detail-chapter-item">
                      <span className="manga-detail-chapter-name">Том 5 Глава {194 - i}</span>
                      <span className="manga-detail-chapter-time">{i + 1} час назад</span>
                    </Link>
                  ))}
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
