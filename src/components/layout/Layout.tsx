import Head from 'next/head';
import React, { ReactNode } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import PageProgressBar from '../page/PageProgressBar';

type LayoutProps = {
  children: ReactNode;
  title?: string;
} & React.ComponentPropsWithRef<'div'>;

const Layout: React.FC<LayoutProps> = props => {
  return (
    <>
      <Head>
        <title>{props.title ?? 'Andy - Software Engineer'}</title>
      </Head>
      <PageProgressBar />

      <div
        id="root"
        className="h-full w-full bg-crack dark:bg-xiketic text-grek-tasty dark:text-white transition-all"
      >
        <div className="container mx-auto flex flex-col">
          <Navbar />
          {props.children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
