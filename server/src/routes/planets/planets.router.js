const express = require("express")
const planetsRouter = express.Router();

const{
    httpgetAllPlanets,

} = require("./planets.controller")

planetsRouter.get('/planets', httpgetAllPlanets)


module.exports = planetsRouter;