import { Gameboard } from "./Gameboard"

class Player {
    static list = []
    static count = 0
    static turnCount = 0

    static nextTurn = (self = Player) => {
        const nowPlaying = self.list[self.turnCount % self.count]
        self.turnCount++
        return nowPlaying
    }

    constructor ({ name, isAI }, self = this){
        this.name = name
        this.board = new Gameboard
        this.isAI = isAI ?? false
        Player.list.push(this)
        Player.count++
    }

    generateMove = (enemyBoard = Player.list.filter(el=>el!==this)[0].board.board) => {
        // console.log(Player.list[0].board.board)
        // make a row col combination that is null given the board
        let availableSpot = []
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 10; j++){
                if (enemyBoard[i][j] === null) {
                    availableSpot.push({row:i, col:j})
                }
            }
        }
        const availableSpotCount = availableSpot.length - 1
        const randomIndex = Math.floor(Math.random() * availableSpotCount)
        return availableSpot[randomIndex]
    }
}

export { Player }