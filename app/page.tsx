import Header from '@/components/Header';
import MangaGrid from '@/components/MangaGrid';
import BookmarksCarousel from '@/components/BookmarksCarousel';
import UpdatesSection from '@/components/UpdatesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <MangaGrid />
        <BookmarksCarousel />
        <UpdatesSection />
      </main>
      <Footer />
    </>
  );
}
