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
        name: "Badge",
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

function init() {
    prompt(questions).then(answers => {
        
        const response = gen(answers);
        console.log(answers);
       
        fs.writeFile("README.md", response, function(err) {
            if (err) {
              throw err;
            };
        
            console.log("New README file created with success!");
          });
      
    })
    

}

// function call to initialize program
init();
