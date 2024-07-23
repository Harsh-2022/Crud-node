const mongoose = require ("mongoose")

const EmployeeSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },

        city : {
            type : String,
            required : true,
            default : "Delhi"
        },

        mobile : {
            type : Number,
            required : true,
            default : 0
        }
    },
    {
        timestamps : true
    }
);

const Employee = mongoose.model("Employee",EmployeeSchema);

module.exports = Employee;