/*
 * note(prisma)-1
 * run the following commads
 * npm i -D prisma
 * npm install @prisma/client
 * npx prisma init
 * */

/*
 * note(prisma)-2: update the database url in .env
 * */

/*
 * note(prisma)-3
 * create this file here
 * */

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prismadb;
}

export default prismadb;
