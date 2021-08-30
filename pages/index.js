import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { MainLayout } from '../layouts';

export default function Home() {
  return (
    <MainLayout pageTitle="Create Next App">
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href={'/news'}>
            <a className={styles.card}>
              <h2>All index</h2>
              <p>Other index of our publication</p>
            </a>
          </Link>
        </div>
      </main>
    </MainLayout>
  );
}
