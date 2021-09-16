import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { MainLayout } from '../layouts';

export default function NotFound() {
  return (
    <MainLayout pageTitle="404 not found">
      <main className={styles.main}>
        <h1 className={styles.title}>
          404 <Link href="/"><a>Go back</a></Link>
        </h1>
      </main>
    </MainLayout>
  );
}
