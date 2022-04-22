import express from 'express'
import mongoose from 'mongoose'
import exphbs from 'express-handlebars'
import urlPairs from './models/url.js'
import { generateShortURL } from './generateShortURL.js'

const app = express()
const port = process.env.PORT || 3000
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

// user enter an url and press the button
app.post('/', (req, res) => {
  const originalURL = req.body.urlInput
  // check if the original url existed in db
  urlPairs.findOne({ original_url: originalURL })
    .then(result => {
      // if not exist: generate random digits and add new item in db
      // if exist: return the find result
      if (!result) {
        const urlDigit = generateShortURL(DIGIT_NUM)
        return urlPairs.create({ original_url: originalURL, short_url: urlDigit })
      } else {
        return result
      }
    })
    .then(result => res.render('result', { origin: req.headers.origin, shortURL: result.short_url }))
    .catch(error => console.log(error))
})

// request the short url and direct to the original url
app.get('/:short', (req, res) => {
  const short = req.params.short
  urlPairs.findOne({ short_url: short })
    .then(result => {
      if (result) { return res.redirect(result.original_url) } else (res.render('index'))
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
