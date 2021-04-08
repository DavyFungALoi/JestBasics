const functions = require("./functions");

test("Adds 2+ 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2+ 2 to equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// To be null
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// To be falsy
test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

///To Equal for Objects
test("User should be Brad Travery Object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

/// Less than and greater than
test('Should be under 1600', () => {
    const load1=800
    const load2=800
    expect(load1+load2).toBeLessThanOrEqual(1600)
})

//regex

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})
//Arrays contain
test('admin should be in usernames', () => {
    usernames=['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})