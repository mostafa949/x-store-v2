const express = require('express')
const bodyParser = require('body-parser')
require('./utils/db.config')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

const app = express()
app.use(bodyParser.json())

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use('/', authRoutes)

app.get('/', (req, res) => res.send('Hello From Express js'))

app.use((req, res, next) => {
  res.status(404).send('Page Not Found')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})

module.exports = app
