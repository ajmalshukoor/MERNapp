const express = require("express");
const {
    getTravels,
    getOneTravel,
    postTravel,
    patchTravel,
    deleteTravel,
} = require("../controller/travelController");

const router = express.Router();

router.get('/', getTravels)

router.get('/:id', getOneTravel)

router.post('/', postTravel)

router.delete('/:id', deleteTravel)

router.patch('/:id', patchTravel)


module.exports = router