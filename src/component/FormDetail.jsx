import React from "react";
import "./Style/form.css";

export default function FormDetail() {
    const starstyle={
        color:"red"
    }
  return (
    <>
      <div className="formdetail">
        <form>
          <div className="headerline"></div>
          <div className="p_detail">
            <h4>Personal Details</h4>
            <label htmlFor="name">Name <span style={starstyle}>*</span></label>
            <input type="text" id="name" placeholder="Enter Name" />

            <label htmlFor="DOB">Date of Birth or Age<span style={starstyle}>*</span></label>
            <input type="text" id="DOB" placeholder="DD/MM/YYYY or Age in Years" />

            <label htmlFor="sex">Sex<span style={starstyle}>*</span></label>
            <select name="sex" id="sex">
                <option value="Default">Enter Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </select>

            <label htmlFor="Mobile">Mobile</label>
            <input type="tel" name="Mobile" id="Mobile" placeholder="Enter Mobile" />


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
        </form>
      </div>
    </>
  );
}
