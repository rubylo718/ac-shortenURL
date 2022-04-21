import express from 'express'
import mongoose from 'mongoose'
import exphbs from 'express-handlebars'

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

app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
