import styles from './PlayerScreen.module.css'
import React from "react"
import { useState } from "react"
import { Cell } from './Cell'
import { ShipYard } from './ShipYard'

const PlayerScreen = ({ props, isHidden }) => {
    const [player, setPlayer] = useState(props)
    const { ships } = player.board
    return (
        <div className={styles.container}>
            <div className={styles.name}>{player.name}</div>
            <div className={styles.gridContainer}>
                {player.board.board.map((row,index)=>{
                    return row.map((col,index)=>{
                        return <Cell key={index} props={col}/>
                    })
                })}
            </div>
            <ShipYard props={ships}/>
        </div>
    )
}

export { PlayerScreen }