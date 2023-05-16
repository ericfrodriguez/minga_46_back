import create from '../controllers/mangas/create.js'
import read from '../controllers/mangas/read.js'
import one from '../controllers/mangas/one.js'

import { Router } from 'express'
let router = Router()

router.post('/comics',create)
router.post('/mangas',create)
router.post('/',create)
router.get('/',read)
router.get('/:manga_id',one)

export default router