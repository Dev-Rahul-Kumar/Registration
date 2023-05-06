import React from "react";
// import "./Style/form.css";
import "./Style/forms.css";
import { registrationSchema } from "../Validation/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormDetail() {
  const starstyle = {
    color: "red",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registrationSchema) });

  const navigate = useNavigate();

  const onsubmit = async (data) => {
    const isvalid = await registrationSchema.isValid(data);
    if (isvalid == true) {
      try {
        const url = "http://localhost:5000/register-user";
        const response = await axios.post(`${url}`, data);
        console.log(response);
        alert("Registration Successful");
        navigate('register-data');
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Check your registration form and submit again...!!!!");
    }
    console.log(data);
  };

  return (
    <>
      <div className="formdetail">
        <form className="forum" onSubmit={handleSubmit(onsubmit)}>
          <div className="headerline"></div>
          <h4 className="bottom">Personal Details</h4>
          <div className="p_detail  gap">
            <div className="name">
              <label htmlFor="name">
                Name <span style={starstyle}>*</span>
              </label>
              <input
                type="text"
                id="name"
                className="input"
                placeholder="Enter Name"
                size={40}
                {...register("name", {})}
              />
              <p style={starstyle}>{errors.name?.message}</p>
            </div>
            <div className="birth left">
              <label htmlFor="DOB">
                Date of Birth or Age<span style={starstyle}>*</span>
              </label>
              <input
                type="text"
                id="DOB"
                className="input"
                placeholder="DD/MM/YYYY or Age in Years"
                name="DOB"
                size={20}
                {...register("DOB")}
              />
              <p style={starstyle}>{errors.DOB?.message}</p>
            </div>

            <div className="gender left">
              <label htmlFor="sex">
                Sex<span style={starstyle}>*</span>
              </label>
              <select
                name="sex"
                style={{ width: "200", height: "30" }}
                id="sex"
                {...register("sex")}
                className="select"
              >
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
                className="input"
                id="Mobile"
                placeholder="Enter Mobile"
                {...register("Mobile")}
              />
              <p style={starstyle}>{errors.Mobile?.message}</p>
            </div>

            <div className="id width left">
              <label htmlFor="Govtid">Govt Issued ID</label>
              <select
                name="idtype"
                className="select"
                id="Govtid"
                {...register("idtype")}
              >
                <option value="Default">ID Type</option>
                <option value="Aadhar">Aadhar card</option>
                <option value="PAN">PAN Card</option>
                <option value="Voter">Voter ID</option>
                <option value="Drivinglicence">Driving Licence</option>
              </select>
              <input
                type="text"
                id="Govtid"
                className="input"
                placeholder="Enter Govt ID"
                name="idno"
                {...register("idno")}
              />
              <p style={starstyle}>{errors.idno?.message}</p>
            </div>
          </div>


          <br />
          <h4 className="bottom">Contact Details</h4>
          <div className="p_detail contact gap">
            <div className="guardian">
              <label htmlFor="guardians">Guardian Details</label>
              <select
                name="guardian"
                className="selects"
                id="guardians"
                {...register("guardian")}
              >
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
                className="inputs"
                name="guardianName"
                {...register("guardianName")}
              />
            </div>

            <div className="email left ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="inputs"
                placeholder="Enter Email"
                name="email"
                size={20}
                {...register("email")}
              />
            </div>

            <div className="emergency left">
              <label htmlFor="Emergency">Emergency Contact Number</label>
              <input
                type="tel"
                id="Emergency"
                placeholder="Enter Emergency Number"
                name="emergencyNumber"
                className="inputs"
                {...register("emergencyNumber")}
              />
            </div>
          </div>
          

          <br />
          <h4 className="bottom">Address Details</h4>
          
          <div className="p_detail address gap">
            <div className="Address">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                id="Address"
                name="address"
                className="input"
                placeholder="Enter Address"
                {...register("address")}
              />
            </div>

            <div className="state left">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                className="input"
                name="state"
                placeholder="Enter State"
                {...register("state")}
              />
            </div>

            <div className="city left">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                className="input"
                placeholder="Enter City/town/village"
                name="city"
                {...register("city")}
              />
            </div>

            <div className="country width">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                className="form-control selectss"
                id="country"
                {...register("country")}
              >
                <option value="0" label="Select a country ... ">
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
            </div>

            <div className="pincode left width">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                className="input"
                name="pincode"
                placeholder="Enter pincode"
                {...register("pincode")}
              />
            </div>
          </div>
          
          <br />
          <h4 className="bottom">Other Details</h4>
          <div className="other p_detail gap">
            <div className="occupation">
              <label htmlFor="occupation">Occupation</label>
              <input
                type="text"
                id="occupation"
                className="inputs"
                name="occupation"
                placeholder="Enter occupation"
                {...register("occupation")}
              />
            </div>

            <div className="religion left">
              <label htmlFor="religion">Religion</label>
              <select name="religion" className="selects" id="religion" {...register("religion")}>
                <option value="0">Enter Religion</option>
                <option value="Hindu">Hindu</option>
                <option value="Muslim">Muslim</option>
                <option value="Jain">Jain</option>
                <option value="Buddha">Buddha</option>
                <option value="Christ">Christ</option>
              </select>
            </div>

            <div className="marital left">
              <label htmlFor="marital">Marital Status</label>
              <select name="marital" className="selectss" id="marital" {...register("marital")}>
                <option value="0">Enter Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Complicated">Complicated</option>
              </select>
            </div>

            <div className="blood left">
              <label htmlFor="Bloodgroup">Blood Group</label>
              <select
                name="Bloodgroup"
                id="Bloodgroup"
                className="selects"
                {...register("Bloodgroup")}
              >
                <option value="0">Group</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="nation width ">
              <label htmlFor="Nationality">Nationality</label>
              <input
                type="text"
                id="Nationality"
                placeholder="India"
                className="input"
                name="Nationality"
                {...register("Nationality")}
              />
            </div>
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
          </div>
        </form>
      </div>
    </>
  );
}
