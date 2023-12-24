require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('<a href="home">Go to home</a>')
})
app.get('/home',(req,res)=>{
    res.send(`This is Home Page  <a href="/">Go 1st</a>`)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})