import randomAI from "../randomAI"

let ai = new randomAI("ai")

test.todo("ai makes a valid random move", () => {
    expect(ai.randomShot()).toBe("valid")
})

test.todo("ai gets a random ship placement", () => {
    expect(ai.randomPlacement()).toBe("valid")
})