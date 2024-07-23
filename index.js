const express = require("express");
const mongoose = require("mongoose");
const employeeRoute = require("./routes/employee.route");
const app = express();

//middleware
app.use(express.json());


//routes
app.use("/api/employees", employeeRoute)

app.get('/', (req, res) => {
    res.send("HEY ...");
});



mongoose.connect("mongodb+srv://admin:xYDNRs4RDvpv66Gp@backend-crud.os3nr79.mongodb.net/NODE-CRUD?retryWrites=true&w=majority&appName=backend-crud")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
.catch(() => {
    console.log("connection failed")
});