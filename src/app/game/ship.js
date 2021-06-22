
const Ship = (length_size) => {
    let length = length_size;
    let life = length_size;
    let sunk = false;

    const hit = () => {
        life -= 1
        if (life === 0){
            sunk = true
        }
    }

    const isSunk = () => {
        return sunk
    }

    const shipLength = () => {
        return length
    }

    const status = () => {
        return life
    }

    return {hit, isSunk, shipLength, status}
}

export default Ship