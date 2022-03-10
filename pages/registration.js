import React from "react";
// import styles from "../styles/registration.scss";

export default function Registration() {
  return (
    <main className="main-form container">
      <form>
        <div>
          <label>Full name:</label>
          <input type="text" name="full_name" required />
          <label>Gender</label>
            <select
              // value={props.data.favColor}
              // onChange={props.handleChange}
              // name="favColor"
              // style={{ width: "200px" }}
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          <label>Age Range (Select one that applies)</label>
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
          <label>Office/Position held in the choir</label>
          <input type="text"></input>
          <label>Your ministry within the choir (Check)</label>
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
          <label>Do you have prior music literacy?</label>
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
          <label>What is your level of Music literacy?</label>
          <input type="text"></input>
          <label>Denomination</label>
          <input type="text"></input>
          <label>Region (Select one that applies)</label>
          <input type="text"></input>
          <label>DCC/Zone (if not a CAC member, type Non-CAC)</label>
          <input type="text"></input>
          <label>District (if not a CAC member, type Non-CAC)</label>
          <input type="text"></input>
          <label>Name of Assembly Pastor</label>
          <input type="text"></input>
          <label>Phone number of Assembly Pastor</label>
          <input type="text"></input>
          <label>Name of Church Choir Master</label>
          <input type="text"></input>
          <label>Phone number of Church Choir Master</label>
          <input type="text"></input>
          <label>Church Name</label>
          <input type="text"></input>
          <label>What Instrument(s) do you play?</label>
          <textarea
            // value={"default value"}==
            // onChange={props.handleChange}
            style={{ width: "95%", height: "100px" }}
          />
          <label>Which of these workshops will you like to attend?</label>
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Strings
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Percussions
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Keyboards/Organ
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Woodwinds
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Brass
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Vocal Coaching
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Conducting
          <label>What part do you sing?</label>
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Soprano
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Alto
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Tenor
          <input
            type="radio"
            name="gender"
            value="male"
            // checked={props.data.gender === "male"}
            // onChange={props.handleChange}
          />{" "}
          Bass
          <label>T-shirt size (Select one that applies)</label>
          <select
          // value={props.data.favColor}
          // onChange={props.handleChange}
          // name="favColor"
          // style={{ margin: "20px" }}
          >
            <option value=""> Select the right t-shirt </option>
            <option value="Blue">Child</option>
            <option value="Green">Small</option>
            <option value="Red">Medium</option>
            <option value="Orange">Large</option>
            <option value="Yellow">XL</option>
            <option value="Yellow">XXL</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}
