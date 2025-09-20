const express = require('express')
const moviesRoutes = require('./movies.routes');
const sessionsRoutes = require('./sessions.routes');
const theaterRoutes = require('./theater.routes');
const userRoutes = require('./user.routes');

const router = express.Router();

router.use('/movies',moviesRoutes);
router.use('/theater',theaterRoutes);
router.use('/sessions',sessionsRoutes);
router.use('/user', userRoutes);

module.exports = router;