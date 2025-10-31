/**
 * @file client.js
 * @description Initializes Prisma Client for DB operations
 */

import pkg from "@prisma/client";

const { PrismaClient } = pkg;

/**
 * Singleton Prisma Client instance
 * @type {PrismaClient}
 */
const prisma = new PrismaClient();

export default prisma;
