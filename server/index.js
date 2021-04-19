const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
require('./utils/db.config')
const cors = require('cors')
const passport = require('passport')
require('./utils/authStrategies/localStrategy')
const authRoutes = require('./routes/authRoutes')

const app = express()
app.use(bodyParser.json())

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: 'ccbcf10e0fb65551bfadd8326687ddaffa47192d',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
)

app.use(passport.initialize())
app.use(passport.session())

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
