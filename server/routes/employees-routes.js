const express = require('express');
const employeesController = require("../controllers/employees-controller");

const router = express.Router();

router.get('/', employeesController.getAllEmployees);
router.post('/',employeesController.addEmployee);
router.delete('/:eid',employeesController.deleteEmployee);
router.patch('/:eid',employeesController.updateEmployee);
router.get('/:eid',employeesController.getEmployee);
module.exports = router;
