/**
 * NuxtAuth.js Basic Setup:
 * https://next-auth.js.org/getting-started/example#add-api-route
 * https://next-auth.js.org/configuration/initialization#route-handlers-app
 *
 * RBAC:
 * https://authjs.dev/guides/basics/role-based-access-control
 */

import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

import type { NextAuthOptions } from 'next-auth';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM // For Postmark SMTP: "noreply@example.com" is not working, the email address must be valid.
    })
  ],
  callbacks: {
    session({ session, user }) {
      if (user && session.user) session.user.role = user.role;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
