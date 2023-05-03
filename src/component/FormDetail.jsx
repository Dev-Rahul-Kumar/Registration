import React from "react";
import "./Style/form.css";

export default function FormDetail() {
  const starstyle = {
    color: "red",
  };
  return (
    <>
      <div className="formdetail">
        <form className="forum">
          <div className="headerline"></div>
          <div className="p_detail  gap">
            <h4>Personal Details</h4>
            <label htmlFor="name">
              Name <span style={starstyle}>*</span>
            </label>
            <input type="text" id="name" placeholder="Enter Name" size={40}/>

            <label htmlFor="DOB">
              Date of Birth or Age<span style={starstyle}>*</span>
            </label>
            <input
              type="text"
              id="DOB"
              placeholder="DD/MM/YYYY or Age in Years"
            />

            <label htmlFor="sex">
              Sex<span style={starstyle}>*</span>
            </label>
            <select name="sex" id="sex">
              <option value="Default">Enter Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>

            <label htmlFor="Mobile">Mobile</label>
            <input
              type="tel"
              name="Mobile"
              id="Mobile"
              placeholder="Enter Mobile"
            />

            <label htmlFor="Govtid">Govt Issued ID</label>
            <select name="idtype" id="Govtid">
              <option value="Default">ID Type</option>
              <option value="Aadhar">Aadhar card</option>
              <option value="PAN">PAN Card</option>
              <option value="Voter">Voter ID</option>
              <option value="Drivinglicence">Driving Licence</option>
            </select>
            <input type="text" id="Govtid" placeholder="Enter Govt ID" />
          </div>

          <div className="contact gap">
            <h4>Contact Details</h4>
            <label htmlFor="guardian">Guardian Details</label>
            <select name="guardian" id="guardian">
              <option value="Default">Enter Label</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Enter Guardian Name"
              id="guardian"
            />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" />

            <label htmlFor="Emergency">Emergency Contact Number</label>
            <input
              type="tel"
              id="Emergency"
              placeholder="Enter Emergency Number"
            />
          </div>

          <div className="address gap">
          <h4>Address Details</h4>
            <label htmlFor="Address">Address</label>
            <input type="text" id="Address" placeholder="Enter Address" />

            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="Enter State" />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter City/town/village"
            />

            <label htmlFor="country">Country</label>
            <select name="country" class="form-control" id="country">
              <option
                value="0"
                label="Select a country ... "
                selected="selected"
              >
                Select a country ...{" "}
              </option>

              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="SRILANKA">Srilanka</option>
              <option value="PAKISTAN">Pakistan</option>
              <option value="BANGLADESH">Bangladesh</option>
              <option value="NEPAL">Nepal</option>
              <option value="CHINA">China</option>
              
            </select>

            <label htmlFor="pincode">Pincode</label>
            <input type="text" id="pincode" placeholder="Enter pincode" />
          </div>

          <div className="other gap">
          <h4>Other Details</h4>
            <label htmlFor="occupation">Occupation</label>
            <input type="text" id="occupation" placeholder="Enter occupation"/>

            <label htmlFor="religion">Religion</label>
            <select name="religion" id="religion">
              <option  value="0" selected="selected">Enter Religion</option>
              <option  value="Hindu">Hindu</option>
              <option  value="Muslim">Muslim</option>
              <option  value="Jain">Jain</option>
              <option  value="Buddha">Buddha</option>
              <option  value="Christ">Christ</option>
            </select>

            <label htmlFor="marital">Marital Status</label>
            <select name="marital" id="marital">
              <option value="0" selected="selected">Enter Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Complicated">Complicated</option>
            </select>

            <label htmlFor="Bloodgroup">Blood Group</label>
            <select name="Bloodgroup" id="Bloodgroup">
              <option value="0" selected="selected">Group</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <label htmlFor="Nationality">Nationality</label>
            <input type="text" id="Nationality" placeholder="India" />


          </div>

          <button className="cancel">CANCEL</button>
          <button className="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
}
