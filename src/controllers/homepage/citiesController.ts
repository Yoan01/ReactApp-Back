import { PrismaClient } from '@prisma/client'

async function getAllCities(req: any, res: any) {
  try {
    const prisma = new PrismaClient()
    const cities = await prisma.cities.findMany()
    console.log('Requête getAllCities')
    res.json({ cities })
  } catch (error) {
    console.error('Error fetching :', error)
    res.status(500).json({ error: 'An error occurred while fetching.' })
  }
}

export default getAllCities
