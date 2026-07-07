import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

const siteUrl = 'https://privatelessonsmalta.com'
const whatsappNumber = "393315263830"
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Leonardo,%20I'm%20interested%20in%20private%20tutoring%20in%20Malta.%20I'd%20like%20to%20arrange%20a%20free%2020-minute%20consultation.`

const servicePages = [
  { href: '/private-lessons-malta', label: 'Private Lessons Malta' },
  { href: '/maths-tutor-malta', label: 'Maths Tutor Malta' },
  { href: '/italian-lessons-malta', label: 'Italian Lessons Malta' },
  { href: '/chemistry-tutor-malta', label: 'Chemistry Tutor Malta' },
  { href: '/physics-tutor-malta', label: 'Physics Tutor Malta' }
]

export default function SeoLandingPage({ page }) {
  const canonical = `${siteUrl}${page.path}`
  const title = `${page.title} | Leonardo Mori`

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to add header styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

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
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans scroll-smooth">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={page.description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:image" content={`${siteUrl}/me_graduation.jpg`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={page.description} />
        <meta name="twitter:image" content={`${siteUrl}/me_graduation.jpg`} />

        <link rel="icon" href="/me_graduation.jpg" />
        {/* Import premium font families */}
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          body { background: #f8fafc !important; }
          html { scroll-behavior: smooth; }
          .font-sans { font-family: 'Plus Jakarta Sans', sans-serif !important; }
          .font-display { font-family: 'Outfit', sans-serif !important; }
          .font-serif { font-family: 'Playfair Display', Georgia, serif !important; }
        ` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </Head>

      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#1B4332]/20 shadow-sm flex-shrink-0">
              <img 
                src="/me_graduation.jpg" 
                alt="Leonardo Mori - Professional Science and Italian Private Tutor in Malta" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 leading-tight group-hover:text-[#1B4332] transition-colors font-display">Leonardo Mori</span>
              <span className="text-xs text-slate-500 font-medium">Private Tutor</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <Link href="/#home" className="hover:text-[#1B4332] transition-colors">Home</Link>
            <Link href="/#subjects" className="hover:text-[#1B4332] transition-colors">Subjects</Link>
            <Link href="/#about" className="hover:text-[#1B4332] transition-colors">About & CV</Link>
            <Link href="/#pricing" className="hover:text-[#1B4332] transition-colors">Pricing</Link>
            <Link href="/#contact" className="hover:text-[#1B4332] transition-colors">Contact</Link>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#1B4332] hover:bg-[#153528] text-white font-bold rounded-[5px] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-xs h-10 flex-shrink-0"
              title="Book via WhatsApp"
              aria-label="Book via WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48-.002 9.935-4.494 9.938-9.938.002-2.638-1.024-5.117-2.884-6.98C16.46 1.826 13.985.801 11.353.8h-.006c-5.482 0-9.94 4.487-9.943 9.933-.001 1.912.493 3.78 1.428 5.405l-.951 3.474 3.567-.936zm11.367-7.395c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.484-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.2-.24-.58-.5-.5-.67-.512-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.1 3.2 5.08 4.495.71.308 1.262.493 1.694.63.71.226 1.358.194 1.87.118.571-.085 1.77-.724 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.15-.275-.25-.575-.4z"/>
              </svg>
              <span>Book via WhatsApp</span>
            </a>
          </nav>

          {/* Burger Button (Mobile) */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-[5px] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#1B4332] transition-colors z-50"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-5 relative flex items-center justify-center">
              <span className={`absolute h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
              <span className={`absolute h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`absolute h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}>
        <div 
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl flex flex-col p-8 transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
            <span className="font-bold text-slate-800 text-lg font-display">Navigation</span>
          </div>
          <nav className="flex flex-col gap-6 text-lg font-medium text-slate-700">
            <Link href="/#home" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>🏠</span> <span>Home</span>
            </Link>
            <Link href="/#subjects" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>📚</span> <span>Subjects</span>
            </Link>
            <Link href="/#about" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>👨‍🏫</span> <span>About & CV</span>
            </Link>
            <Link href="/#pricing" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>💰</span> <span>Pricing</span>
            </Link>
            <Link href="/#contact" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>📞</span> <span>Contact</span>
            </Link>
            <hr className="my-2 border-slate-100" />
            <Link href="/cv" onClick={closeMenu} className="text-[#1B4332] hover:underline py-1 transition-colors flex items-center justify-between">
              <span className="flex items-center gap-2.5">
                <span>📄</span> <span>View Academic CV</span>
              </span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </nav>
          <div className="mt-auto pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-400 text-center font-medium">In-person tutoring exclusively in Malta</p>
          </div>
        </div>
      </div>

      <main className="pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="bg-white px-4 py-8 sm:py-12 border-b border-slate-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 md:gap-12 items-start">
            
            <div className="flex flex-col items-start">
              {/* Back to Home link */}
              <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B4332] hover:underline mb-6 font-display">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back to Homepage</span>
              </Link>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] bg-[#eef5f1] text-[#1B4332] text-[10px] font-bold uppercase tracking-wider mb-4 font-display">
                {page.eyebrow}
              </span>
              
              <h1 className="max-w-3xl font-display text-[34px] sm:text-[44px] lg:text-[48px] text-slate-955 font-extrabold leading-tight mb-5">
                {page.h1}
              </h1>
              
              <p className="max-w-2xl text-sm sm:text-base lg:text-[16px] text-slate-650 leading-relaxed mb-6 font-normal">
                {page.intro}
              </p>
              
              <div className="flex flex-row gap-3 items-center w-full sm:w-auto">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#1B4332] hover:bg-[#153528] text-white font-bold rounded-[5px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all text-xs sm:text-sm h-11"
                  title="Book free consultation"
                  aria-label="Book free consultation"
                >
                  <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48-.002 9.935-4.494 9.938-9.938.002-2.638-1.024-5.117-2.884-6.98C16.46 1.826 13.985.801 11.353.8h-.006c-5.482 0-9.94 4.487-9.943 9.933-.001 1.912.493 3.78 1.428 5.405l-.951 3.474 3.567-.936zm11.367-7.395c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.484-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.2-.24-.58-.5-.5-.67-.512-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.1 3.2 5.08 4.495.71.308 1.262.493 1.694.63.71.226 1.358.194 1.87.118.571-.085 1.77-.724 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.15-.275-.25-.575-.4z"/>
                  </svg>
                  <span>Book Consult</span>
                </a>
                <Link 
                  href="/#subjects" 
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-850 border border-[#1B4332] font-bold rounded-[5px] shadow-sm hover:-translate-y-0.5 transition-all text-xs sm:text-sm h-11 text-center font-display"
                >
                  All Subjects
                </Link>
              </div>
            </div>

            {/* Sidebar Details Card */}
            <aside className="w-full bg-white rounded-[5px] p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#1B4332]"></div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B4332] font-display mb-4">Lesson Details</h3>
              <dl className="space-y-4 text-xs sm:text-sm">
                <div>
                  <dt className="font-bold text-slate-900 font-display">Format</dt>
                  <dd className="mt-1 text-slate-600 flex items-center gap-2">
                    <span className="text-[#1B4332] text-sm">📍</span> {page.format}
                  </dd>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <dt className="font-bold text-slate-900 font-display">Target Level</dt>
                  <dd className="mt-1 text-slate-600 flex items-center gap-2">
                    <span className="text-[#1B4332] text-sm">🎓</span> {page.level}
                  </dd>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <dt className="font-bold text-slate-900 font-display">Tutoring Price</dt>
                  <dd className="mt-1 text-slate-600 flex items-center gap-2">
                    <span className="text-[#1B4332] text-sm">💰</span> EUR 20 per hour
                  </dd>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <dt className="font-bold text-slate-900 font-display">Serviced Areas</dt>
                  <dd className="mt-1 text-slate-600 flex items-start gap-2 flex-wrap">
                    <span className="text-[#1B4332] text-sm mt-0.5">🚗</span>
                    <span className="leading-relaxed flex-1">{page.areas.join(', ')}</span>
                  </dd>
                </div>
              </dl>
            </aside>

          </div>
        </section>

        {/* Content Details section */}
        <section className="px-4 py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
            
            {/* Body text block */}
            <div className="bg-white rounded-[5px] border border-slate-100 shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mb-6 border-b border-slate-100 pb-3">
                {page.sectionTitle}
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-sm sm:text-base">
                {page.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Support List Bullets */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1B4332] font-display">Typical Support</h3>
              <ul className="space-y-3">
                {page.bullets.map((item, index) => (
                  <li key={index} className="rounded-[5px] border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm hover:shadow-md transition-all flex gap-3">
                    <svg className="w-5 h-5 text-[#1B4332] bg-[#eef5f1] rounded-full p-0.5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Contact / CTA section */}
        <section id="contact" className="py-12 sm:py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest text-[#1B4332] font-bold mb-3 block font-display">Arrange a Session</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6">Start Learning Today</h2>
            <div className="bg-slate-50 rounded-[5px] p-6 sm:p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#1B4332]"></div>
              
              <div className="flex flex-col items-center mb-6 text-center">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#1B4332]/20 shadow-sm mb-3">
                  <img 
                    src="/me_graduation.jpg" 
                    alt="Leonardo Mori - Private Tutor Malta" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="font-display text-base text-slate-900 font-bold block">Leonardo Mori</span>
                <p className="text-xs text-slate-400 font-medium font-display">In-Person Tutoring • Malta</p>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1B4332] hover:bg-[#153528] text-white font-bold rounded-[5px] shadow-sm hover:shadow-md transition-all text-sm h-12 font-display"
                >
                  <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48-.002 9.935-4.494 9.938-9.938.002-2.638-1.024-5.117-2.884-6.98C16.46 1.826 13.985.801 11.353.8h-.006c-5.482 0-9.94 4.487-9.943 9.933-.001 1.912.493 3.78 1.428 5.405l-.951 3.474 3.567-.936zm11.367-7.395c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.484-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.2-.24-.58-.5-.5-.67-.512-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.1 3.2 5.08 4.495.71.308 1.262.493 1.694.63.71.226 1.358.194 1.87.118.571-.085 1.77-.724 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.15-.275-.25-.575-.4z"/>
                  </svg>
                  Book via WhatsApp
                </a>
                
                <a 
                  href="mailto:leonardomori23@gmail.com" 
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-[5px] shadow-sm hover:shadow-md transition-all text-sm h-12 font-display"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Leonardo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <span className="font-bold text-white block font-display">Leonardo Mori</span>
            <span className="text-xs text-slate-500">© {new Date().getFullYear()} Private Science & Italian Tutor. Malta.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-display">
            {servicePages.slice(0, 3).map((sp) => (
              <Link key={sp.href} href={sp.href} className="hover:text-white transition-colors font-medium">{sp.label}</Link>
            ))}
            <Link href="/cv" className="hover:text-white transition-colors font-medium">Academic CV</Link>
            <a href="mailto:leonardomori23@gmail.com" className="hover:text-white transition-colors font-medium">Email</a>
            <a href={whatsappUrl} className="hover:text-white transition-colors font-medium">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center md:bottom-8 md:right-8"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48-.002 9.935-4.494 9.938-9.938.002-2.638-1.024-5.117-2.884-6.98C16.46 1.826 13.985.801 11.353.8h-.006c-5.482 0-9.94 4.487-9.943 9.933-.001 1.912.493 3.78 1.428 5.405l-.951 3.474 3.567-.936zm11.367-7.395c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.484-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.2-.24-.58-.5-.5-.67-.512-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.1 3.2 5.08 4.495.71.308 1.262.493 1.694.63.71.226 1.358.194 1.87.118.571-.085 1.77-.724 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.15-.275-.25-.575-.4z"/>
        </svg>
      </a>
    </div>
  )
}
