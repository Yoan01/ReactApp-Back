import { Router } from 'express'
import getAllCities from '../controllers/homepage/citiesController'
import getAllCountries from '../controllers/homepage/countriesController'
import getAllArticles from '../controllers/homepage/articlesController'

const router = Router()

router.route('/cities').get(getAllCities)
router.route('/countries').get(getAllCountries)
router.route('/articles').get(getAllArticles)

export default router
