import { NextResponse } from 'next/server';

export function middleware(request) {
  // Continuar con la solicitud normal
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas excepto:
     * 1. /api (rutas API)
     * 2. /_next (archivos Next.js)
     * 3. /_static (si tienes archivos estáticos)
     * 4. /favicon.ico, /sitemap.xml (archivos públicos)
     */
    '/((?!api|_next|_static|favicon.ico|sitemap.xml).*)',
  ],
}; 