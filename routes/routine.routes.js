/* eslint-disable indent */
const express = require('express');
const routineController = require('../controllers/routine.controller');

const router = express.Router();

router.get('/', async (req, res) => {
    routineController.findAll(req, res);
});

module.exports = router;
