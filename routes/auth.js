import express from 'express'
import create from '../controllers/users/create.js'

import validator from '../middlewares/validator.js'
import { userCreateSignUp } from '../schemas/users.js'

const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
})

router.get('/admins', (req, res, next) => res.status(200).json({
  success: true,
  admins: []
}))

router.post('/signup', validator(userCreateSignUp) , create)

export default router