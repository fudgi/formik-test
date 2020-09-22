import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";
import "./styles-custom.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.errors.firstName && formik.touched.firstName ? (
        <div className="error">{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.errors.lastName && formik.touched.lastName ? (
        <div className="error">{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('firstName')}
      />
      {formik.errors.email && formik.touched.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
