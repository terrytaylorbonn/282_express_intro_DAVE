const express = require('express');
const router = express.Router();
// const data = {};
// data.employees = require('../../data/employees.json');
const employeesController = require('../../controllers/employeesController');


router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee)
    // .get((req, res) => {
    //     res.json(data.employees);
    // })
    // .post((req, res) => {
    //     res.json({
    //         "firstname": req.body.firstname,
    //         "lastname": req.body.lastname
    //     });
    // })
    // .put((req, res) => {
    //     res.json({
    //         "firstname": req.body.firstname,
    //         "lastname": req.body.lastname
    //     });
    // })
    // .delete((req, res) => {
    //     res.json({ "id": req.body.id })
    // });

router.route('/:id')
    .get(employeesController.getEmployee)
    // .get((req, res) => {
    //     res.json({ "id": req.params.id });
    // });

module.exports = router;