const HttpError = require('../models/http-error');

const Employee = require("../models/employee");

const getAllEmployees = (req,res,next) => {
    Employee.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

exports.getAllEmployees = getAllEmployees;
