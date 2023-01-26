import { afterEach, describe, expect, it, vi } from "vitest";
// import { Player } from "./Player";

describe("Player", ()=>{
    let Player
    beforeEach(async()=>{
        vi.resetModules()
        const mod = await import("./Player")
        Player = mod.Player
    })
    it("list => correct amount of player in the list", ()=> {
        const player1 = new Player({name:"viky"})
        expect(Player.count).toEqual(1)
        new Player({name:"computer"})
        expect(Player.count).toEqual(2)
    })
    it("generateMove => generate legal move", () => {
        console.log(Player.count)
        const player1 = new Player({ name: "test"})
        const computer = new Player({ name: "computer", isAI:true })
        const result = computer.generateMove()
        // Player.list[0].board.board[0][0] = "miss"

        console.log(JSON.stringify(Player.list[0]) === JSON.stringify(player1))
        console.log(player1.board.board[0][0])
        console.log(Player.list[0].board.board[0][0])
        expect().toEqual(result)
    })
})