exports.managerQ = [
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
        name: "room",
        message: "Enter the office number of the project manager."
    }
];
exports.askNext = [{
    type: "list",
    name: "next",
    message: "Enter another employee or finalize your team.",
    choices: ["Engineer", "Intern", "Finalize"]
}];
exports.engineerQ = [
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
exports.internQ = [
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