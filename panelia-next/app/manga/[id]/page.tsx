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
          <div className="container" style={{ display: 'flex', gap: '40px', backgroundColor: 'white', borderRadius: '25px', padding: '30px' }}>
            <div style={{ flexShrink: 0, width: '300px' }}>
              <img
                src={`/images/cover_${coverIdx}.jpg`}
                alt={title}
                style={{ width: '100%', borderRadius: '20px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h1 className="section-title" style={{ marginBottom: '20px' }}>{title}</h1>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <span style={{
                  backgroundColor: '#45B346',
                  color: 'white',
                  padding: '8px 14px',
                  borderRadius: '15px',
                  fontSize: '15px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  9.6
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.2091 1.01094L9.44445 3.49535C9.61092 3.83894 10.0578 4.16491 10.4345 4.23538L12.6687 4.6054C14.0969 4.84327 14.4298 5.88285 13.4047 6.92242L11.6611 8.6756C11.372 8.96633 11.2055 9.53898 11.3019 9.95305L11.8013 12.1203C12.1956 13.8294 11.2844 14.499 9.78617 13.6004L7.69214 12.3494C7.3154 12.1203 6.68458 12.1203 6.30783 12.3494L4.21381 13.6004C2.71558 14.4902 1.80439 13.8294 2.19866 12.1203L2.69808 9.95305C2.79445 9.54779 2.62798 8.97514 2.33885 8.6756L0.595308 6.92242C-0.429794 5.89165 -0.0968578 4.85208 1.33128 4.6054L3.56546 4.23538C3.94221 4.17372 4.38905 3.83894 4.55552 3.49535L5.7909 1.01094C6.44802 -0.336981 7.53446 -0.336981 8.2091 1.01094Z" fill="white"/></svg>
                </span>
                <span style={{
                  backgroundColor: '#F4F7FB',
                  padding: '8px 14px',
                  borderRadius: '15px',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  Манхва
                </span>
                <span style={{
                  backgroundColor: '#F4F7FB',
                  padding: '8px 14px',
                  borderRadius: '15px',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  Экшен
                </span>
              </div>
              <p style={{ color: '#97989B', fontSize: '15px', lineHeight: '1.7', marginBottom: '30px' }}>
                Захватывающая история с неожиданными поворотами. Каждая глава наполнена динамичным действием, 
                глубокими персонажами и интригующим сюжетом, который не отпускает до последней страницы.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{
                  backgroundColor: '#562CF0',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                }}>
                  Читать
                </button>
                <button style={{
                  backgroundColor: '#F4F7FB',
                  color: '#000',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                }}>
                  В закладки
                </button>
              </div>
              <div style={{ marginTop: '40px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '15px' }}>Главы</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Link
                      href="#"
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '14px 20px',
                        backgroundColor: '#F4F7FB',
                        borderRadius: '15px',
                        fontSize: '15px',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>Том 5 Глава {194 - i}</span>
                      <span style={{ color: '#97989B' }}>{i + 1} час назад</span>
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
