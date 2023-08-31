import { Router } from "express"
const router = Router()

router.get('/', (req, res) => res.render('index', {tittle: "Mi primer proyecto en NodeJs"}))
router.get('/contact', (req, res) => res.render('contact'))
router.get('/about', (req, res) => res.render('about'))

export default router