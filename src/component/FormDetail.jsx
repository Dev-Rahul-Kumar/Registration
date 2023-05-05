import React from "react";
import "./Style/form.css";
import {registrationSchema} from "../Validation/validation";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

export default function FormDetail() {
  const starstyle = {
    color: "red",
  };
  
  
  const{register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(registrationSchema)})

  

  const onsubmit = (data) => {
    console.log(data);
    
  };
  return (
    <>
      <div className="formdetail">
        <form className="forum" onSubmit={handleSubmit(onsubmit)}>
          <div className="headerline"></div>
          <h4>Personal Details</h4>
          <div className="p_detail  gap">
            {/* <h4>Personal Details</h4> */}

            <div className="name width">
              <label htmlFor="name">
                Name <span style={starstyle}>*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                size={40}
                {...register("name",{
                  
                })}
              />
              <p style={starstyle}>{errors.name?.message}</p>
              
            </div>
            <div className="birth width">
              <label htmlFor="DOB">
                Date of Birth or Age<span style={starstyle}>*</span>
              </label>
              <input
                type="text"
                id="DOB"
                placeholder="DD/MM/YYYY or Age in Years"
                name="DOB"
                size={20}
                {...register("DOB")}
              />
              <p style={starstyle}>{errors.DOB?.message}</p>
            </div>

            <div className="gender width">
              <label htmlFor="sex">
                Sex<span style={starstyle}>*</span>
              </label>
              <select name="sex" id="sex" {...register("sex")}>
                <option value="">Enter Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <p style={starstyle}>{errors.sex?.message}</p>
            </div>
            <div className="mobile width">
              <label htmlFor="Mobile">Mobile</label>
              <input
                type="tel"
                name="Mobile"
                id="Mobile"
                placeholder="Enter Mobile"
                {...register("Mobile")}
              />
              <p style={starstyle}>{errors.Mobile?.message}</p>
            </div>

            <div className="id width">
              <label htmlFor="Govtid">Govt Issued ID</label>
              <select name="idtype" id="Govtid" {...register("idtype")}>
                <option value="Default">ID Type</option>
                <option value="Aadhar">Aadhar card</option>
                <option value="PAN">PAN Card</option>
                <option value="Voter">Voter ID</option>
                <option value="Drivinglicence">Driving Licence</option>
              </select>
              <input
                type="text"
                id="Govtid"
                placeholder="Enter Govt ID"
                name="idno"
                {...register("idno")}
              />
              <p style={starstyle}>{errors.idno?.message}</p>
            </div>
          </div>

          <div className="contact gap">
            <h4>Contact Details</h4>
            <label htmlFor="guardians">Guardian Details</label>
            <select name="guardian" id="guardians" {...register("guardian")}>
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
              id="guardians"
              name="guardianName"
              {...register("guardianName")}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
              {...register("email")}
            />

            <label htmlFor="Emergency">Emergency Contact Number</label>
            <input
              type="tel"
              id="Emergency"
              placeholder="Enter Emergency Number"
              name="emergencyNumber"
              {...register("emergencyNumber")}
            />
          </div>

          <div className="address gap">
            <h4>Address Details</h4>
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              id="Address"
              name="address"
              placeholder="Enter Address"
              {...register("address")}
            />

            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Enter State"
              {...register("state")}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="Enter City/town/village"
              name="city"
              {...register("city")}
            />

            <label htmlFor="country">Country</label>
            <select
              name="country"
              className="form-control"
              id="country"
              
              {...register("country")}
            >
              <option
                value="0"
                label="Select a country ... "
                // selected="defaultValue"
                // disabled
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
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Enter pincode"
              {...register("pincode")}
            />
          </div>

          <div className="other gap">
            <h4>Other Details</h4>
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="Enter occupation"
              {...register("occupation")}
            />

            <label htmlFor="religion">Religion</label>
            <select name="religion" id="religion" {...register("religion")}>
              <option value="0" selected="defaultValue">
                Enter Religion
              </option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Jain">Jain</option>
              <option value="Buddha">Buddha</option>
              <option value="Christ">Christ</option>
            </select>

            <label htmlFor="marital">Marital Status</label>
            <select name="marital" id="marital" {...register("marital")}>
              <option value="0" selected="defaultValue">
                Enter Marital Status
              </option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Complicated">Complicated</option>
            </select>

            <label htmlFor="Bloodgroup">Blood Group</label>
            <select name="Bloodgroup" id="Bloodgroup" {...register("Bloodgroup")}>
              <option value="0" selected="defaultValue">
                Group
              </option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <label htmlFor="Nationality">Nationality</label>
            <input
              type="text"
              id="Nationality"
              placeholder="India"
              name="Nationality"
              {...register("Nationality")}
            />
          </div>
          <div className="btn">
            <div className="cancelbtn">
              <button className="cancel">CANCEL</button>
            </div>
            <div className="submitbtn">
              <button className="submit" type="submit">
                SUBMIT
              </button>
            </div>
            {/* <button className="cancel">CANCEL</button>
            <button className="submit">SUBMIT</button> */}
          </div>
        </form>
      </div>
    </>
  );
}
