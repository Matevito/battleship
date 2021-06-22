import Ship from "../ship"

let testShip_1 = new Ship(2)

test("a ship return it's valid length", () => {
    expect(testShip_1.shipLength()).toBe(2)
})

test("a ship can receive a hit", () => {
    testShip_1.hit()
    expect(testShip_1.status()).toBe(1)
})

test("a ship not sunk yet return false", () => {
    expect(testShip_1.isSunk()).toBe(false)
})

test("a ship can sunk", () => {
    //this kills a ship of 2 of length
    testShip_1.hit()
    expect(testShip_1.isSunk()).toBe(true)
})

/*
test.todo("a ship that is sunk cannot receive another hit")
*/