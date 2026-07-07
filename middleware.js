import { NextResponse } from 'next/server'

export function middleware(request) {
  // 1. Detect if the request originates from Italy
  // request.geo.country is populated on Vercel Edge.
  // x-vercel-ip-country is also set on Vercel as a backup header.
  const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || ''

  if (country.toUpperCase() === 'IT') {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Access Restricted / Accesso Limitato</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #f8fafc;
      --text-main: #0f172a;
      --text-muted: #475569;
      --border: #e2e8f0;
      --primary: #1B4332;
      --accent: #b95333;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg);
      color: var(--text-main);
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 24px;
    }

    .container {
      background: #ffffff;
      max-width: 500px;
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 10px 30px -10px rgba(27, 67, 50, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05);
      border-top: 5px solid var(--accent);
      padding: 40px 32px;
      text-align: center;
      overflow: hidden;
    }

    .icon-wrapper {
      width: 64px;
      height: 64px;
      background-color: #fef2f2;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      color: var(--accent);
    }

    .icon {
      width: 32px;
      height: 32px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    h1 {
      font-size: 22px;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 12px;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 24px;
    }

    .divider {
      border: 0;
      border-top: 1px solid var(--border);
      margin: 28px 0;
    }

    .brand {
      margin-top: 24px;
      font-size: 13px;
      font-weight: 600;
      color: var(--primary);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon-wrapper">
      <svg class="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
      </svg>
    </div>

    <!-- English Block -->
    <div class="section-en">
      <h1>Access Restricted</h1>
      <p>This website is not accessible from your location. We apologize for the inconvenience.</p>
    </div>

    <hr class="divider">

    <!-- Italian Block -->
    <div class="section-it">
      <h1>Accesso Limitato</h1>
      <p>Questo sito web non è accessibile dalla tua posizione geografica. Ci scusiamo per l'inconveniente.</p>
    </div>

    <div class="brand">
      Leonardo Mori — Private Lessons
    </div>
  </div>
</body>
</html>
`;

    return new NextResponse(html, {
      status: 403,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
      },
    })
  }

  // 2. Allow access otherwise
  return NextResponse.next()
}

// Apply middleware to all client page routes, skipping static assets, api routes, and common crawlers/files
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|ACS|SCI|me|mycs|Mori_Leonardo_Resume_EN.pdf|Leonardo-Mori-Resume.pdf).*)',
  ],
}
