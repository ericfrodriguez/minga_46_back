import create from '../controllers/companies/create.js'
import read from '../controllers/companies/read.js'
import one from '../controllers/companies/one.js'

import { Router } from 'express'
let router = Router()

router.post('/',create)
router.get('/',read)
router.get('/:company_id',one)

export default router