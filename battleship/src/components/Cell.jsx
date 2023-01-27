import styles from './Cell.module.css'
import React from 'react'
import { useState } from 'react'

const Cell = ({ props, isHidden }) => {
    const [cellClass, setCellClass] = useState(props)
    return (
        <div className={styles[cellClass]}>
        </div>
    )
}

export { Cell }