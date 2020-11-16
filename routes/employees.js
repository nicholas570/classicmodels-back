const express = require('express');

const Employees = require('../models/employees');

const router = express.Router();

router.get('/', Employees.getAll);

module.exports = router;
