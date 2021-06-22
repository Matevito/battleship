import randomAI from "../randomAI"

test("ai makes a valid random shot", () => {
    let ai = new randomAI("ai")
    expect(ai.randomShot()).toBe("valid")
})

test("ai can place ships in a random valid position", () => {
    let ai = new randomAI("ai")
    ai.randomPlacement("a", 2)
    ai.randomPlacement("b", 4)
    ai.randomPlacement("c", 5)
    let aiBoardData = ai.get_AIboard().getShips()
    let aiBoardData_length = Object.keys(aiBoardData).length

    //check how many hsips are in ships gameboard database
    expect(aiBoardData_length).toBe(3)
})

test("display shows a shot succed", () => {
    let ai_test  = new randomAI("ai")
    let response  = true
    ai_test.shotResponse([0,0], response)

    expect(ai_test.get_rivalBoard())
    .toStrictEqual([["*","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"]])
})

test("display shows a shot failed", () => {
    let ai_test  = new randomAI("ai")
    let response  = false
    ai_test.shotResponse([2,2], response)
    ai_test.shotResponse([9,9], response)

    expect(ai_test.get_rivalBoard())
    .toStrictEqual([["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","1","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","1"]])
})

describe("rivals shot responses", () => {

    test.todo("asd")
    test.todo("adsdas")
    test.todo("todo")
})