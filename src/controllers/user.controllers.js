const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const result = await User.findAll() // select * from users;
    // Operaciones...
    return res.json(result/* valor a retornar */) // Se retorna la información en un archivo json
});

const create = catchError(async (req, res) => {
    const result = await User.create(req.body)
    // console.log(req.body)
    return res.status(201).json(result)
})

module.exports = {
    getAll,
    create
}