// server.js
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const { createClient } = require('@supabase/supabase-js')

const prisma = new PrismaClient()
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const app = express()
app.use(express.json())

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await prisma.task.findMany()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' })
  }
})

app.post('/api/tasks', async (req, res) => {
  const { title } = req.body
  try {
    const task = await prisma.task.create({
      data: {
        title,
      },
    })
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
