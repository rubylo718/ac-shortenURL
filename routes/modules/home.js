import express from 'express'
import urlPairs from '../../models/url.js'
import { generateShortURL } from '../../generateShortURL.js'

const router = express.Router()
const DIGIT_NUM = 5

router.get('/', (req, res) => {
  res.render('index')
})

// user enter an url and press the button
router.post('/', (req, res) => {
  const originalURL = req.body.urlInput
  // check if the original url exists in db
  urlPairs.findOne({ original_url: originalURL })
    .then(result => {
      // if not exists: generate random digits and create new item in db
      // if exists: return the finding
      if (!result) {
        const urlDigit = generateShortURL(DIGIT_NUM)
        return urlPairs.create({ original_url: originalURL, short_url: urlDigit })
      } else {
        return result
      }
    })
    .then(result => res.render('result', { domain: req.headers.origin, shortURL: result.short_url }))
    .catch(error => console.log(error))
})

// request the short url and direct to the original url
router.get('/:short', (req, res) => {
  const short = req.params.short
  urlPairs.findOne({ short_url: short })
    .then(result => {
      return (result ? res.redirect(result.original_url) : res.render('index'))
    })
    .catch(error => console.log(error))
})

export { router as homeRouter }