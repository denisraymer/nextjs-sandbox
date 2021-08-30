import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { MainLayout } from '../../layouts';

export default function News() {
  return (
    <MainLayout pageTitle="All news">
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link href={'/news/qu346'}>
            <a className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href={'/news/21653'}>
            <a className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
        </div>
      </main>
    </MainLayout>
  );
}
