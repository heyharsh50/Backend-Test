require('dotenv').config() 

const express = require('express')

//import express from "express"      //same as line number 1 only the way of express is different.
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('harsh.com')
})

app.get('/login', (req, res) => {
    res.send('<h1> Please login to heyharsh50 </h1>')
})

app.get('/github', (req, res) => {
    res.send('https://github.com/heyharsh50')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
