const catchError = require('../utils/catchError');
const Car = require('../models/Car.js'); //Models seria una ruta relativa porque depende de otra

const getAll = catchError(async(req, res) => {
    const car = await Car.findAll()
    // Operaciones...
    return res.json(result/* valor a retornar */) // select * from cars;
});

const create = catchError(async (req, res) => {
    const result = await Car.create(req.body)
    return res.status(201).json(result)
})

const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const result = await Car.findByPk(id)
    return res.json(result)
})

module.exports = {
    getAll,
    create,
    getOne
}