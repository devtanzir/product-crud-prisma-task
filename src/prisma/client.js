/**
 * @file client.js
 * @description Initializes Prisma Client for DB operations
 */

import { PrismaClient } from "@prisma/client";

/**
 * Singleton Prisma Client instance
 * @type {PrismaClient}
 */
const prisma = new PrismaClient();

export default prisma;
