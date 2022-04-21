import express from 'express'
import mongoose from 'mongoose'
import exphbs from 'express-handlebars'
import urlPairs from './models/url.js'
import { generateShortURL } from './generateShortURL.js'

const app = express()
const port = 3000
const DIGIT_NUM = 5

mongoose.connect(process.env.MONGODB_URI_shortURL)
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error > <')
})
db.once('open', () => {
  console.log('mongodb good good connected!')
})

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const originalURL = req.body.original_url
  const urlDigit = generateShortURL(DIGIT_NUM)
  console.log(`original ${originalURL}, short ${urlDigit}`)
  return urlPairs.create({ original_url: originalURL, short_url: urlDigit })
    .then(() => res.render('result', { shortURL: urlDigit }))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
