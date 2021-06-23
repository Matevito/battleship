import GameBoard from "./gameboard"

const randomAI = (aiName) => {
    const name = aiName
    const board = new GameBoard;
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

    const random = (min=0, max=9) => {
        let num = Math.random() * (max-min)+min;
        return Math.round(num)
    }

    const randomDirection = (min=0, max=1) => {
        let num = Math.random() * (max-min)+min
        num = Math.round(num)
        if(num === 0){
            return "horizontal"
        }else{
            return "vertical"
        }
    }

    const get_randomCell = () => {
        let y_pos = random() 
        let x_pos = random()
        return [y_pos, x_pos]
    }

    const randomShot = () => {
        let shot = get_randomCell()
        while(shots.includes(shot)){
            //check if shot is already in shots record  
            shot = get_randomCell()
        }
        shots.push(shot)
        return "valid"
    }

    const randomPlacement = (ship_name, ship_length) => {
        let randomPos = get_randomCell()
        let randomDir = randomDirection()
        let shipsValidity = board.placeShip(ship_name, ship_length, randomPos, randomDir)
        while(shipsValidity === "invalid"){
            //call again another random position
            randomPos = get_randomCell()
            randomDir = randomDirection()
            shipsValidity = board.placeShip(ship_name, ship_length, randomPos, randomDir)
        }
    }

    const record_shotResponse = ([y_pos, x_pos], response) => {
        if (response === true){
            //displays a shot
            rivalBoard[y_pos][x_pos] = "*"
        }else{
            //displays a miss
            rivalBoard[y_pos][x_pos] = "1"
        }
    }

    const send_shotResponse = ([y_pos, x_pos]) => {
        let shottedCell = board.getBoard()[y_pos][x_pos]

        if(shottedCell !== "_"){
            //a hit
            return "*"
        }else{
            //a miss
            return "1"
        }
    }

    const getName = () => {
        return name
    }

    const get_rivalBoard = () => {
        return rivalBoard
    }
    const get_AIboard = () => {
        return board
    }

    return {randomShot,
        randomPlacement,
        getName,
        record_shotResponse,  
        send_shotResponse,
        get_rivalBoard,
        get_AIboard}
    
}

export default randomAI