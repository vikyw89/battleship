class Ship {
    constructor ({ length }, self = this) {
        self.length = length ?? 0
    }
    hits = 0

    isSunk = (self = this) => {
        return ((self.length - self.hits) <= 0)
    }

    hit = (self = this) => {
        self.hits++
    }
}

export { Ship }