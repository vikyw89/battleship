import { Ship } from "./Ship"

class Gameboard {
    board = [...new Array(10)].map(el=>{
        return [...new Array(10).fill(null)]
    })

    ships = []

    placeShip = (position) =>{
        const { row, col, length, axis } = position
        const newShip = new Ship({ length:length })
        this.ships.push(newShip)
        // placing ship on the board
        switch (axis) {
            case "x":
                if (col + length > 10) return
                for (let i = 0; i < length; i++){
                    this.board[row][col+i] = newShip
                }
                break
            case "y":
                if (row + length > 10) return
                for (let i = 0; i < length; i++){
                    this.board[row+i][col] = newShip
                }
                break
            default:
                return
        }
    }

    receiveAttack = ({ row, col }) =>{
        switch (true) {
            case this.board[row][col] === null:
                this.board[row][col] = "miss"
                break
            case this.board[row][col] !== null:
                this.board[row][col].hit()
                this.board[row][col] = "hit"
                break
        }
    }

    report = () => {

    }
}

export { Gameboard }