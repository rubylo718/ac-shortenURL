import mongoose from 'mongoose'
const Schema = mongoose.Schema
const urlSchema = new Schema({
  original_url: {
    type: String,
    require: true
  },
  short_url: {
    type: String,
  }
})

export default mongoose.model('urlPairs', urlSchema)
