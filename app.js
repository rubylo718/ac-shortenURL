import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res)=> {
  res.send(`shortURL initial`)
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
