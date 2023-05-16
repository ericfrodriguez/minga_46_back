import create from '../controllers/chapters/create.js'
import read from '../controllers/chapters/read.js'
import one from '../controllers/chapters/one.js'

import { Router } from 'express'
let router = Router()

router.post('/',create)
router.get('/',read)
router.get('/:chapter_id',one)

export default router