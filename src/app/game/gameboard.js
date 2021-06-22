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

    const validPosition = ([y_pos, x_pos]) => {
        if(y_pos > 9 || y_pos < 0){
            return false
        }else if (x_pos > 9 || x_pos < 0){
            return false
        }
        return true
    }

    const get_lastExpPosition = ([y_pos, x_pos], length, direction) => {
        if(direction === "horizontal"){
            let last_x = x_pos + length
            return [y_pos, last_x]
        }else{
            let last_y = y_pos + length
            return [last_y, x_pos]
        }
    }

    const getBoard = () => {
        return board
    };

    const placeShip = (ship_name, length, [y_pos, x_pos], direction) => {
        //outputs if the ship placing is valid or invalid

        //1.check if the placement is valid
        let lastExpPosition = get_lastExpPosition([y_pos, x_pos], length, direction)
        if(validPosition(lastExpPosition) === false){
            return "invalid"
        }

        //2.add ship to ship's database
        //todo: add ships position path?
        let ship_object = new Ship(length)
        let ship = {name:ship_name, ship: ship_object}
        ships.push(ship)

        //3.add ship to board
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