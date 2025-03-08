import { PrismaClient } from "@prisma/client";

const globalThisPrisma = globalThis.prisma || new PrismaClient(); // Use globalThis to access the global scope

// Export the db instance
export const db = globalThisPrisma;

// Cache the Prisma client in non-production environments
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db; // Save the Prisma client to the global object only in development
}
