import GameBoard from "./gameboard"

const randomAI = (aiName) => {
    const name = aiName
    const shots = []
    const board = new GameBoard;

    const random = (min=0, max=9) => {
        let num = Math.random() * (max-min)+min;
        return Math.round(num)
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
    }

    //const
    const randomPlacement = (board) => {
        //todo
        return []
    }

    const getName = () => {
        return name
    }

    return {randomShot, randomPlacement, getName}
    
}

export default randomAI