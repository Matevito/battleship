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
    let ships = {}; 

    //private functions
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

    //public functions

    const getBoard = () => {
        return board
    };

    const getShips = () => {
        return ships
    }

    const placeShip = (ship_name, length, [y_pos, x_pos], direction) => {
        //outputs if the ship placing is valid or invalid

        //1.check if the placement is valid
        let lastExpPosition = get_lastExpPosition([y_pos, x_pos], length, direction)
        if(validPosition(lastExpPosition) === false){
            return "invalid"
        }

        //1.5 check if the new ship path colides with another ship
        if(direction === "horizontal"){
            for(let x=x_pos; x<x_pos+length; x++){
                if (board[y_pos][x] !== "_"){
                    return "invalid"
                }
            }
        }else if(direction === "vertical"){
            for(let y=y_pos; y<y_pos+length; y++){
                if(board[y][x_pos] !== "_"){
                    return "invalid"
                }
            }
        }

        //2.add ship to ship's database
        let ship_object = new Ship(length)
        ships[ship_name] = ship_object

        //3.add ship to board
        //todo:implement ship path logic here!
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

    const allShipsSunk = () => {
        for(let ship_name in ships){
            let ship = ships[ship_name]
            if(ship.isSunk() === false){
                return false
            }
        }
        return true
    }

    const receiveAttack = ([y_pos, x_pos]) => {
        let position_status = board[y_pos][x_pos]

        if (position_status === "_"){
            board[y_pos][x_pos] = "1"
            return
        }

        let ship_name = position_status.toLowerCase()
        //shoot the ship in the database
        let ship_object = ships[ship_name]
        ship_object.hit()

        //display the shoot in the board
        board[y_pos][x_pos] = ship_name.toUpperCase()
    }

    return {getBoard, getShips, placeShip, allShipsSunk, receiveAttack}
}

export default Gameboard