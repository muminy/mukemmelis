import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(
      ctx,
    );
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <link
            rel="dns-prefetch"
            href="https://fonts.googleapis.com/"
          />
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          <meta
            httpEquiv="x-ua-compatible"
            content="ie=edge"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta name="description" content="Kişisel blog" />
          <meta
            property="og:url"
            content="https://puuwto.com"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Puuwto" />
          <meta
            property="og:description"
            content="Kişisel blog"
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content="https://puuwto.com"
          />
          <meta name="twitter:title" content="Puuwto" />
          <meta
            name="twitter:description"
            content="Kişisel blog"
          />
          <meta name="theme-color" content="#000000" />
          <meta name="application-name" content="Puuwto" />
          <meta
            name="apple-mobile-web-app-capable"
            content="yes"
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json"></link>
          <meta
            name="apple-mobile-web-app-title"
            content="Puuwto"
          />
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
