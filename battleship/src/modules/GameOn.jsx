import { Player } from "./Player"
import { Ship } from "./Ship"

class GameOn {
    static init = (self = this) => {
        self.#populatePlayers()
        self.#populateStartingShips()
        self.#shippingToOpenSea()
    }

    static #populatePlayers = (self = this) => {
        self.Player1 = new Player({ name: 'Player 1'})
        self.Player2 = new Player({ name:'Computer', isAI:true})
    }

    static #populateStartingShips = (players = Player.list, ship = Ship) => {
        for (let i = 0; i < players.length; i++) {
            players[i].shipYard.push(new ship({ length: 1 }))
            players[i].shipYard.push(new ship({ length: 1 }))
            players[i].shipYard.push(new ship({ length: 1 }))
            players[i].shipYard.push(new ship({ length: 1 }))
            players[i].shipYard.push(new ship({ length: 2 }))
            players[i].shipYard.push(new ship({ length: 2 }))
            players[i].shipYard.push(new ship({ length: 2 }))
            players[i].shipYard.push(new ship({ length: 3 }))
            players[i].shipYard.push(new ship({ length: 3 }))
            players[i].shipYard.push(new ship({ length: 4 }))
        }
    }

    static #shippingToOpenSea = (self = this, players = Player.list) => {
        for (let i = 0; i < players.length; i++) {
            const player = players[i]
            while (player.shipYard.length !== 0){
                let before = player.board.ships.length
                player.board.placeShip(self.#randomizePlacement(), player.shipYard[0])
                let after = player.board.ships.length
                if (before !== after) {
                    player.shipYard.shift()
                }

            }
        }
        return true
    }

    static #randomizePlacement = () => {
        const random = (max) => {
            return Math.floor(Math.random() * max)
        }
        const directionOptions = ["north","east","south","west"]
        return {
            row:random(10),
            col:random(10),
            direction:directionOptions[random(4)]
        }
    }
}

export { GameOn }