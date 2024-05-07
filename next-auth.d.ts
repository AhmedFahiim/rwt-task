import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: number
      code_phone: string
      country_id: number
      email: string
      email_verified_at: null
      image: string
      user_type_text: string
      full_name: string
      first_name: string
      last_name: string
      company: { logo: string; name: string }
      employee: { full_name: string }
    }
  }
}
