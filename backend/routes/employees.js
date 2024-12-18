const express = require("express");
const router = express.Router();
// Importing the employee model
const Employees = require("../models/employee");

//Test
router.get("/test",(req,res)=>res.send("Employee routes is working!"))
//insert data to the db(create)
router.post('/',(req,res)=>{
    Employees.create(req.body)
    .then(()=>res.json({msg:"Employee added successfully!"}))
    .catch(()=>res.status(400).json({msg:"Employee adding failed!"}));
})

//get all data from the db(read)
router.get('/',(req,res)=>{
    Employees.find()
    .then((Employees)=>res.json(Employees))
    .catch(()=>res.status(400).json({msg:"No employees found!"}));
})
//get one employee from db
router.get('/:id',(req,res)=>{
    Employees.findById(req.params.id)
    .then((Employees)=>res.json(Employees))
    .catch(()=>res.status(400).json({msg:"Employee is not available"}));
})


//update an employee in db
router.put('/:id',(req,res)=>{
    Employees.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>res.json({msg:"Update successful!"}))
    .catch(()=>res.status(400).json({msg:"Update failed!"}));
});


//delete an employee from db
router.delete('/:id',(req,res)=>{
    Employees.findByIdAndDelete(req.params.id)
    .then(()=>res.json({msg:"Deleted successfully!"}))
    .catch(()=>res.status(400).json({msg:"Can't be deleted!"}));
});

module.exports = router;