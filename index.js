// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const questions = require("./lib/questions.js");
const generatePage = require("./src/page-template.js");

// A list to hold the objects representing the team members
const teamList = [];

// Add an engineer
function askEngineer() {
    inquirer.prompt(questions.engineerQ).then(answers => {
        teamList.push(new Engineer(answers.name, answers.email, answers.id, answers.github));
        menu();
    });
};

// Add an intern
function askIntern() {
    inquirer.prompt(questions.internQ).then(answers => {
        teamList.push(new Intern(answers.name, answers.email, answers.id, answers.school));
        menu();
    })
};

// Create the HTML document
function finalize() {
    console.log(teamList);
};

// Make a selection to add an engineer, an intern, or to finalize the team
function menu() {
    inquirer.prompt(questions.askNext).then(answers => {
        switch(answers.next) {
            case "Engineer":
                askEngineer();
                break;
            case "Intern":
                askIntern();
                break;
            default:
                finalize();
        }
    });
};

// Start by prompting for info about the project manager
function init() {
    inquirer.prompt(questions.managerQ).then(answers => {
        teamList.push(new Manager(answers.name, answers.email, answers.id, answers.room));
        menu();
    });
};

init();