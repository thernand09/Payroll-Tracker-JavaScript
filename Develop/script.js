// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  //Declared employee array
  const employeesArray = [];

  let addEmployee = true;
  let keepAdding = true;
/*keepAddiing: will allow user to keep adding until they no longer will add employee*/
  while(keepAdding){

    //Declared an employee object
    let employee ={
      firstName: "First name",
      lastName: "Last name",
      Salary: 0,
    };

  if(addEmployee){
    
    //allows user to create employee
    let inputFirstName = window.prompt("Enter first name:", "First name");
    let inputLastName = window.prompt("Enter last name:", "Last name");
    let inputSalary = window.prompt("Enter salary:", "0");
//it checks is user input valid strings
    if (inputFirstName != ""){
      employee.firstName = inputFirstName
    }

    if (inputLastName!= ""){
      employee.lastName = inputLastName
    }
//it checks if user enter a valid number
    if(!isNaN(inputSalary)){
      employee.salary = Number.parseFloat(inputSalary);
    }

  employeesArray.push(employee);

  addEmployee = window.confirm("Do you want to add another employee?");
  } else{
    return employeesArray;
  }
}
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  //cofrims array is not empty
  if (employeesArray && employeesArray.length > 0) { 
    console.log(employeesArray)
  let totalEmployeeSalary = 0;
  let avgEmployeeSalary = 0;
//will calculate the avg salary of the employees
for (const employee of employeesArray) {
  totalEmployeeSalary += employee.salary
  avgEmployeeSalary = totalEmployeeSalary/ employeesArray.length;
}
console.log(`The average employee salary between the ${employeesArray.length} employee(s) is ${avgEmployeeSalary.toLocaleString("en-US", {
})}`);

}
}  

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
