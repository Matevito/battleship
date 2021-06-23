import Player from "../player"

describe("placing ships", () => {
    let testPlayer = new Player
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
    let testPlayer = new Player

    test.todo("rivalBoard shows a shot succed")
    test.todo("rivalBoard shows a shot failed")
    test.todo("player cannot make a shot already made")
})

describe("responding to enemy attemps", () => {
    let testPlayer = new Player

    test.todo("send_shootResponse handles a miss")
    test.todo("send_shootResponse handles a hit")
})
