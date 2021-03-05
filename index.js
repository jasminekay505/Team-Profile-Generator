//Include packages needed
const fs = require('fs');
const inquirer = require('inquirer');

//Array of questions to gather data
const questions = [
    {

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