import express from 'express'
import { corsMiddleware } from './middleware/cors.js'
import dotenv from 'dotenv'
import routesTranslate from './routes/translate.js'

// Load environment variables from .env file
dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.use(corsMiddleware())

app.use('/api/translate', routesTranslate)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
