import { expect, describe, it, test } from 'vitest'
import { Ship } from './Ship'

describe('Ship', () => {
    const testShip = new Ship({ length:2 })
    it('stats of newly created ship', ()=>{
        expect(testShip.length).toBe(2)
        expect(testShip.hits).toBe(0)
        expect(testShip.isSunk()).toBe(false)
    })
    
    it('stats of hitted ship', () => {
        testShip.hit()
        testShip.hit()
        expect(testShip.hits).toBe(2)
    })

    it('hitted ships sunk', () => {
        expect(testShip.isSunk()).toBe(true)
    })
})