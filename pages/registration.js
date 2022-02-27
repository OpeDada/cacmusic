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
        <label>
          DCC/Zone (if not a CAC member, type Non-CAC)
          <input type="text"></input>
        </label>
        <label>
          District (if not a CAC member, type Non-CAC)
          <input type="text"></input>
        </label>
        <label>
          Name of Assembly Pastor
          <input type="text"></input>
        </label>
        <label>
          Phone number of Assembly Pastor
          <input type="text"></input>
        </label>
        <label>
          Name of Church Choir Master
          <input type="text"></input>
        </label>
        <label>
          Phone number of Church Choir Master
          <input type="text"></input>
        </label>
        <label>
          Church Name
          <input type="text"></input>
        </label>
        <label>
          What Instrument(s) do you play?
          <input type="text"></input>
        </label>
        <label>
          Which of these workshops will you like to attend?
          <input type="text"></input>
        </label>
        <label>
          What part do you sing?
          <input type="text"></input>
        </label>
        <label>
          T-shirt size (Select one that applies)
          <input type="text"></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
