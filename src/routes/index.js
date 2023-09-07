import { Router } from "express"
const router = Router()
import juegos from './../juegos.js'

// API
router.get('/juegos', (req, res) => {
    res.json(juegos);
})

router.post('/juegos', (req, res) => {
    const nuevoJuago = {
        id: 8,
        compañia: "UI",
        nombre: "Subway surfer",
        año: 1977
    }
    juegos.push(nuevoJuago)
    res.json(juegos)

})


    router.put('/juegos/:id', (req, res) => {
        const validacion = juegos.some((juegos) => juegos.id === parseInt(req.params.id))
        if (validacion) {
            juegos.forEach(element => {
                if (element.id === parseInt(req.params.id)) {
                    element.compañia = "Oporapa"
                    element.nombre = "Slope"
                    element.año = 2005
                    res.json(juegos)
                } else {
                    res.sendStatus(400)
                }
            })
        }

    })



router.get('/', (req, res) => res.render('index', { tittle: "Mi primer proyecto en NodeJs" }))
router.get('/contact', (req, res) => res.render('contact'))
router.get('/about', (req, res) => res.render('about'))

export default router