import mongoose from 'mongoose'
const Schema = mongoose.Schema
const urlSchema = new Schema({
  original_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true
  }
})

export default mongoose.model('urlPairs', urlSchema)
