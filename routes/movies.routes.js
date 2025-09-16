const express = require('express');
const {moviesController} = require('../controller/moviesController');

const moviesRoutes = express.Router();

moviesRoutes.get('/', new moviesController().getMovie);
moviesRoutes.post('/', new moviesController().registerMovie);
moviesRoutes.put('/:id', new moviesController().updateMovies);
moviesRoutes.delete('/:id', new moviesController().deleteMovie);


module.exports = moviesRoutes;