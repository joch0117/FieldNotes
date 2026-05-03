const router = require('express').Router()
const authMiddleware = require('../middlewares/auth.middlewares')
const observationController = require('../controllers/observationController')

router.get('/', authMiddleware,observationController.foundObservation)
router.post('/create', authMiddleware,observationController.newObservations)
router.delete('/:id', authMiddleware,observationController.deleteObservation)
router.patch('/:id', authMiddleware,observationController.updateObservations)



module.exports = router