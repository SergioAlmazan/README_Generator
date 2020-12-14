const inquirer = require("inquirer");
const fs = require('fs');
const gen = require('./utils/generateMarkdown');
const { prompt } = inquirer;


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description"
    },
    {
        type: "input",
        message: "How to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Instructions for use.",
        name: "Usage"
    },
    {
        type: "input",
        message: "Are there other contributors?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "Test"
    },
    {
        type: "input",
        message: "Contact info for further questions",
        name: "Questions"
    },
    {
        type: "list",
        message: "Select license",
        name: "License",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "GPL",
            "ISC",
            "ZLIB",
            "None"
        ]
    },
    {
        type: "input",
        message: "Your Github username",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    }
    
];


// function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
          throw err;
        }
      });
    }

// function to initialize program
function init() {
    prompt(questions).then(answers => {
        
        const response = generateMarkdown(answers);
        console.log(answers);
       
        writeToFile("README.md", response);
      
    })
    

}

// function call to initialize program
init();
