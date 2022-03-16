// Write your solution in this file!
const employee ={
    name: "Sam",
    streetAddress : "Main Street"
}

const updateEmployeeWithKeyAndValue= (employee, key, value)=> {
    let updatedEmployee = {...employee}
    updatedEmployee[key] = value;
    return updatedEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value)=>{
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key)=>{
    let updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

const destructivelyDeleteFromEmployeeByKey=(employee, key)=>{
    delete employee[key];
    return employee;
}