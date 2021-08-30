import styles from '../../styles/Home.module.scss';
import { MainLayout } from '../../layouts';

export default function Post() {
  return (
    <MainLayout pageTitle="Name news">
      <main className={styles.main}>
        <h1 className={styles.title}>
          Post <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </MainLayout>
  );
}
