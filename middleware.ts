import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware temporaire – passe le build Edge sans erreur
// (On réactivera la vraie protection Supabase après les premières ventes si besoin)
export function middleware(request: NextRequest) {
  // Pour l’instant on laisse tout passer
  return NextResponse.next();
}

// On garde les mêmes routes que l’original
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
