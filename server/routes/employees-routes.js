const express = require('express');
const employeesController = require("../controllers/employees-controller");

const router = express.Router();

router.get('/', employeesController.getAllEmployees);
router.post('/',employeesController.addEmployee);
router.delete('/:eid',employeesController.deleteEmployee)
module.exports = router;
