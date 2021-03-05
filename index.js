//Include packages needed
const fs = require('fs');
const inquirer = require('inquirer');

//Array of questions to gather data
const managerQuestions = [
    {
        type: 'input',
        message: `What is the team manager's name?`,
        name: 'managerName'
    },
    {
        type: 'input',
        message: `What is the team manager's employee ID nummber?`,
        name: 'managerID'
    },
    {
        type: 'input',
        message: `What is the team manager's email address?`,
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: `What is the team manager's office number?`,
        name: 'managerOffice'
    },

];

const addEmployeeQuestion = [
    {
        type: 'confirm',
        message: 'Would you like to add more employees?',
        name: 'addEmployee'
    }
];

const newEmployee = [
    {
        type: 'list',
        name: 'role',
        message: 'What type of employee would you like to add?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: `What is the engineers's name?`,
        name: 'engineerName'
    },
    {
        type: 'input',
        message: `What is the engineer's employee ID nummber?`,
        name: 'engineerID'
    },
    {
        type: 'input',
        message: `What is the engineer's email address?`,
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: `What is the engineer's GitHub username?`,
        name: 'gitHub'
    }
];

const internQuestions = [
    {
        type: 'input',
        message: `What is the intern's name?`,
        name: 'internName'
    },
    {
        type: 'input',
        message: `What is the intern's employee ID nummber?`,
        name: 'internID'
    },
    {
        type: 'input',
        message: `What is the intern's email address?`,
        name: 'internEmail'
    },
    {
        type: 'input',
        message:`What school does the intern attend?`,
        name: 'school'
    }
];

//Function to write HTML file
function writeToFile(response) { 
    console.log(`Success! Your new HTML page has been created. It can be found at dist/${response.title}.html`);
    return renderHTML(reseponse);
}

//Initialzie App
function init() {
    inquirer.prompt(questions).then((response) => { 
        fs.writeFileSync(`${response.title}-README.md`, writeToFile(response), (err) => { 
            err ? console.error(err) : console.log('Success! Your README file has been generated!')
        })
    })
 }

// Function call to initialize app
init();