import mongoose from 'mongoose'
mongoose.connect(process.env.MONGODB_URI_shortURL)
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected good!')
})
