const express = require('express')
const app = express()

const exphbs = require('express-handlebars')

const port = 3000



app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {style: 'style.css'})
})

app.get('/about', (req, res) => {
  res.render('about', {style: 'about.css'})
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio', {style: 'portfolio.css'})
})

app.get('/contact', (req, res) => {
  res.render('contact', {style: 'contact.css'})
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})