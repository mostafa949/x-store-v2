const router = require('express').Router()
const { addUser } = require('../modules/users/service/userService')
const {
  registerSchema,
} = require('../modules/users/validations/authValidation')

/**
 * Handles user registeration
 */
router.post('/register', async (req, res) => {
  try {
    const validationesult = registerSchema.validate(req.body, {
      abortEarly: false,
    })
    return res.send(validationesult)
    const user = await addUser(req.body)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
