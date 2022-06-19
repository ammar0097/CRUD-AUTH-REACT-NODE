const HttpError = require("../models/http-error");

const Employee = require("../models/employee");

const getAllEmployees = (req, res, next) => {
  Employee.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const addEmployee = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  Employee.create({
    name: name,
    age: age,
    country: country,
    position: position,
    wage: wage,
  });
};

const deleteEmployee = (req, res, next) => {
  const empId = req.params.eid;
  Employee.destroy({ where: { id: empId } });
};

const updateEmployee = (req, res, next) => {
  const empId = req.params.eid;
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  Employee.findByPk(empId).then((emp) => {
    emp.name = name;
    emp.age = age;
    emp.country = country;
    emp.position = position;
    emp.wage = wage;
    emp.save();
  });
};

const getEmployee = (req, res, next) => {
  const empId = req.params.eid;
  Employee.findByPk(empId)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
exports.deleteEmployee = deleteEmployee;
exports.updateEmployee = updateEmployee;
exports.getEmployee = getEmployee;
