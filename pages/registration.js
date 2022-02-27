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
          Age Range (Select one that applies)
          <input type="text"></input>
        </label>
        <label>
          Office/Position held in the choir
          <input type="text"></input>
        </label>
        <label>
          Your ministry within the choir (Check)
          <input type="text"></input>
        </label>
        <label>
          Do you have prior music literacy?
          <input type="text"></input>
        </label>
        <label>
          What is your level of Music literacy?
          <input type="text"></input>
        </label>
        <label>
          Denomination
          <input type="text"></input>
        </label>
        <label>
          Region (Select one that applies)
          <input type="text"></input>
        </label>
      </form>
    </div>
  );
}
