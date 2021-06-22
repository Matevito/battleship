import Ship from "./ship"

const Gameboard = () => {
    let board = [  ["_","_","_","_","_","_","_","_","_","_"],
                    ["_","_","_","_","_","_","_","_","_","_",],
                    ["_","_","_","_","_","_","_","_","_","_",],
                    ["_","_","_","_","_","_","_","_","_","_",],
                    ["_","_","_","_","_","_","_","_","_","_",],
                    ["_","_","_","_","_","_","_","_","_","_",],
                    ["_","_","_","_","_","_","_","_","_","_",],
                    ["_","_","_","_","_","_","_","_","_","_",],
                    ["_","_","_","_","_","_","_","_","_","_",],
                    ["_","_","_","_","_","_","_","_","_","_",]];
    let ships = [];

    const getBoard = () => {
        return board
    };

    const placeShip = (ship_name, length, [y_pos, x_pos], direction) => {
        //outputs if the ship placing is valid or invalid

        //todo: a fuynction that checks if a position is valid or invalid
    };

    return {getBoard, placeShip}
}

export default Gameboard