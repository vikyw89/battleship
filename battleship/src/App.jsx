import React from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import styles from './App.module.css'
import { useState } from 'react'
import { Battleship } from './modules/Battleship'
import { BattleshipContext, SetBattleshipContext } from './components/BattleshipContext'

Battleship.init()
function App() {
  class Test {
    static test = () => {
      console.log('test')
    }
  }
  const Test2 = () => {
    const test = () => {
      console.log('test2')
    }
  }
  const [battleship2, setBattleship2] = useState(Test2)
  const [battleship, setBattleship] = useState(Test)
  return (
    <div className={styles.container}>
      <Header/>
        <BattleshipContext.Provider value={battleship}>
          <SetBattleshipContext.Provider value={setBattleship}>
            <Main/>
          </SetBattleshipContext.Provider>
        </BattleshipContext.Provider>
      <Footer/>
    </div>
  )
}

export default App