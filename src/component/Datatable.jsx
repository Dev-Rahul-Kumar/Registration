import React, { useEffect, useRef, useState } from "react";
import "./Style/table.css";
import axios from "axios";
import DataTables from "datatables.net-dt";

export default function Datatable() {
  const [info, setInfo] = useState([]);
  const apidata = async () => {
    try {
      const url = "http://localhost:5000/get-user";
      const response = await axios.get(`${url}`);
      // console.log(response.data);
      setInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(info.name);

  const tableRef = useRef(null);
  const datatableref = useRef(null);
  const datatable = () => {
    apidata();
    const exampleTable = tableRef.current;

    console.log(info);
    if(info.length>0 && !datatableref.current){
    datatableref.current = new DataTables(exampleTable, {
      data:info,
      columns: [
        { title: "Name" },
        { title: "DOB" },
        { title: "sex" },
        { title: "Mobile" },
        { title: "Address" },
        { title: "Govt id" },
        { title: "Guardian" },
        { title: "Guardian Name" },
        { title: "Nationality" },
      ],
    })};
    return () => {
      if (datatableref.current) {
        datatableref.current.destroy();
        datatableref.current = null;
      }
    };
  };

  useEffect(() => {
    datatable();
  }, []);

  return (
    <>
      <div className="header">
        <h1>All Register Candidate</h1>
        <table
          id="example"
          ref={tableRef}
          className="display"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>sex</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Govt ID</th>
              <th>GUARDIAN</th>
              <th>Guardian Name</th>
              <th>Nationality</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

// {
//   data: info,

//   columns: [
//     { title: "Name" },
//     { title: "DOB" },
//     { title: "sex" },
//     { title: "Mobile" },
//     { title: "Address" },
//     { title: "Govt id" },
//     { title: "Guardian" },
//     { title: "Guardian Name" },
//     { title: "Nationality" },
//   ],
// }

{
  /* <tbody>
            {info?.map((user,key) => (

              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.DOB}</td>
                <td>{user.sex}</td>
                <td>{user.Mobile}</td>
                <td>{user.address}</td>
                <td>{user.idtype}</td>
                <td>{user.guardian}</td>
                <td>{user.guardianName}</td>
                <td>{user.Nationality}</td>
              </tr>
            ))}
          </tbody> */
}
