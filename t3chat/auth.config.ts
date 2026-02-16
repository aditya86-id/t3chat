import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
    log: ['query','info','warn','error']
});

export default betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    baseURL: process.env.BETTER_AUTH_BASE_URL || "http://localhost:3000",
    basePath: "/api/auth",
    secret: process.env.BETTER_AUTH_SECRET,
    socialProviders:{
        github:{
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }
    }
});

