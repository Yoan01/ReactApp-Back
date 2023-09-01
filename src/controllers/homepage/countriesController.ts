import { PrismaClient } from '@prisma/client'

async function getAllCountries(req: any, res: any) {
  try {
    const prisma = new PrismaClient()
    const countries = await prisma.countries.findMany()
    console.log('Requête getAllCountries')
    res.json({ countries })
  } catch (error) {
    console.error('Error fetching :', error)
    res.status(500).json({ error: 'An error occurred while fetching.' })
  }
}

export default getAllCountries
