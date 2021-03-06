const Engineer = require("../lib/Engineer.js");

test("create an Engineer object", () => {
    const engineer = new Engineer("Alice", "alice@alice.com", 2, "https://github.com/therealalice");

    expect(engineer.getName()).toBe("Alice");
    expect(engineer.getId()).toBe(2);
    expect(engineer.getEmail()).toBe("alice@alice.com");
    expect(engineer.getGithub()).toBe("https://github.com/therealalice");
    expect(engineer.getRole()).toBe("Engineer");
});