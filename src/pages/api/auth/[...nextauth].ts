import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextOptions: NextAuthOptions = {
  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/login`;

        try {
          // const { data: user } = await axios.post(url, { email, password })

          const user = {};

          if (user) {
            return user.data;
          }

          return null;
        } catch (error: any) {
          console.log("error >>>> ", error);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user } as any;
    },
    async session({ token }): Promise<any> {
      return {
        user: token.user,
        token: token.token,
      };
    },
  },

  pages: {
    signIn: "/auth/sign-in",
  },
};

export default NextAuth(nextOptions);
