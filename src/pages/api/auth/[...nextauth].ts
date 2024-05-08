import NextAuth, { DefaultSession, NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextOptions: NextAuthOptions = {
  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
    maxAge: 3600,
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(
        credentials
      ): Promise<null | { id: string; name: string; email: string }> {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // Check if the user entered true credentials
        if (email === "royal_group@gmail.com" && password === "123456") {
          return {
            id: "1",
            name: "Ahmed Fahiim",
            email: "royal_group@gmail.com",
          };
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    async session({ token, user }): Promise<DefaultSession> {
      return {
        ...token,
        user,
        expires: new Date(Math.floor(Date.now() / 1000) + 3600).toISOString(),
      };
    },
  },
};

export default NextAuth(nextOptions);
