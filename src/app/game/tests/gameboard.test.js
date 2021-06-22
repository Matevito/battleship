import Gameboard from "../gameboard"

let gameBoard = new Gameboard

test("place ships at specific and valid coordinates", () => {
    //(ship_name/length,position(y,x), direction)
    gameBoard.placeShip("a",5,[0,0],"horizontal")
    expect(gameBoard.getBoard())
    .toStrictEqual([ ["a","a","a","a","a","_","_","_","_","_"],
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
    .toStrictEqual([ ["a","a","a","a","a","_","_","_","_","_"],
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
    .toStrictEqual([ ["a","a","a","a","a","_","_","_","_","_"],
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

//tests to solve
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
    .toStrictEqual([ ["a","a","a","a","a","_","_","_","_","_"],
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

test("diplay and handles failed attacks", () => {
    gameBoard.receiveAttack([9,9])

    expect(gameBoard.getBoard())
    .toStrictEqual([ ["a","a","a","a","a","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","b","b","b","_","_","_","_",],
    ["c","_","_","_","_","_","_","_","_","_",],
    ["c","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","1",]])
})

test("display success attacks", () => {
    gameBoard.receiveAttack([0,0])

    //attacks on ship are upper case letters of the corresponding ship name
    expect(gameBoard.getBoard())
    .toStrictEqual([ ["A","a","a","a","a","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","b","b","b","_","_","_","_",],
    ["c","_","_","_","_","_","_","_","_","_",],
    ["c","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","_",],
    ["_","_","_","_","_","_","_","_","_","1",]])
})

test("handles success attacks in ship's data", () => {
    let shipsData = gameBoard.getShips()
    
    //if the ship receive an attack is life would be 4
    expect(shipsData["a"].status()).toBe(4)
})

test("board can report if not all ships sunk", () => {
    gameBoard.receiveAttack([0,1])
    gameBoard.receiveAttack([0,2])
    gameBoard.receiveAttack([0,3])
    gameBoard.receiveAttack([0,4])

    expect(gameBoard.allShipsSunk()).toBe(false)
})

test("boards can report if all ships sunk", () => {
    gameBoard.receiveAttack([3,3])
    gameBoard.receiveAttack([3,4])
    gameBoard.receiveAttack([3,5])
    gameBoard.receiveAttack([4,0])
    gameBoard.receiveAttack([5,0])

    expect(gameBoard.allShipsSunk()).toBe(true)
})
