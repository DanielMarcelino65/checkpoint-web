import NextAuth, { AuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  pages: {
    signIn: '/api/auth/sigin',
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
