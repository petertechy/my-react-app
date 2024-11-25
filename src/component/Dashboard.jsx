import React, { useState } from "react";
import NavBar from "./Navbar";

const Dashboard = ({children}) => {
  const [myNum, setmyNumber] = useState(0);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [allStudent, setallStudent] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const collectInfo = () => {
    const studentObject = {
      firstname,
      lastname,
      email,
      gender,
    };

    if (editIndex !== null) {
      const updatedStudents = [...allStudent];
      updatedStudents[editIndex] = studentObject;
      setallStudent(updatedStudents);
      setEditIndex(null);
    } else {
      setallStudent([...allStudent, studentObject]);
    }

    // Clear fields after submission
    setfirstname("");
    setlastname("");
    setEmail("");
    setGender("Male");
  };

  const deleteStudent = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
    if (confirmDelete) {
      const updatedStudents = [...allStudent];
      updatedStudents.splice(index, 1);
      setallStudent(updatedStudents); 
    }
  };

  const editStudent = (index) => {
    const student = allStudent[index];
    setfirstname(student.firstname);
    setlastname(student.lastname);
    setEmail(student.email);
    setGender(student.gender);
    setEditIndex(index);
  };

  return (
    <>
    <NavBar/>
      <div className="mx-auto container border shadow-sm my-4 p-3 rounded">
        <h1>{children}</h1>
        <h1 className="text-center text-success display-3 fw-bold">Student Sign Up</h1>
        <h2>{myNum}</h2>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter first name"
          onChange={(e) => setfirstname(e.target.value)}
          value={firstname}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Enter last name"
          onChange={(e) => setlastname(e.target.value)}
          value={lastname}
        />
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <select
          className="form-control mb-3"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button className="btn btn-success w-100 my-3" onClick={collectInfo}>
          {editIndex !== null ? "Update Student" : "Sign Up"}
        </button>
      </div>

      <hr />

      <div className="col-7 mx-auto my-4">
        <h1 className="text-center">Student List</h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Names</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allStudent.map((eachStudent, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`${eachStudent.firstname} ${eachStudent.lastname}`}</td>
                <td>{eachStudent.email}</td>
                <td>{eachStudent.gender}</td>
                <td>
                  <button
                    className="btn btn-outline-danger me-2"
                    onClick={() => deleteStudent(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => editStudent(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
