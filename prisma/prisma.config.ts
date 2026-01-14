import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  connection: process.env.DATABASE_URL!,
})

export default prisma