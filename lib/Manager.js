const Employee = require("./Employee.js");

function Manager(name, email, id, roomNumber) {
    this.name = name;
    this.email = email;
    this.roomNumber = roomNumber;
    this.id = id;
};

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getRoomNumber = function() {
    return this.roomNumber;
};

Manager.prototype.getRole = function() {
    return "Manager";
};

module.exports = Manager;