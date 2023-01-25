class Ship {
    constructor ({ length }) {
        this.length = length ?? 0
    }
    hits = 0

    isSunk = () => {
        return ((this.length - this.hits) <= 0)
    }

    hit = () => {
        this.hits++
    }

}

export { Ship }