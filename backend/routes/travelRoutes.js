const express = require("express");
const upload = require('../middleware/upload')

const {
    getTravels,
    getOneTravel,
    postTravel,
    patchTravel,
    deleteTravel,
} = require("../controller/travelController");

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//authorizing all routes
router.use(requireAuth);

router.get('/', getTravels)

router.get('/:id', getOneTravel)

router.post('/',upload.single('image'), postTravel)

router.delete('/:id', deleteTravel)

router.patch('/:id', patchTravel)

module.exports = router