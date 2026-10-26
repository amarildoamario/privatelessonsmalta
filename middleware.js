import { NextResponse } from 'next/server'

const BOT_USER_AGENTS = [
  'googlebot',
  'google-favicon',
  'adsbot-google',
  'mediapartners-google',
  'google-inspectiontool',
  'apis-google',
  'feedfetcher-google',
  'google-read-aloud',
  'bingbot',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'slurp',
  'facebookexternalhit',
  'whatsapp',
  'twitterbot',
  'linkedinbot',
  'applebot'
]

export function middleware(req) {
  const { pathname, search } = req.nextUrl
  const host = req.headers.get('host') || ''

  // 1. Canonical 301 redirect: www.privatelessonsmalta.com -> privatelessonsmalta.com
  if (host.startsWith('www.privatelessonsmalta.com')) {
    const canonicalUrl = new URL(`https://privatelessonsmalta.com${pathname}${search}`)
    return NextResponse.redirect(canonicalUrl, 301)
  }

  // 2. Owner preview bypass (?preview=leo sets a persistent cookie)
  if (req.nextUrl.searchParams.get('preview') === 'leo') {
    const cleanUrl = req.nextUrl.clone()
    cleanUrl.searchParams.delete('preview')
    const response = NextResponse.redirect(cleanUrl)
    response.cookies.set('allow_preview', '1', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax'
    })
    return response
  }

  const hasPreviewCookie = req.cookies.get('allow_preview')?.value === '1'
  const userAgent = (req.headers.get('user-agent') || '').toLowerCase()
  const isSearchBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot))

  // 3. Block visitors from Italy (IT), while never blocking search engine bots or preview mode
  const country = (req.geo?.country || req.headers.get('x-vercel-ip-country') || '').toUpperCase()
  if (country === 'IT' && !isSearchBot && !hasPreviewCookie) {
    return new NextResponse(
      '<!DOCTYPE html><html><head><meta charset="utf-8"><title>404: This page could not be found</title><meta name="robots" content="noindex"></head><body style="font-family:system-ui,-apple-system,sans-serif;height:100vh;margin:0;display:flex;align-items:center;justify-content:center;color:#334155;background:#f8fafc;"><div style="display:flex;align-items:center;gap:16px;"><h1 style="font-size:24px;font-weight:600;margin:0;padding-right:16px;border-right:1px solid #cbd5e1;">404</h1><p style="font-size:14px;margin:0;">This page could not be found.</p></div></body></html>',
      {
        status: 404,
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'x-robots-tag': 'noindex'
        }
      }
    )
  }

  const response = NextResponse.next()

  // 4. Prevent Google & AI Overviews from indexing /cv or PDF resumes
  if (
    pathname === '/cv' ||
    pathname.endsWith('.pdf')
  ) {
    response.headers.set('x-robots-tag', 'noindex, nofollow, noarchive, nosnippet')
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image).*)',
  ]
}
