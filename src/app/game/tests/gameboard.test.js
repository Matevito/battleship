import Gameboard from "../gameboard"

let gameBoard = new Gameboard

test.only("place ships at specific and valid coordinates", () => {
    //(ship_name/length,position(y,x), direction)
    gameBoard.placeShip("a",5,[0,0],"horizontal")
    expect(gameBoard.getBoard())
    .toBe([ ["a","a","a","a","a","_","_","_","_","_"],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",]])
})

test("can place horizontal ships", () => {
    //(ship_name/length,position(y,x), direction)
    gameBoard.placeShip("b",3,[3,3],"horizontal")
    expect(gameBoard.getBoard())
    .toBe([ ["a","a","a","a","a","_","_","_","_","_"],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","b","b","b","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",]])
})

test("can place vertical ships", () => {
    //(ship_name/length,position(y,x), direction)
    gameBoard.placeShip("c",2,[4,0],"vertical")
    expect(gameBoard.getBoard())
    .toBe([ ["a","a","a","a","a","_","_","_","_","_"],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","b","b","b","_","_","_","_",],
            ["c","_","_","_","_","_","_","_","_","_",],
            ["c","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",]])
})

test("a ship cannot be placed in an invalid position", () => {
    //(ship_name/length,position(y,x), direction)
    expect(gameBoard.placeShip("d",4,[10,10],"vertical")).toBe("invalid")
})

test("cannot place a ship that start in the board and goes beyond it", () => {
    //(ship_name/length,position(y,x), direction)
    expect(gameBoard.placeShip("d",4,[9,9],"horizontal")).toBe("invalid")
})

test("invalid moves do not modify the board", () => {
    expect(gameBoard.getBoard())
    .toBe([ ["a","a","a","a","a","_","_","_","_","_"],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","b","b","b","_","_","_","_",],
            ["c","_","_","_","_","_","_","_","_","_",],
            ["c","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",],
            ["_","_","_","_","_","_","_","_","_","_",]])
})

//test of receiving attacks

test.todo("received attack fails")

test.todo("received attack succed")

test.todo("board tracks missed attacks")

test.todo("board shows failed attacks")

test.todo("boards can report if all ships  sunk")

test.todo("board can report if not all ships sunk") 
