const express = require("express");
const { getSingleEmployee, getAllEmployees, createEmployee, deleteEmployee, updateEmployee } = require("../controllers/employee.controller");
const router = express.Router();

router.get('/', getAllEmployees);
router.get('/:id', getSingleEmployee);

//create an Employee record
router.post('/', createEmployee);

//delete an Employee record
router.delete('/:id', deleteEmployee);

//update an Employee record
router.put('/:id', updateEmployee)


module.exports = router;