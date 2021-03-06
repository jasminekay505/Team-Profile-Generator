//Include packages and files needed
const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Empty employee array
const employees = [];

//Array of questions to gather data
const employeeQuestions = [
    {
        type: 'input',
        message: `What is the team members's name?`,
        name: 'name'
    },
    {
        type: 'input',
        message: `What is the team member's employee ID nummber?`,
        name: 'id'
    },
    {
        type: 'input',
        message: `What is the team members's email address?`,
        name: 'email'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What type of employee is this?',
        choices: ['Manager', 'Engineer', 'Intern']
    }

];

const addEmployeeQuestion = [
    {
        type: 'confirm',
        message: 'Would you like to add more employees?',
        name: 'addEmployee'
    }
];

//Function to gather infor for new employee
function add() {
    employeeInfo();
}

//Function to get employee info
function employeeInfo() {
    inquirer.prompt(employeeQuestions)
        .then(({ name, id, email, role }) => {
            let addtlInfo = '';
            if (role === 'Manager') {
                addtlInfo = 'office number';
            }
            if (role === 'Engineer') {
                addtlInfo = 'GitHub username'
            }
            if (role === 'Intern') {
                addtlInfo = 'school'
            }
            inquirer.prompt([
                {
                    type: 'input',
                    message: `What is the ${role}'s ${addtlInfo}?`,
                    name: 'info'
                }
            ])
                .then(({ info }) => {
                    let newEmployee;
                    if (role === 'Manager') {
                        newEmployee = new Manager(name, id, email, info);
                    }
                    if (role === 'Engineer') {
                        newEmployee = new Engineer(name, id, email, info);
                    }
                    if (role === 'Intern') {
                        newEmployee = new Intern(name, id, email, info);
                    }
                    employees.push(newEmployee);
                    console.log(employees);

                    inquirer.prompt(addEmployeeQuestion)
                        .then(({ addEmployee }) => {
                            if (addEmployee) {
                                add();
                            }
                        });
                });
        });
}

//Function to write HTML
function startHTML() { 
    const main = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Link to bootstrap cdn -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <!-- Link to fontawesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
        <!-- Link to stylesheet -->
        <link rel = "stylesheet" href = "style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid text-center">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="card-deck">
        </div>`;

        fs.writeFile('./dist/teamProfile.html', main, function(err) { 
            if(err) { 
                console.log(err);
            }
        });
}

function addCard(newEmployee) { 
    const name = newEmployee.getName();
    const id = newEmployee.getId();
    const email = newEmployee.getEmail();
    const role = newEmployee.getRole(); 
    let card; 

    if (role === 'Manager') {
        const office = newEmployee.getOfficeNumber();
        card = `<div class="card">
        <div class="card-header">
            ${name}
            <br>
            <i class="fas fa-coffee"></i> ${role}
        </div>
        <div class="card-body">
            <p class="cardtext">ID: ${id}</p>
            <p class="cardtext">Email: <a href="mailto:${email}">${email}</a></p>
            <p class="cardtext">Office Number: ${office}</p>
        </div>
    </div>`
    }
    if (role === 'Engineer') {
        const gitHub = newEmployee.getGitHub();
    }
    if (role === 'Intern') {
        const school = newEmployee.getSchool();
    }

}
//Function to start app
add();