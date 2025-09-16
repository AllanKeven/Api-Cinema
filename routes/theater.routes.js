const express = require ('express')

const theaterRoutes  =  express.Router();

theaterRoutes.get("/", (req, res) => {
    res.send("Hello")
})

module.exports = theaterRoutes