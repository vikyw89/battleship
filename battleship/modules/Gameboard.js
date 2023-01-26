import { Ship } from "./Ship"

class Gameboard {
    static count = 0
    static list = []
    constructor () {
        this.board = [...new Array(10)].map(el=>{
            return [...new Array(10).fill(null)]
        })
        Gameboard.count++
        this.ships = []
        Gameboard.list.push(this)
    }

    placeShip = (position, self = this) =>{
        const { row, col, length, axis } = position
        const newShip = new Ship({ length:length })
        self.ships.push(newShip)
        // placing ship on the board
        switch (axis) {
            case "x":
                if (col + length > 10) return
                for (let i = 0; i < length; i++){
                    self.board[row][col+i] = newShip
                }
                break
            case "y":
                if (row + length > 10) return
                for (let i = 0; i < length; i++){
                    self.board[row+i][col] = newShip
                }
                break
            default:
                return
        }
    }

    receiveAttack = ({ row, col }, self = this) =>{
        switch (true) {
            case self.board[row][col] === null:
                self.board[row][col] = "miss"
                break
            case self.board[row][col] !== null:
                self.board[row][col].hit()
                self.board[row][col] = "hit"
                break
        }
    }

    report = (self = this) => {
        const sunkenShips = self.ships.filter(ship=>{
            return ship.isSunk()
        })
        const operationalShips = self.ships.filter(ship=>{
            return !ship.isSunk()
        })
        return {
            sunkenShips,
            operationalShips
        }
    }
}

export { Gameboard }