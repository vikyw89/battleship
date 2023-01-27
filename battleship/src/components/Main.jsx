import styles from "./Main.module.css"
import React from 'react'
import { PlayerScreen } from "./PlayerScreen"
import { Player } from "../modules/Player"

const Main = () => {
  const [player1, player2] = Player.list
  return (
    <div className={styles.container}>
      <PlayerScreen props={player1}/>
      <PlayerScreen props={player2} isHidden={true}/>
    </div>
  )
}

export { Main }