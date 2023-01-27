import { describe, it, expect, beforeEach } from "vitest";

describe('GameOn', ()=> {
    let GameOn, Player
    beforeEach(async()=>{
        const mod = await import('./GameOn')
        const mod2 = await import('./Player')
        GameOn = mod.GameOn
        Player = mod2.Player
    })
    it('init =>', ()=> {
        GameOn.init()
        expect(Player.count).toBe(2)
        expect(Player.list[0].board.ships.length).toEqual(10)
        expect(Player.list[1].board.ships.length).toEqual(10)
    })
})