import { NextPageContext } from 'next';

export interface INewsContent {
  id: number;
  title: string;
  description: string;
  content: string;
}

export interface IGetInitialProps extends NextPageContext {
  query: {
    id: string;
  }
}
