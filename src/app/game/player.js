import GameBoard from "./gameboard"

const Player = (playerName) => {
    const name = playerName
    const board = new GameBoard
    const shots = []
    const rivalBoard = [["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"],
                        ["_","_","_","_","_","_","_","_","_","_"]]

    const shipPlacement = (ship_name, length, position, direction) => {
        let shipValidity =  board.placeShip(ship_name, length, position, direction)
        if (shipValidity === "valid"){
            return "valid"
        }else{
            return "invalid"
        }
    }

    const get_board = () => {
        return board
    }

    const get_name = () => {
        return name
    }
    return {shipPlacement,
            get_board,
            get_name}
}

export default Player