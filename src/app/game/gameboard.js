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
    let ships = []; //an array of dictionaries: shipname:, ship, position:beg-end

    const getBoard = () => {
        return board
    };

    const placeShip = (ship_name, length, [y_pos, x_pos], direction) => {
        //outputs if the ship placing is valid or invalid

        //todo: a fuynction that checks if a position is valid or invalid

        //add ship to ship's database
        let ship_object = new Ship(length)
        let ship = {name:ship_name, ship: ship_object}
        ships.push(ship)

        //add ship into board
        if(direction === "horizontal"){
            for(let x=x_pos; x<x_pos+length; x++){
                board[y_pos][x] = ship_name
            }
        }else if(direction === "vertical"){
            for(let y=y_pos; y<y_pos+length; y++){
                board[y][x_pos] = ship_name
            }
        }

        //this tells the game that the ship placement was valid
        return "valid"
    };

    return {getBoard, placeShip}
}

export default Gameboard