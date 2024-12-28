import { Router } from 'express'
import { translate } from '../controllers/TranslateController.js'

const routesTranslate = Router()
routesTranslate.post('/', translate)

export default routesTranslate
