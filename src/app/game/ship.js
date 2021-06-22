
const Ship = (length_size) => {
    let length = length_size;
    let life = length_size;
    let sunk = false;

    const shipLength = () => {
        return length
    }

    const status = () => {
        return life
    }

    const hit = () => {
        life -= 1
        if (life === 0){
            sunk = true
        }
    }

    const isSunk = () => {
        return sunk
    }

    return {hit, isSunk, shipLength, status}
}

export default Ship