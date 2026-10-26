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

            // Conversion event for Visualizzazione di pagina
            gtag('event', 'conversion', {
              'send_to': 'AW-16454895174/0tiCCKyOnKodEMaMp6Y9',
              'value': 1.0,
              'currency': 'EUR'
            });

            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16454895174/0tiCCKyOnKodEMaMp6Y9',
                'value': 1.0,
                'currency': 'EUR',
                'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
