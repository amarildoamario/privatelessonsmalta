import Script from 'next/script'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google tag (gtag.js) for Google Ads */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16454895174"
      />
      <Script
        id="google-ads-gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16454895174');
          `
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
