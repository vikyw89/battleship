import { describe, it, expect, beforeEach } from "vitest";

describe('Battleship', ()=> {
    let Battleship, Player
    beforeEach(async()=>{
        const mod = await import('./Battleship')
        const mod2 = await import('./Player')
        Battleship = mod.Battleship
        Player = mod2.Player
    })
    it('init =>', ()=> {
        Battleship.init()
        expect(Player.list.length).toBe(2)
        expect(Player.list[0].board.ships.length).toEqual(10)
        expect(Player.list[1].board.ships.length).toEqual(10)
    })
})