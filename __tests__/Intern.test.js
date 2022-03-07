const Intern = require("../lib/Intern.js");

test("create an Intern object", () => {
    const intern = new Intern("Oscar", "oscar@oscar.org", 3, "University of Oscarhoma");

    expect(intern.getName()).toBe("Oscar");
    expect(intern.getEmail()).toBe("oscar@oscar.org");
    expect(intern.getId()).toBe(3);
    expect(intern.getSchool()).toBe("University of Oscarhoma");
    expect(intern.getRole()).toBe("Intern");
});