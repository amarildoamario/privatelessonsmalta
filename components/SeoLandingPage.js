import Head from 'next/head'
import Link from 'next/link'

const siteUrl = 'https://privatelessonsmalta.com'
const whatsappUrl = "https://wa.me/393315263830?text=Hello%20Leonardo,%20I'm%20interested%20in%20private%20tutoring%20in%20Malta.%20I'd%20like%20to%20arrange%20a%20free%2020-minute%20consultation."

export default function SeoLandingPage({ page }) {
  const canonical = `${siteUrl}${page.path}`
  const title = `${page.title} | Leonardo Mori`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.description,
    provider: {
      '@type': 'Person',
      name: 'Leonardo Mori',
      url: siteUrl,
      telephone: '+39 331 526 3830',
      email: 'leonardomori23@gmail.com'
    },
    areaServed: page.areas.map((name) => ({ '@type': 'AdministrativeArea', name })),
    serviceType: page.serviceType
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={page.description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:image" content={`${siteUrl}/me_graduation.jpg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      <main>
        <section className="bg-white px-4 py-14 sm:py-20 border-b border-slate-100">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-center">
            <div>
              <Link href="/" className="text-sm font-semibold text-[#1B4332] hover:underline">Back to main site</Link>
              <p className="mt-8 text-xs uppercase tracking-widest text-teal-700 font-bold font-display">{page.eyebrow}</p>
              <h1 className="mt-3 max-w-3xl text-4xl sm:text-5xl font-extrabold leading-tight text-slate-950 font-display">{page.h1}</h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">{page.intro}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={whatsappUrl} className="inline-flex justify-center rounded-[5px] bg-[#1B4332] px-5 py-3 text-sm font-bold text-white hover:bg-[#153528] transition-colors">
                  Book a free consultation
                </a>
                <Link href="/#subjects" className="inline-flex justify-center rounded-[5px] border border-[#1B4332] bg-white px-5 py-3 text-sm font-bold text-[#1B4332] hover:bg-slate-50 transition-colors">
                  View all subjects
                </Link>
              </div>
            </div>

            <aside className="rounded-[5px] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 font-display">Lesson details</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-slate-900">Format</dt>
                  <dd className="mt-1 text-slate-600">{page.format}</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Level</dt>
                  <dd className="mt-1 text-slate-600">{page.level}</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Price</dt>
                  <dd className="mt-1 text-slate-600">EUR 20 per hour</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Areas</dt>
                  <dd className="mt-1 text-slate-600">{page.areas.join(', ')}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="px-4 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display">{page.sectionTitle}</h2>
              <div className="mt-5 space-y-5 text-slate-600 leading-relaxed">
                {page.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 font-display">Typical support</h2>
              <ul className="space-y-3">
                {page.bullets.map((item) => (
                  <li key={item} className="rounded-[5px] border border-slate-200 bg-white p-4 text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 px-4 py-12 text-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h2 className="text-2xl font-bold font-display">Need structured tutoring in Malta?</h2>
              <p className="mt-2 text-sm text-slate-300">Send a message with the subject, level, location, and exam goal.</p>
            </div>
            <a href={whatsappUrl} className="inline-flex justify-center rounded-[5px] bg-teal-600 px-5 py-3 text-sm font-bold text-white hover:bg-teal-500 transition-colors">
              Contact Leonardo
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
