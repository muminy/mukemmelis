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
          <meta charSet="utf-8" />
          <meta
            httpEquiv="x-ua-compatible"
            content="ie=edge"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
            integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
            crossOrigin="anonymous"
          ></link>
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
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
            integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
