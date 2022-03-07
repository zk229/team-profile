// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");

// Questions for Inquirer module
const managerQ = [
    {
        type: "input",
        name: "name",
        message: "Enter the name of the project manager."
    },
    {
        type: "input",
        name: "id",
        message: "Enter the employee ID of the project manager."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the e-mail address of the project manager."
    },
    {
        type: "input",
        name: "office",
        message: "Enter the office number of the project manager."
    }
];
const askNext = [{
    type: "list",
    name: "next",
    message: "Enter another employee or finalize your team.",
    choices: ["Engineer", "Intern", "Finalize"]
}];
const engineerQ = [
    {
        type: "input",
        name: "name",
        message: "Enter the engineer's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter the engineer's employee ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's e-mail address."
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's Github username."
    }
];
const internQ = [
    {
        type: "input",
        name: "name",
        message: "Enter the intern's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter the intern's employee ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the intern's e-mail address."
    },
    {
        type: "input",
        name: "school",
        message: "Enter the intern's school."
    }
];