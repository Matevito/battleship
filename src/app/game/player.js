import GameBoard from "./gameboard"

const Player = (playerName) => {
    const name = playerName
    const shots = []
    const board = new GameBoard
    const rival_board = []

    const makeShot = ([y_pos, x_pos]) => {
        let shot = [y_pos, x_pos];
        //todo:
    } 

    return {makeShot}
}

export default Player