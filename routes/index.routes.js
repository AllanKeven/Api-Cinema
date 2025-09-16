const express = require('express')
const moviesRoutes = require('./movies.routes');
const sessionsRoutes = require('./sessions.routes');
const theaterRoutes = require('./theater.routes')

const router = express.Router();

router.use('/movies',moviesRoutes)
router.use('/theater',theaterRoutes)
router.use('/sessions',sessionsRoutes)

module.exports = router;