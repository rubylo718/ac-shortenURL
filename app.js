import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3000

mongoose.connect(process.env.MONGODB_URI_shortURL)
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error > <')
})
db.once('open', () => {
  console.log('mongodb good good connected!')
})

app.get('/', (req, res) => {
  res.send('shortURL initial')
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
