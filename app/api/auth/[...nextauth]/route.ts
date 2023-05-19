import NextAuth from "next-auth";
import Providers from 'next-auth/providers'
import jwt from 'jsonwebtoken';

import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
    jwt: {
        secret: process.env.JWT_SECRET,
//         // encryption: true,
//         encryptionAlgorithm: 'HS512',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}