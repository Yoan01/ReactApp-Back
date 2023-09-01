import express, { json } from 'express'
import cors from 'cors'
import apiRoutes from './routes/mainPage'

const port = process.env.PORT || 8080
const app = express()

// Middleware
app.use(cors())
app.use(json())

app.get('/api', (req, res) => res.json({ data: "Bienvenue sur l'api ♠" }))

// API routes
app.use('/api/homepage', apiRoutes)

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
