const express = require ('express');
const {theaterController} = require('../controller/theaterController')

const theaterRoutes  =  express.Router();

theaterRoutes.get('/', new theaterController().getAll)
theaterRoutes.get('/:id', new theaterController().getById);
theaterRoutes.post('/', new theaterController().create);
theaterRoutes.put('/:id', new theaterController().update);
theaterRoutes.delete('/:id', new theaterController().delete)

module.exports = theaterRoutes