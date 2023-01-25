import { Ship } from "./Ship"

class Gameboard {
    constructor (){

    }
    board = [...new Array(10)].map(el=>{
        return [...new Array(10).fill(null)]
    })

    placeShip = (position) =>{
        const { row, col, length, axis } = position
        const newShip = new Ship({ length:length })
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
}

export { Gameboard }