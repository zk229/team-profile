// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const questions = require("./lib/questions.js");

// Questions for Inquirer module
console.log(questions.askNext);