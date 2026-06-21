import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PopularPage() {
  const titles = [
    "Таков закон", "Истинная красота", "Игрок падшего дворянского рода",
    "Я растерялась, когда оказалась женой зверолова", "План перерожденного наёмника",
    "Мир Зомби", "Присцилла просит о замужестве", "Выбери меня!",
    "Леди-малышка изменяет мир деньгами", "Следуйте за своим сердцем",
    "Наномашины", "Истинная красота", "Следуйте за своим сердцем",
    "Гений-мошенник", "Клинок, рассекающий демонов",
  ];

  return (
    <>
      <Header />
      <main className="main">
        <section className="section manga-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">Популярное</h1>
            </div>
            <div className="manga-grid">
              {titles.map((title, i) => (
                <Link href={`/manga/${i}`} key={i} className="manga-card">
                  <div className="manga-card__image-wrapper">
                    <img src={`/images/cover_${(i % 12) + 1}.jpg`} alt={title} loading="lazy" />
                    <div className="rating-badge">
                      9.8
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.2091 1.01094L9.44445 3.49535C9.61092 3.83894 10.0578 4.16491 10.4345 4.23538L12.6687 4.6054C14.0969 4.84327 14.4298 5.88285 13.4047 6.92242L11.6611 8.6756C11.372 8.96633 11.2055 9.53898 11.3019 9.95305L11.8013 12.1203C12.1956 13.8294 11.2844 14.499 9.78617 13.6004L7.69214 12.3494C7.3154 12.1203 6.68458 12.1203 6.30783 12.3494L4.21381 13.6004C2.71558 14.4902 1.80439 13.8294 2.19866 12.1203L2.69808 9.95305C2.79445 9.54779 2.62798 8.97514 2.33885 8.6756L0.595308 6.92242C-0.429794 5.89165 -0.0968578 4.85208 1.33128 4.6054L3.56546 4.23538C3.94221 4.17372 4.38905 3.83894 4.55552 3.49535L5.7909 1.01094C6.44802 -0.336981 7.53446 -0.336981 8.2091 1.01094Z" fill="white"/></svg>
                    </div>
                  </div>
                  <div className="manga-card__info">
                    <h3 className="manga-card__title">{title}</h3>
                    <span className="manga-card__genre">Манхва, экшен</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
