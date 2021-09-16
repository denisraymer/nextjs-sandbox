import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { MainLayout } from '../../layouts';

export default function News({
  news
}) {
  return (
    <MainLayout pageTitle="All news">
      <main className={styles.main}>
        <div className={styles.grid}>
          {news.map(news => (
            <Link href={`/news/${news.id}`}>
              <a className={styles.card}>
                <h2>{news.title} &rarr;</h2>
                <p>{news.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </MainLayout>
  );
}

News.getInitialProps = async () => {
  const response = await fetch('http://localhost:3200/news');
  const news = await response.json();

  return { news };
};
