import styles from './Cell.module.css'
import React from 'react'
import { useState } from 'react'

const Cell = ({ props, isHidden }) => {
    const [cell, setCell] = useState(props)
    let activeClass
    let display
    switch (props) {
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
            console.log(isHidden)
            activeClass = isHidden ? 'hidden' : `${styles.ship} ${props.isSunk() ? 'sunk' : ''}`
            break
    }
    return (
        <div className={`${styles.container} ${activeClass}`}>
            {display}
        </div>
    )
}

export { Cell }