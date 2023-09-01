import { PrismaClient } from '@prisma/client'

async function getAllArticles(req: any, res: any) {
  try {
    const prisma = new PrismaClient()
    const articles = await prisma.articles.findMany()
    console.log('Requête getAllArticles')
    res.json({ articles })
  } catch (error) {
    console.error('Error fetching :', error)
    res.status(500).json({ error: 'An error occurred while fetching.' })
  }
}

export default getAllArticles
