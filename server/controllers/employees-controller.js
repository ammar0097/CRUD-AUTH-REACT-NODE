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

exports.getAllEmployees = getAllEmployees;
exports.addEmployee = addEmployee;
