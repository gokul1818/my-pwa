import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <meta name="description" content="My awesome Progressive Web App!" />
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
