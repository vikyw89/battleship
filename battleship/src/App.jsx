import React from 'react'
import { useState } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'
import styles from './App.module.css'
import { GameOn } from './modules/GameOn'

function App() {
  GameOn.init()
  return (
    <div className={styles.container}>
      <Header/>
      <Main/>
        Test
      <Footer/>
    </div>
  )
}

export default App