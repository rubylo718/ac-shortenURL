import express from 'express'
import exphbs from 'express-handlebars'
import { indexRoute } from './routes/index.js'
import * as mongoose from './config/mongoose.js'

const app = express()
const port = process.env.PORT || 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(indexRoute)

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
