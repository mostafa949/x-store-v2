const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../../modules/users/models/User')

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await User.findOne({ email })
      return done(null, user)
    } catch (error) {
      done(error)
    }
  })
)
