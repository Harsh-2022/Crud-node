const Employee = require ("../models/employee.model");

const getSingleEmployee = async(req,res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findById(id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const getAllEmployees = async(req,res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({message : error.message});
    }

};

const createEmployee = async (req,res) => {
    try {
        const employee = await Employee.create(req.body); 
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const updateEmployee = async (req,res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findByIdAndUpdate(id,req.body); 

        const updatedEmployee = await Employee.findById(id);
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const deleteEmployee = async (req,res) => {
    try {
        const {id} = req.params;
        const employee = await Employee.findByIdAndDelete(id); 

        res.status(200).json({message : "Record Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

module.exports = {
    getSingleEmployee,
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
};