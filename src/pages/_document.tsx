import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Jost-VariableFont_wght.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta name="theme-color" content="#ffffff" />
          {/* Main Meta Tags */}
          <meta name="title" content="RiceCX - Software Developer" />
          <meta
            name="description"
            content="16 y/o Full-stack software developer with over 6 years of experience. Interested in building scalable backends and marvelous APIs."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ricecx.cc/" />
          <meta property="og:title" content="RiceCX - Software Developer" />
          <meta
            property="og:description"
            content="16 y/o Full-stack software developer with over 6 years of experience. Interested in building scalable backends and marvelous APIs."
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ricecx.cc/" />
          <meta
            property="twitter:title"
            content="RiceCX - Software Developer"
          />
          <meta
            property="twitter:description"
            content="16 y/o Full-stack software developer with over 6 years of experience. Interested in building scalable backends and marvelous APIs."
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
