import express from 'express'
const router = express.Router()

import { homeRouter } from './modules/home.js'
router.use('/', homeRouter)

export { router as indexRoute }