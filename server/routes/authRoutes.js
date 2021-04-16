const router = require('express').Router()
const { addUser } = require('../modules/users/service/userService')
const {
  registerSchema,
} = require('../modules/users/validations/authValidation')
const {
  joiErrorFormatter,
  mongooseErrorFormatter,
} = require('../utils/validationFormatter')

/**
 * Handles user registeration
 */
router.post('/register', async (req, res) => {
  try {
    const validationesult = registerSchema.validate(req.body, {
      abortEarly: false,
    })
    // if (validationesult.error) {
    return res.json(joiErrorFormatter(validationesult.error))
    // }
    // return res.send(validationesult)
    const user = await addUser(req.body)
  } catch (error) {
    res.status(400).json(mongooseErrorFormatter(error))
    // console.error(mongooseErrorFormatter(error))
  }
})

module.exports = router
