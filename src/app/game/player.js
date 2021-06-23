import GameBoard from "./gameboard"

const Player = (playerName) => {
    const name = playerName
    const board = new GameBoard()
    //this is needed in player?
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

    const record_shotResponse = ([y_pos, x_pos], response) => {
        //this records the shot in the shots array//ai do not do this
        shots.push([y_pos, x_pos])
        if(response === true){
            rivalBoard[y_pos][x_pos] = "*"
        }else{
            rivalBoard[y_pos][x_pos] = "1"
        }
    }

    const send_shotResponse = ([y_pos, x_pos]) => {
        board.receiveAttack([y_pos, x_pos])
        let shootedCell = board.getBoard()[y_pos][x_pos]
        if(shootedCell === "1"){
            //a miss
            return "1"
        }else{
            //a hit
            return "*"
        }
    }

    const get_board = () => {
        return board
    }

    const get_name = () => {
        return name
    }

    const get_rivalBoard = () => {
        return rivalBoard
    }
    return {shipPlacement,
            get_board,
            get_name,
            get_rivalBoard,
            record_shotResponse,
            send_shotResponse}
}

export default Player