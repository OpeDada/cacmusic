import React from "react"
import styles from '../styles/Registration.module.css'

export default function Registration(){
  return (
    <div className="styles.container">
      <form>
        <label>
          Full Name
          <input type="text"></input>
        </label>
        <label>
          Gender
          <input type="text"></input>
        </label>
        <label>
          Age Range
          <input type="text"></input>
        </label>
      </form>

    </div>
  )
}
