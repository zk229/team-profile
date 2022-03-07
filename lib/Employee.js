function Employee(name, email) {
    this.name = name;
    this.email = email;
    this.id = Math.floor(Math.random() * 10000000);
    
};

Employee.prototype.getName = function() {
    return this.name;
};

Employee.prototype.getEmail = function() {
    return this.email;
};

Employee.prototype.getId = function() {
    return this.id;
};

Employee.prototype.getRole = function() {
    return "Employee";
}

module.exports = Employee;