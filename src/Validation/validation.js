import * as yup from 'yup';
import { when } from 'yup'

const phoneRegExp = /^[0-9]{10}$/;
const phoneRegExp2 = /^[6-9]\d{9}$/;
const alphanumeric = /^([a-zA-Z]){5}([0-11]){4}([a-zA-Z]){1}?$/;



export const registrationSchema= yup.object().shape({
    name: yup.string().required("Please enter your name"),
    DOB:yup.string().required("Enter your Age or DOB"),
    sex:yup.string().required("Select your Gender"),
    Mobile: yup.string().matches(phoneRegExp2, 'Enter valid indian mobile number').required("Your Mobile number"),
    idtype: yup.string().required("Govt Id is required"),
    idno: yup.string().matches(phoneRegExp,'Valid Govt id number is required').required('required to fill'),
    // idno:yup.string().when('idtype', {
    //     is: (idtype) => idtype === 'Aadhar',
    //     then: yup.string()
    //       .required('Govt Id is required')
    //       .matches(/^\d{12}$/, 'Govt Id should be a valid 12-digit numeric string'),
    //     otherwise: yup.string()
    //       .required('Govt Id is required')
    //       .matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, 'Govt Id should be a valid 10-digit alpha-numeric string')
    //   }),

   

    guardian: yup.string(),
    guardianName: yup.string(),
    email:yup.string().email().required("Enter your email id"),
    emergencyNumber:yup.string().matches(phoneRegExp2, 'Enter valid indian mobile number').required("Please Enter 10 digit number "),
    address:yup.string(),
    state:yup.string(),
    city:yup.string(),
    country:yup.string(),
    pincode:yup.number(),
    occupation:yup.string(),
    religion:yup.string(),
    marital:yup.string(),
    Bloodgroup:yup.string(),
    Nationality:yup.string()
})


