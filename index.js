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


//Function to start app
add();