const Employee = require("./Employee.js");

function Manager(name, email, roomNumber) {
    this.name = name;
    this.email = email;
    this.roomNumber = roomNumber;
    this.id = Math.floor(Math.random() * 100000);
};

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getRoomNumber = function() {
    return this.roomNumber;
};

Manager.prototype.getRole = function() {
    return "Manager";
};

module.exports = Manager;