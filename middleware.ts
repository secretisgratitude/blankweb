import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/api/stripe'],
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
