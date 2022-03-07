// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const questions = require("./lib/questions.js");

// Global variables
const teamList = [];

function askEngineer() {
    
};

function askIntern() {

};

function finalize() {

};

function menu() {
    inquirer.prompt(questions.askNext).then(answers => {
        switch(answers.next) {
            case "Engineer":
                askEngineer();
                break;
            case "Intern":
                askIntern();
                break;
            case "Finalize":
                finalize();
        }
    });
};

function init() {
    inquirer.prompt(questions.managerQ).then(answers => {
        teamList.push(new Manager(answers.name, answers.email, answers.id, answers.room));
        menu();
    });
};

init();