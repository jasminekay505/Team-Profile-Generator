//Include packages needed
const fs = require('fs');
const inquirer = require('inquirer');

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

const managerQuestions = [
    {
        type: 'input',
        message: `What is the manager's office number?`,
        name: 'office'
    }
];
const engineerQuestions = [
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'gitHub'
    }
];

const internQuestions = [
    {
        type: 'input',
        message:`What school does the intern attend?`,
        name: 'school'
    }
];

