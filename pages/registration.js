import React from "react";
import styles from "../styles/Registration.module.scss";

export default function Registration() {
  return (
    <main className={styles.container}>
      <form>
        <label>
          Full Name
          <input type="text"></input>
        </label>
        <label>
          Gender
          <select
          // value={props.data.favColor}
          // onChange={props.handleChange}
          // name="favColor"
          // style={{ margin: "20px" }}
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Age Range (Select one that applies)
          <select
          // value={props.data.favColor}
          // onChange={props.handleChange}
          // name="favColor"
          // style={{ margin: "20px" }}
          >
            <option value="">Select your age range</option>
            <option value="Below 12">Below 12</option>
            <option value="13 to 19">13 to 19</option>
            <option value="20 to 39">20 to 39</option>
            <option value="40 to 49">40 to 49</option>
            <option value="50 to 65">50 to 65</option>
            <option value="Above 65">Above 65</option>
          </select>
        </label>
        <label>
          Office/Position held in the choir
          <input type="text"></input>
        </label>
        <br />
        <label>
          Your ministry within the choir (Check)
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Worship Leader/Back up
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Musician
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Choir trainer
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Others
        </label>
        <br />
        <label>
          Do you have prior music literacy?
          <input
            type="radio"
            name="gender"
            value="yes"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Yes
          <input
            type="radio"
            name="gender"
            value="No"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          No
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
    </main>
  )
}
