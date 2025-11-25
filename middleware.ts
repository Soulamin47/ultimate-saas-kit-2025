import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware Edge-safe : rien pour l'instant, juste pour éviter les erreurs
// (Auth Supabase gérée côté server/API – pas besoin ici pour le starter kit)
export function middleware(request: NextRequest) {
  // Optionnel : redirige les users non loggés vers /login (à activer après)
  // if (!request.cookies.has('sb-access-token')) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except API/static/image/favicon
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
