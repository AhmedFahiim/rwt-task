import NextAuth, { NextAuthOptions } from "next-auth";
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
      async authorize(credentials): Promise<any> {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // Check if the user entered true credentials
        if (email === "royal_group@gmail.com" && password === "123456") {
          return {
            id: 1,
            name: "Ahmed Fahiim",
            email: "royal-group@gmail.com",
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
    async session({ token, user }): Promise<any> {
      return {
        ...token,
        user,
      };
    },
  },
};

export default NextAuth(nextOptions);
