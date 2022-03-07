const Employee = require("./Employee.js");

function Engineer(name, email, github) {
    this.name = name;
    this.email = email;
    this.id = Math.floor(Math.random() * 100000);
    this.github = github;
};

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype.getGithub = function() {
    return this.github;
}

Engineer.prototype.getRole = function() {
    return "Engineer";
}

module.exports = Engineer;