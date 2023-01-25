import { beforeEach, describe, expect, it } from "vitest";
import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";


describe('Gameboard', ()=>{
    it('Gameboard.board initialized properly', ()=>{
        const newGameboard = new Gameboard
        expect(newGameboard.board).toEqual([...new Array(10)].map(el=> [...new Array(10).fill(null)]))
    })
    it('Ship is placed correctly on the board', ()=>{
        const newGameboard = new Gameboard
        newGameboard.placeShip({ row:0, col:0, length:2, axis:"x" })
        const newShip = new Ship({ length:2 })
        expect(JSON.stringify(newGameboard.board)).toEqual(JSON.stringify([
            [
                newShip, newShip, null,
                null, null, null,
                null, null, null,
                null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ]
        ]))
    })
    it('Ship is not placed when out of the board', ()=>{
        const newGameboard = new Gameboard
        newGameboard.placeShip({ row:0, col:9, length:2, axis:"x" })
        const newShip = new Ship({ length:2 })
        expect(JSON.stringify(newGameboard.board)).toEqual(JSON.stringify([
            [
                null, null, null,
                null, null, null,
                null, null, null,
                null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ]
        ]))
    })
    it("receiveAttack missed", () => {
        const newGameboard = new Gameboard
        newGameboard.receiveAttack({ row:0, col:0 })
        expect(JSON.stringify(newGameboard.board)).toEqual(JSON.stringify([
            [
                "miss", null, null,
                null, null, null,
                null, null, null,
                null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ]
        ]))
    })
    it("receiveAttack hit", () => {
        const newGameboard = new Gameboard
        newGameboard.placeShip({ row:0, col:0, length:1, axis:"x" })
        newGameboard.receiveAttack({ row:0, col:0 })
        const newShip = new Ship({ length:1 })
        newShip.hit()
        expect(JSON.stringify(newGameboard.ships[0])).toEqual(JSON.stringify(newShip))
        expect(JSON.stringify(newGameboard.board)).toEqual(JSON.stringify([
            [
                "hit", null, null,
                null, null, null,
                null, null, null,
                null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ],
            [
              null, null, null,
              null, null, null,
              null, null, null,
              null
            ]
        ]))
    })
})