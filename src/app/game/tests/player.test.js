import Player from "../player"

describe("placing ships", () => {
    let testPlayer = new Player("player 1")
    test("player can place multiples ships in it's show board", () => {
        testPlayer.shipPlacement("a",2,[0,0], "vertical")
        testPlayer.shipPlacement("b",4,[3,3], "horizontal")
        testPlayer.shipPlacement("c",3,[4,9], "vertical")
        let shipsData = testPlayer.get_board().getShips()
        let shipsData_length = Object.keys(shipsData).length
        
        expect(shipsData_length).toBe(3)
    })
    test("player cannot place ships in an already occupied position",()=>{
        testPlayer.shipPlacement("d", 5, [2,4], "vertical")
        let shipsData = testPlayer.get_board().getShips()
        let shipsData_length = Object.keys(shipsData).length

        expect(shipsData_length).toBe(3)
    })
})

describe("making attemps", () => {
    let testPlayer = new Player("player 1")

    test("rivalBoard shows a shot succed", () => {
        testPlayer.record_shotResponse([0,0],true)
        testPlayer.record_shotResponse([4,4],true)
        expect(testPlayer.get_rivalBoard())
        .toStrictEqual([["*","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","*","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"]])
    })
    test("rivalBoard shows a shot failed", () => {
        testPlayer.record_shotResponse([9,9],false)
        testPlayer.record_shotResponse([9,0],false)
        expect(testPlayer.get_rivalBoard())
        .toStrictEqual([["*","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","*","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["1","_","_","_","_","_","_","_","_","1"]])
    })
    //"player cannot make a shot already made"
})

describe("responding to enemy attemps", () => {
    let testPlayer = new Player("player 1")
    testPlayer.shipPlacement("a",4,[1,0], "vertical")
    testPlayer.shipPlacement("b",5,[2,3], "horizontal")
    testPlayer.shipPlacement("c",3,[4,3], "vertical")

    test("send_shootResponse handles a miss", () => {
        testPlayer.send_shotResponse([0,0])
        testPlayer.send_shotResponse([3,3])
        testPlayer.send_shotResponse([1,6])
        let playerBoard = testPlayer.get_board().getBoard()

        expect(playerBoard)
        .toStrictEqual([["1","_","_","_","_","_","_","_","_","_"],
                        ["a","_","_","_","_","_","1","_","_","_"],
                        ["a","_","_","b","b","b","b","b","_","_"],
                        ["a","_","_","1","_","_","_","_","_","_"],
                        ["a","_","_","c","_","_","_","_","_","_"],
                        ["_","_","_","c","_","_","_","_","_","_"],
                        ["_","_","_","c","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"]])
    })
    test("send_shootResponse handles a hit", () => {
        testPlayer.send_shotResponse([1,0])
        testPlayer.send_shotResponse([4,0])
        testPlayer.send_shotResponse([2,4])
        testPlayer.send_shotResponse([5,3])
        let playerBoard = testPlayer.get_board().getBoard()

        expect(playerBoard)
        .toStrictEqual([["1","_","_","_","_","_","_","_","_","_"],
                        ["A","_","_","_","_","_","1","_","_","_"],
                        ["a","_","_","b","B","b","b","b","_","_"],
                        ["a","_","_","1","_","_","_","_","_","_"],
                        ["A","_","_","c","_","_","_","_","_","_"],
                        ["_","_","_","C","_","_","_","_","_","_"],
                        ["_","_","_","c","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"]])
    })
})
