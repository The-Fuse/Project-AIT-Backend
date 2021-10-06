const express = require('express');

const router = express.Router();

const { getClubs, getClub, createClub, updateClub } = require('./controller');

router.route('/')
    .get(getClubs)
    .post(createClub);

router.route('/:id')
    .get(getClub)
    .put(updateClub);

module.exports = router;