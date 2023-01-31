import styles from "./Main.module.css"
import React, { useContext, useEffect, useState, useSyncExternalStore } from 'react'
import { PlayerScreen } from "./PlayerScreen"

const Main = () => {
  const { player1, player2 } = useContext(battleship)
  console.log(player1, player2)
  return (
    <div className={styles.container}>
      <PlayerScreen player={player1}/>
      <PlayerScreen player={player2}/>
    </div>
  )
}

export { Main }