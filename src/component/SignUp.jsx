import React, { useState } from "react";
import NavBar from "./Navbar";
import { useFormik } from "formik";
import * as yup from "yup";

const SignUp = ({ children }) => {
  const [allStudent, setAllStudent] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      gender: "Male",
      password: "",
    },
    validationSchema: yup.object({
      firstname: yup.string().required("First name is required"),
      lastname: yup.string().required("Last name is required"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
      password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      if (editIndex !== null) {
        const updatedStudents = [...allStudent];
        updatedStudents[editIndex] = values;
        setAllStudent(updatedStudents);
        setEditIndex(null);
      } else {
        setAllStudent([...allStudent, values]);
      }
      formik.resetForm();
    },
  });

  const deleteStudent = (index) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const updatedStudents = [...allStudent];
      updatedStudents.splice(index, 1);
      setAllStudent(updatedStudents);
    }
  };

  const editStudent = (index) => {
    const student = allStudent[index];
    formik.setValues(student);
    setEditIndex(index);
  };

  return (
    <>
      <NavBar />
      <div className="mx-auto container border shadow-sm my-4 p-3 rounded">
        <h1>{children}</h1>
        <h1 className="text-center text-success display-3 fw-bold">Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Enter first name"
            name="firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <small className="text-danger">{formik.errors.firstname}</small>
          )}
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Enter last name"
            name="lastname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastname}
          />
          {formik.touched.lastname && formik.errors.lastname && (
            <small className="text-danger">{formik.errors.lastname}</small>
          )}
          <input
            className="form-control mb-3"
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <small className="text-danger">{formik.errors.email}</small>
          )}
          <input
            className="form-control mb-3"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <small className="text-danger">{formik.errors.password}</small>
          )}
          <select
            className="form-control mb-3"
            name="gender"
            onChange={formik.handleChange}
            value={formik.values.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit" className="btn btn-success w-100 my-3">
            {editIndex !== null ? "Update" : "Sign Up"}
          </button>
        </form>
      </div>

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
            {allStudent.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`${student.firstname} ${student.lastname}`}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
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

export default SignUp;
