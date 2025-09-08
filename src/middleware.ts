import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fi'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|ads.txt|sitemap.xml|manifest.webmanifest|calculator).*)']
};