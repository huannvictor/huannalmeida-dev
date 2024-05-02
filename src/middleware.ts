import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'pt-br'],
  defaultLocale: 'pt-br'
})

export const config = {
  matcher: ['/', '/(en|pt-br)/:path*']
}