import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const siteUrl = 'https://privatelessonsmalta.com'
  const profileImageUrl = `${siteUrl}/me_graduation.jpg`
  const servicePages = [
    { href: '/private-lessons-malta', label: 'Private Lessons Malta' },
    { href: '/maths-tutor-malta', label: 'Maths Tutor Malta' },
    { href: '/italian-lessons-malta', label: 'Italian Lessons Malta' },
    { href: '/chemistry-tutor-malta', label: 'Chemistry Tutor Malta' },
    { href: '/physics-tutor-malta', label: 'Physics Tutor Malta' }
  ]
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

  const whatsappNumber = "393315263830"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Leonardo,%20I'm%20interested%20in%20in-person%20private%20tutoring%20for%20scientific%20subjects%20or%20Italian%20in%20Malta.%20I'd%20like%20to%20arrange%20a%20free%2020-minute%20consultation.`

  // JSON-LD structured schema for local SEO optimization in Malta
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Tutor",
    "name": "Leonardo Mori",
    "url": siteUrl,
    "image": profileImageUrl,
    "description": "Expert in-person one-to-one private tutor in Malta offering Mathematics, Geometry, and Italian lessons, as well as Chemistry and Physics support for MATSEC SEC, O-Level, A-Level, and University preparation.",
    "telephone": "+39 331 526 3830",
    "email": "leonardomori23@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birkirkara",
      "addressCountry": "Malta"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.8972",
      "longitude": "14.4611"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Birkirkara" },
      { "@type": "AdministrativeArea", "name": "Sliema" },
      { "@type": "AdministrativeArea", "name": "St. Julian's" },
      { "@type": "AdministrativeArea", "name": "Msida" },
      { "@type": "AdministrativeArea", "name": "Valletta" },
      { "@type": "AdministrativeArea", "name": "Gzira" },
      { "@type": "AdministrativeArea", "name": "San Gwann" },
      { "@type": "AdministrativeArea", "name": "Swieqi" },
      { "@type": "AdministrativeArea", "name": "St. Paul's Bay" }
    ],
    "knowsAbout": [
      "Mathematics",
      "Italian Language",
      "Geometry",
      "Chemistry",
      "Organic Chemistry",
      "Analytical Chemistry",
      "Physics"
    ],
    "priceRange": "€20",
    "offers": {
      "@type": "Offer",
      "price": "20.00",
      "priceCurrency": "EUR",
      "unitText": "hour"
    },
    "provider": {
      "@type": "Person",
      "name": "Leonardo Mori",
      "jobTitle": "Private Tutor",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Florence"
      }
    }
  }

  // FAQ Schema for Rich Snippets in SERPs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which tutoring subjects do you offer in Malta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer specialized one-to-one tutoring in Chemistry (Secondary, O-Level, A-Level, and University modules), Physics (Secondary, O-Level, and A-Level), Mathematics (Secondary, O-Level, and A-Level), Geometry, and Italian (Secondary, O-Level, A-Level, and Conversational)."
        }
      },
      {
        "@type": "Question",
        "name": "Where do the tutoring lessons take place?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lessons can take place in-person at the student's home across Malta (covering Birkirkara, Sliema, St. Julian's, Msida, Valletta, and neighboring areas), at public libraries, or online depending on your preference."
        }
      },
      {
        "@type": "Question",
        "name": "What are your tutoring rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One-to-one private tutoring is €20 per hour. There are no fixed contracts or upfront commitments. You pay per lesson as you go."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a trial or introductory consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I offer a free 20-minute introductory meeting (online or by call) to discuss your curriculum goals, evaluate difficulty areas, and structure our tutoring approach."
        }
      },
      {
        "@type": "Question",
        "name": "Are the lessons conducted in English or Italian?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lessons can be conducted in English, Italian, or bilingually. This helps students feel comfortable while mastering scientific terminology in the language of their curriculum."
        }
      }
    ]
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans scroll-smooth">
      <Head>
        <title>Private Lessons Malta | Maths, Italian & Science Tutor | Leonardo Mori</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Private lessons in Malta for Mathematics & Italian (Birkirkara, Sliema, St. Julian's, Msida). Expert in-person one-to-one tutoring. Chemistry & Physics support also available." />
        <meta name="keywords" content="Maths tutor Malta, Mathematics lessons Malta, Italian tutor Malta, Italian lessons Malta, private lessons Malta, O-Level tutor Malta, A-Level Mathematics Malta, MATSEC preparation, Leonardo Mori" />
        
        {/* Canonical link */}
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:title" content="Private Lessons Malta | Maths, Italian & Science Tutor | Leonardo Mori" />
        <meta property="og:description" content="Private lessons in Malta for Mathematics & Italian. Expert in-person one-to-one tutoring. Chemistry & Physics support also available." />
        <meta property="og:image" content={profileImageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${siteUrl}/`} />
        <meta name="twitter:title" content="Private Lessons Malta | Maths, Italian & Science Tutor | Leonardo Mori" />
        <meta name="twitter:description" content="Private lessons in Malta for Mathematics & Italian. Expert in-person one-to-one tutoring. Chemistry & Physics support also available." />
        <meta name="twitter:image" content={profileImageUrl} />

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
        {/* SEO Structured Data Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* FAQ Structured Data Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#home" className="flex items-center gap-2 group">
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
            <Link href="#home" className="hover:text-[#1B4332] transition-colors">Home</Link>
            <Link href="#subjects" className="hover:text-[#1B4332] transition-colors">Subjects</Link>
            <Link href="#about" className="hover:text-[#1B4332] transition-colors">About & CV</Link>
            <Link href="#pricing" className="hover:text-[#1B4332] transition-colors">Pricing</Link>
            <Link href="#contact" className="hover:text-[#1B4332] transition-colors">Contact</Link>
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
            <Link href="#home" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>🏠</span> <span>Home</span>
            </Link>
            <Link href="#subjects" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>📚</span> <span>Subjects</span>
            </Link>
            <Link href="#about" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>👨‍🏫</span> <span>About & CV</span>
            </Link>
            <Link href="#pricing" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
              <span>💰</span> <span>Pricing</span>
            </Link>
            <Link href="#contact" onClick={closeMenu} className="hover:text-[#1B4332] py-1 transition-colors flex items-center gap-2.5">
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

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-20 px-4 bg-white relative overflow-hidden">


        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center relative z-10">
          {/* Text Column — wider on desktop for breathing room */}
          <div className="md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] bg-[#eef5f1] text-[#1B4332] text-[10px] font-bold uppercase tracking-wider mb-4">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.06 9.06 0 017 16.24v-3.774l1.394.598a3 3 0 002.212 0l1.394-.598v3.774a9.06 9.06 0 01-2.69 3.332zm6.2-.284a1 1 0 01-.89.89 8.976 8.976 0 01-1.05.174v-4.102l1.69-.723a11.112 11.112 0 01.25 3.761z" />
              </svg>
              <span className="inline-flex items-center gap-1">
                Private Tutor in Malta
                <svg className="w-3.5 h-2.5 rounded-[1px] shadow-sm flex-shrink-0" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
                  <rect width="4.5" height="6" fill="#FFFFFF" />
                  <rect x="4.5" width="4.5" height="6" fill="#CF142B" />
                  <path d="M 1.8 1 L 2.2 1 L 2.2 1.8 L 3 1.8 L 3 2.2 L 2.2 2.2 L 2.2 3 L 1.8 3 L 1.8 2.2 L 1 2.2 L 1 1.8 L 1.8 1.8 Z" fill="#7F7F7F" />
                </svg>
              </span>
            </span>
            
            <h1 className="max-w-2xl font-display text-[38px] sm:text-[48px] lg:text-[60px] xl:text-[66px] text-slate-950 font-extrabold leading-[1.02] mb-5 lg:mb-7 text-center md:text-left">
              <span className="block text-[0.68em] font-semibold text-slate-600 mb-1 lg:mb-2">Private Lessons Malta</span>
              <span className="block text-[#1B4332]">Maths & Italian</span>
              <span className="block text-slate-500 text-[0.7em] font-medium mt-2">Chemistry & Physics Support</span>
            </h1>
            
            <p className="max-w-[330px] sm:max-w-none lg:max-w-lg text-sm sm:text-base lg:text-[17px] text-slate-800 font-semibold leading-relaxed mb-3 text-center md:text-left font-display">
              Personalised lessons. Real results.<br className="sm:hidden" /> Lasting confidence.
            </p>

            <p className="text-sm sm:text-[15px] lg:text-base text-slate-600 leading-relaxed mb-5 lg:mb-7 max-w-[340px] sm:max-w-xl lg:max-w-lg font-normal text-center md:text-left">
              I help secondary school, A-Level and university students across Malta understand complex topics, improve grades and achieve their goals through structured, patient and effective one-to-one tutoring.
            </p>
            
            <ul className="space-y-2.5 lg:space-y-3 mb-7 lg:mb-9 w-full">
              {[
                "One-to-one in-person or online lessons",
                "MATSEC, O-Level, A-Level & University support",
                "Lessons in English & Italian",
                "Over 10 years of tutoring experience"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center justify-center md:justify-start gap-2.5 text-slate-700 text-sm lg:text-[15px] font-medium">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#1B4332] bg-[#eef5f1] rounded-full p-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-row gap-3 justify-center items-center mb-6 w-full max-w-[360px] sm:max-w-xl">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex w-1/2 sm:w-auto items-center justify-center gap-1.5 px-2.5 sm:px-5 lg:px-7 py-2.5 lg:py-3 bg-[#1B4332] hover:bg-[#153528] text-white font-bold rounded-[5px] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all text-xs sm:text-sm lg:text-[15px] h-11 lg:h-12"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48-.002 9.935-4.494 9.938-9.938.002-2.638-1.024-5.117-2.884-6.98C16.46 1.826 13.985.801 11.353.8h-.006c-5.482 0-9.94 4.487-9.943 9.933-.001 1.912.493 3.78 1.428 5.405l-.951 3.474 3.567-.936zm11.367-7.395c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.484-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.2-.24-.58-.5-.5-.67-.512-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.1 3.2 5.08 4.495.71.308 1.262.493 1.694.63.71.226 1.358.194 1.87.118.571-.085 1.77-.724 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.15-.275-.25-.575-.4z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              
              <Link 
                href="#subjects" 
                className="inline-flex w-1/2 sm:w-auto items-center justify-center px-2.5 sm:px-5 lg:px-7 py-2.5 lg:py-3 bg-white hover:bg-slate-50 text-slate-800 border border-[#1B4332] font-bold rounded-[5px] shadow-sm hover:-translate-y-0.5 transition-all text-xs sm:text-sm lg:text-[15px] h-11 lg:h-12"
              >
                View Subjects
              </Link>
            </div>

          </div>
          
          {/* Image Column — simple photo with border radius 5px and no other effects */}
          <div className="md:col-span-5 relative flex flex-col items-center md:items-end mt-8 md:mt-0">
            <div className="relative w-full max-w-[420px] lg:max-w-[440px]">
              <div className="w-full h-[320px] sm:h-[390px] md:h-[480px] lg:h-[560px] overflow-hidden rounded-[5px] relative">
                <img 
                  src="/me_graduation.jpg" 
                  alt="Leonardo Mori - Professional Private Tutor in Malta" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Support Bar */}
        <div className="max-w-6xl mx-auto mt-12 lg:mt-20 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2.5 text-xs justify-start relative z-10">
          <span className="text-slate-500 font-bold font-display uppercase tracking-wider mr-1.5">Support for:</span>
          {["MATSEC", "O-LEVEL", "A-LEVEL", "IB", "IGCSE", "UNIVERSITY"].map((badge) => (
            <span key={badge} className="px-3 py-1.5 bg-slate-50 hover:bg-[#eef5f1] text-slate-700 hover:text-[#1B4332] rounded-[5px] border border-slate-100 font-semibold tracking-wide uppercase transition-colors duration-200">
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* Features Block */}
      <section className="py-12 bg-white border-y border-slate-100 relative">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-50 border border-slate-100 rounded-[5px] p-4 flex flex-col items-center text-center sm:items-start sm:text-left gap-3 hover:shadow-md hover:border-slate-200 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#eef5f1] text-[#1B4332] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="7" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base mb-1">Personalised Approach</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Every lesson is tailored to your goals, level and learning style.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-50 border border-slate-100 rounded-[5px] p-4 flex flex-col items-center text-center sm:items-start sm:text-left gap-3 hover:shadow-md hover:border-slate-200 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#eef5f1] text-[#1B4332] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base mb-1">Exam Preparation</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Past papers, targeted revision and exam techniques.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-50 border border-slate-100 rounded-[5px] p-4 flex flex-col items-center text-center sm:items-start sm:text-left gap-3 hover:shadow-md hover:border-slate-200 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#eef5f1] text-[#1B4332] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base mb-1">Proven Results</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Improved understanding, confidence and grades.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-slate-50 border border-slate-100 rounded-[5px] p-4 flex flex-col items-center text-center sm:items-start sm:text-left gap-3 hover:shadow-md hover:border-slate-200 transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#eef5f1] text-[#1B4332] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base mb-1">Flexible & Convenient</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Choose between in-person lessons in Malta or online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#1B4332] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 text-center divide-y divide-white/10 md:divide-y-0 md:divide-x divide-white/10">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center p-2">
            <div className="text-emerald-400 mb-2">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm0 0v6" />
              </svg>
            </div>
            <span className="text-2xl font-bold font-display text-white">10+</span>
            <span className="text-xs text-slate-300 font-medium mt-0.5">Years of Experience</span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <div className="text-emerald-400 mb-2">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold font-display text-white">100+</span>
            <span className="text-xs text-slate-300 font-medium mt-0.5">Students Helped</span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <div className="text-emerald-400 mb-2">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <span className="text-2xl font-bold font-display text-white">5.0</span>
            <span className="text-xs text-slate-300 font-medium mt-0.5">Average Rating</span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
            <div className="text-emerald-400 mb-2">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold font-display text-white">Malta</span>
            <span className="text-xs text-slate-300 font-medium mt-0.5">In-Person & Online</span>
          </div>
        </div>
      </section>

      {/* Subjects & Curriculum Section */}
      <section id="subjects" className="py-12 sm:py-20 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-teal-600 font-bold mb-3 font-display block">Core Specialisations</span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 mb-4">Subjects Covered</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Personalised one-to-one tutoring designed to build strong foundations, clear up misconceptions, and ensure excellent academic results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
            {/* Mathematics Card */}
            <div className="group bg-slate-50 hover:bg-slate-900 hover:text-white rounded-[5px] p-5 sm:p-6 border border-slate-100 hover:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">➗</div>
                <h4 className="text-lg font-bold mb-2 font-display">Mathematics</h4>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed mb-4">
                  Algebraic equations, functions, trigonometry, basic calculus, and logic structures. Tailored practice to overcome maths anxiety.
                </p>
              </div>
              <div className="text-xs font-semibold text-teal-600 group-hover:text-teal-300 tracking-wider uppercase mt-4 font-display">
                Secondary • O-Level • A-Level
              </div>
            </div>

            {/* Italian Card */}
            <div className="group bg-slate-50 hover:bg-slate-900 hover:text-white rounded-[5px] p-5 sm:p-6 border border-slate-100 hover:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🇮🇹</div>
                <h4 className="text-lg font-bold mb-2 font-display">Italian</h4>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed mb-4">
                  Grammar, composition, conversation, and oral preparation. Tailored support for Maltese SEC (O-Level) and A-Level Italian school curricula.
                </p>
              </div>
              <div className="text-xs font-semibold text-teal-600 group-hover:text-teal-300 tracking-wider uppercase mt-4 font-display">
                Secondary • O-Level • A-Level • Conversational
              </div>
            </div>

            {/* Geometry Card */}
            <div className="group bg-slate-50 hover:bg-slate-900 hover:text-white rounded-[5px] p-5 sm:p-6 border border-slate-100 hover:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">📐</div>
                <h4 className="text-lg font-bold mb-2 font-display">Geometry</h4>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed mb-4">
                  Euclidean proofs, coordinate systems, area/volume formulas, and spatial shapes analysis. Visualizing problems step-by-step.
                </p>
              </div>
              <div className="text-xs font-semibold text-teal-600 group-hover:text-teal-300 tracking-wider uppercase mt-4 font-display">
                Secondary • O-Level • A-Level
              </div>
            </div>

            {/* Chemistry Card */}
            <div className="group bg-slate-50 hover:bg-slate-900 hover:text-white rounded-[5px] p-5 sm:p-6 border border-slate-100 hover:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🧪</div>
                <h4 className="text-lg font-bold mb-2 font-display">Chemistry</h4>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed mb-4">
                  Analytical, organic, inorganic, and general chemistry. Comprehensive explanations for school work, lab reports, and exam questions.
                </p>
              </div>
              <div className="text-xs font-semibold text-teal-600 group-hover:text-teal-300 tracking-wider uppercase mt-4 font-display">
                Secondary • O-Level • A-Level • Uni
              </div>
            </div>

            {/* Physics Card */}
            <div className="group bg-slate-50 hover:bg-slate-900 hover:text-white rounded-[5px] p-5 sm:p-6 border border-slate-100 hover:border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">⚡</div>
                <h4 className="text-lg font-bold mb-2 font-display">Physics</h4>
                <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed mb-4">
                  Classical mechanics, wave properties, electricity, electromagnetism, and thermal physics. Focused mathematical problem solving.
                </p>
              </div>
              <div className="text-xs font-semibold text-teal-600 group-hover:text-teal-300 tracking-wider uppercase mt-4 font-display">
                Secondary • O-Level • A-Level
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 border-t border-slate-100 pt-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 text-center mb-5 font-display">Focused tutoring pages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {servicePages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-[5px] border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#1B4332] hover:text-[#1B4332] transition-colors"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Focus Section */}
      <section id="curriculum" className="py-12 sm:py-20 px-4 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-teal-600 font-bold mb-2 block font-display">MATSEC & School Boards</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6">Maltese Curriculum Orientation</h2>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
                Sessions are designed and structured in close alignment with Maltese educational levels. In-person lessons concentrate on exactly what is required for local assessments, utilizing local syllabi guidelines.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "SEC / O-Level Preparation", desc: "Targeted practice on previous MATSEC papers to understand exam layouts and scoring structures." },
                  { title: "A-Level & Intermediate Syllabus", desc: "In-depth explanations of advanced syllabus components, critical calculations, and theory review." },
                  { title: "Secondary School Support", desc: "Supporting daily homework tasks and monthly class tests to rebuild core understanding and boost grades." },
                  { title: "University Academic Modules", desc: "Guidance on undergraduate organic chemistry, analytical calculations, and exam preparation." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs mt-0.5">✓</span>
                    <div>
                      <strong className="text-slate-800 block text-sm font-display">{item.title}</strong>
                      <span className="text-slate-500 text-xs leading-tight block">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-[5px] border border-slate-100 shadow-sm space-y-6 hover:shadow-md transition-shadow">
              <h3 className="font-display font-bold text-lg text-slate-800 border-b border-slate-100 pb-3">My In-Person Tutoring Approach</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  <strong>1-to-1 Dedicated Attention:</strong> Face-to-face tutoring allows us to identify and address individual learning difficulties instantly, adapting the pace of explanation in real-time.
                </p>
                <p>
                  <strong>Bilingual Support:</strong> Being a native Italian speaker and fluent in English, I can explain concepts in either language or bilingually to ensure the student feels comfortable and understands scientific terms clearly.
                </p>
                <p>
                  <strong>Practical Exercises:</strong> We work together on physical worksheets, sketching organic structures, vector physics models, and algebraic derivations on paper.
                </p>
                <p>
                  <strong>Past Paper Mastery:</strong> We systematically analyze past exam papers to develop reliable strategies, improve writing style, and teach time management techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Professional Background (CV Summary Section) */}
      <section id="about" className="py-12 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-teal-600 font-bold mb-3 font-display block">Professional Credentials</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Academic & Professional Background</h2>
          </div>

          {/* Styled CV Timeline */}
          <div className="border-l border-slate-200 pl-6 ml-4 space-y-8 sm:space-y-10 relative">
            
            {/* Prize Item */}
            <div className="relative group/timeline hover:translate-x-1 transition-transform duration-300">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-600 bg-white group-hover/timeline:bg-teal-600 transition-colors"></div>
              <span className="text-xs font-semibold text-teal-600 block font-display">Nov 2025</span>
              <div className="flex flex-col sm:flex-row gap-4 items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 font-display">Best Poster Communication Award</h4>
                  <p className="text-slate-500 text-xs mb-2">Merck Young Chemist’s Symposium 2025 (MYCS)</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Awarded for the best poster communication by the Young Group of the Italian Chemical Society (Società Chimica Italiana) and ACS Publications.
                  </p>
                </div>
                <div className="flex gap-2 items-center flex-shrink-0 bg-slate-50 p-2 rounded-[5px] border border-slate-100 mt-1 self-start sm:self-center">
                  <img src="/SCI giovani.jpeg" alt="Società Chimica Italiana - Young Group Logo" className="h-8 w-auto object-contain" />
                  <img src="/mycs 2025_inside.jpg" alt="Merck Young Chemist's Symposium 2025 Logo" className="h-8 w-auto object-contain" />
                  <img src="/ACS-publications.png" alt="American Chemical Society Publications Logo" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </div>

            {/* Publication Item */}
            <div className="relative group/timeline hover:translate-x-1 transition-transform duration-300">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-600 bg-white group-hover/timeline:bg-teal-600 transition-colors"></div>
              <span className="text-xs font-semibold text-teal-600 block font-display">Oct 2023</span>
              <div className="flex flex-col sm:flex-row gap-4 items-start justify-between">
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 font-display">Scientific Publication (Co-Author)</h4>
                  <p className="text-slate-500 text-xs mb-2">ACS Applied Polymer Materials · DOI: 10.1021/acsapm.3c01676</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-2">
                    Co-authored the research paper <i>"How to Cross-Link Gelatin: The Effect of Glutaraldehyde and Glyceraldehyde on the Hydrogel Properties"</i> studying biopolymer formulations.
                  </p>
                  <a 
                    href="https://doi.org/10.1021/acsapm.3c01676" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-xs text-teal-600 font-semibold hover:underline"
                  >
                    <span>View Publication</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
                <div className="w-12 h-12 bg-white rounded-[5px] border border-slate-100 flex items-center justify-center p-2 flex-shrink-0 mt-1 self-start sm:self-center">
                  <img src="/ACS logo.png" alt="American Chemical Society Logo" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
            
            {/* Experience item 1 */}
            <div className="relative group/timeline hover:translate-x-1 transition-transform duration-300">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-600 bg-white group-hover/timeline:bg-teal-600 transition-colors"></div>
              <span className="text-xs font-semibold text-teal-600 block font-display">2017 – Present</span>
              <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 font-display">Private Tutor (Chemistry, Physics, Maths & Italian)</h4>
              <p className="text-slate-500 text-xs mb-2">Self-employed | Malta & Italy</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Over 10 years of experience providing personalized private tutoring in general chemistry, organic synthesis, physics, algebra, geometry, and Italian language. Helped dozens of students successfully pass SEC, O-Level, A-Level, and university exams.
              </p>
            </div>

            {/* Experience item 2 */}
            <div className="relative group/timeline hover:translate-x-1 transition-transform duration-300">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-600 bg-white group-hover/timeline:bg-teal-600 transition-colors"></div>
              <span className="text-xs font-semibold text-teal-600 block font-display">Jan 2025 – Feb 2026</span>
              <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 font-display">Research Assistant</h4>
              <p className="text-slate-500 text-xs mb-2">University of Florence · Department of Chemistry "Ugo Schiff"</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Developed microRNA-21 inhibitors as novel chemotherapeutic agents for pediatric gliomas. Synthesized organic triazole derivatives and designed peptidomimetic structures.
              </p>
            </div>

            {/* Experience item 3 */}
            <div className="relative group/timeline hover:translate-x-1 transition-transform duration-300">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-600 bg-white group-hover/timeline:bg-teal-600 transition-colors"></div>
              <span className="text-xs font-semibold text-teal-600 block font-display">Sep 2023 – Jun 2024</span>
              <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 font-display">Secondary School Teacher</h4>
              <p className="text-slate-500 text-xs mb-2">Bucine Comprehensive Institute</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Taught Mathematics and Science classes to secondary school students, creating educational curricula, organizing exams, and managing student feedback.
              </p>
            </div>

            {/* Education item 4 */}
            <div className="relative group/timeline hover:translate-x-1 transition-transform duration-300">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-teal-600 bg-white group-hover/timeline:bg-teal-600 transition-colors"></div>
              <span className="text-xs font-semibold text-teal-600 block font-display">Jan 2022 – Feb 2025</span>
              <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 font-display">Master of Science in Chemistry</h4>
              <p className="text-slate-500 text-xs mb-2">University of Florence | Synthesis, Properties, and Structure of Organic Compounds</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced theoretical and laboratory focus on organic chemistry, structural analysis, analytical chemistry, and biochemical synthesis.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center font-display">
            <Link href="/cv" className="inline-flex items-center gap-1.5 px-6 py-3 border border-teal-600 text-teal-600 font-semibold rounded-[5px] hover:bg-teal-50 transition-colors text-sm">
              <span>View Full Academic & Scientific CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing & Free Consultation Section */}
      <section id="pricing" className="py-12 sm:py-20 px-4 bg-slate-900 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-[5px] bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-6 font-display">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-bold mb-4">Lesson Rates & Consultations</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-12">
            No fixed contracts. Pay per lesson. Tutoring is structured to cover specific difficulties or ongoing syllabus support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-2xl mx-auto">
            {/* Private Lesson Rate Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-[5px] p-6 sm:p-8 flex flex-col justify-between hover:border-slate-500 transition-colors">
              <div>
                <h4 className="text-lg font-bold mb-1 font-display">One-to-One Session</h4>
                <p className="text-slate-400 text-xs mb-6">In-person, focused learning</p>
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="text-4xl font-bold text-white font-display">€20</span>
                  <span className="text-slate-400 text-sm font-medium">/ hour</span>
                </div>
                <ul className="text-left text-slate-300 text-sm space-y-3 mb-8">
                  <li className="flex items-center gap-2">✓ Full 60-minute individual lesson</li>
                  <li className="flex items-center gap-2">✓ Tailored exercises on paper</li>
                  <li className="flex items-center gap-2">✓ Follow-up support on key topics</li>
                </ul>
              </div>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-[5px] transition-all shadow-md flex items-center justify-center gap-2 font-display"
              >
                Inquire for Lessons
              </a>
            </div>

            {/* Free Consultation Card */}
            <div className="bg-white text-slate-800 rounded-[5px] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative border border-amber-500 hover:shadow-2xl transition-all duration-300">
              <span className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wider font-display">
                Get Started
              </span>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1 font-display">Introductory Meeting</h4>
                <p className="text-slate-500 text-xs mb-6">Determine curriculum needs</p>
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="text-4xl font-bold text-teal-600 font-display">FREE</span>
                </div>
                <ul className="text-left text-slate-600 text-sm space-y-3 mb-8">
                  <li className="flex items-center gap-2">✓ 20-minute meeting or call</li>
                  <li className="flex items-center gap-2">✓ Evaluation of curriculum goals</li>
                  <li className="flex items-center gap-2">✓ Assessment of difficulty areas</li>
                </ul>
              </div>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-[5px] transition-all shadow-md flex items-center justify-center gap-2 font-display"
              >
                Schedule Free Meeting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-[#1B4332] font-bold mb-3 block font-display">Arrange a Session</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6">Get in Touch with Leonardo</h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Send a message to discuss your academic goals, ask questions about syllabus coverage, or to arrange your first session.
          </p>

          {/* Redesigned Contact Card with premium layouts and details */}
          <div className="bg-white rounded-[5px] p-6 sm:p-10 shadow-lg border border-slate-100 max-w-lg mx-auto hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#1B4332]"></div>
            
            <div className="flex flex-col items-center mb-6 sm:mb-8 text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1B4332]/20 shadow-sm mb-3">
                <img 
                  src="/me_graduation.jpg" 
                  alt="Leonardo Mori - Private Tutor Malta" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <span className="font-display text-lg text-slate-900 font-bold block">Leonardo Mori</span>
              <p className="text-xs text-slate-400 font-medium">In-Person Tutoring • Malta</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-6 sm:mb-8">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1B4332] hover:bg-[#153528] text-white font-bold rounded-[5px] shadow-sm hover:shadow-md transition-all text-sm sm:text-base h-12 flex-1 font-display"
              >
                <svg className="w-5 h-5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.48-.002 9.935-4.494 9.938-9.938.002-2.638-1.024-5.117-2.884-6.98C16.46 1.826 13.985.801 11.353.8h-.006c-5.482 0-9.94 4.487-9.943 9.933-.001 1.912.493 3.78 1.428 5.405l-.951 3.474 3.567-.936zm11.367-7.395c-.3-.15-1.77-.875-2.04-.975-.27-.1-.47-.15-.67.15-.2.3-.77.975-.94 1.175-.17.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.484-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.67-1.62-.92-2.2-.24-.58-.5-.5-.67-.512-.17-.008-.37-.01-.57-.01-.2 0-.52.075-.79.37-.27.3-1.04 1.02-1.04 2.487 0 1.468 1.07 2.885 1.22 3.085.15.2 2.1 3.2 5.08 4.495.71.308 1.262.493 1.694.63.71.226 1.358.194 1.87.118.571-.085 1.77-.724 2.02-1.388.25-.664.25-1.233.175-1.388-.075-.15-.275-.25-.575-.4z"/>
                </svg>
                WhatsApp
              </a>
              
              <a 
                href="mailto:leonardomori23@gmail.com" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-[5px] shadow-sm hover:shadow-md transition-all text-sm sm:text-base h-12 flex-1 font-display"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Leonardo
              </a>
            </div>

            <div className="border-t border-slate-100 pt-5 space-y-3.5 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#1B4332]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider font-display">Phone</span>
                  <span className="font-mono text-slate-800 text-sm font-semibold">+39 331 526 3830</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#1B4332]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider font-display">Email</span>
                  <span className="text-slate-800 text-sm font-semibold">leonardomori23@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#1B4332]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="font-semibold text-slate-400 text-xs uppercase tracking-wider font-display">Tutoring Scope</span>
                  <span className="text-slate-800 text-sm font-semibold">In-Person lessons in Malta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-slate-400 border-t border-slate-800 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <span className="font-bold text-white block font-display">Leonardo Mori</span>
            <span className="text-xs text-slate-500">© {new Date().getFullYear()} Private Science & Italian Tutor. Malta.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs font-display">
            {servicePages.slice(0, 3).map((page) => (
              <Link key={page.href} href={page.href} className="hover:text-white transition-colors font-medium">{page.label}</Link>
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
