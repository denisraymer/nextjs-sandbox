import styles from '../../styles/Home.module.scss';
import Link from 'next/link';
import { MainLayout } from '../../layouts';
import { IGetInitialProps, INewsContent } from '../../types';

interface INews {
  news: INewsContent;
}

export default function Post({news}: INews) {
  return (
    <MainLayout pageTitle="Name news">
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href={`/news`}>
            <a>&larr;</a>
          </Link>
          {news.title}
        </h1>

        <p className={styles.description}>
          {news.content}
          <code className={styles.code}>pages/{news.id}</code>
        </p>
      </main>
    </MainLayout>
  );
}

Post.getInitialProps = async ({query}: IGetInitialProps) => {
  const response = await fetch(`http://localhost:3200/news/${query.id}`);
  const news: INews = await response.json();

  return {news};
};
