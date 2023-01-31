import styles from './Cell.module.css'
import React from 'react'

const Cell = ({ content, datakey, props }) => {
    const {row, col} = datakey
    const { board, generateMove, isAI, name, registerMove, shipYard } = props.player
    let activeClass
    let display
    switch (content) {
        case null:
            activeClass = styles.null
            break
        case 'miss':
            activeClass = styles.miss
            break
        case 'hit':
            activeClass = styles.hit
            break
        default:
            activeClass = isAI ? 'hidden' : `${styles.ship} ${content.isSunk ? 'sunk' : ''}`
            break
    }

    const handleClick = (e) => {
        e.stopPropagation()
        if (!isAI) return
        registerMove({row:row,col:col})
        console.log('move')
        console.log(BattleshipStore.listeners)
    }

    return (
        <div className={`${styles.container} ${activeClass}`} onClick={handleClick}>
            {display}
        </div>
    )
}

export { Cell }