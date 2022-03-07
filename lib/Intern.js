const Employee = require("./Employee.js");

function Intern(name, email, school) {
    this.name = name;
    this.email = email;
    this.school = school;
    this.id = Math.floor(Math.random() * 100000);
};

Intern.prototype = Object.create(Employee.prototype);

Intern.prototype.getSchool = function () {
    return this.school;
};

Intern.prototype.getRole = function() {
    return "Intern";
};

module.exports = Intern;