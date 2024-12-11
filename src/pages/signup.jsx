import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
function SignUpPage() {
  const [formData, setFormData] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const[isDeleting,setIsDeleting]=useState(false);
  const[deleteIndex,setDeleteIndex]=useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const validationSchema = Yup.object({
   gender: Yup.string().required("Gender is required."),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required.")
      .test("unique-email", "This email is already taken.", (value) => {
        if (isUpdating) 
          return true; 
        return !formData.some((item) => item.email === value);
      }),
    password:Yup.string()
      .min(8, "Password must have at least 8 characters.")
      .matches(
        /^[a-zA-Z0-9!@#$%^&*]{8,16}$/,
        "Password must only contain letters, numbers, or !@#$%^&*."
      )
      .required("Password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match!")
      .required("Please confirm your password."),
    branch: Yup.string().required("Branch is required."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      email: "",
      password: "",
      confirmPassword: "",
      branch: "CSE",
    },
    validationSchema,
    onSubmit: (values) => {
      if (isUpdating) {
        const updatedData = [...formData];
        updatedData[updateIndex] = values;
        setFormData(updatedData);
        setIsUpdating(false);
        setUpdateIndex(null);
      } else {
        setFormData([...formData, values]);
      }
      if(isDeleting)
      {
        const deleteData=[...formData];
        deleteData[deleteIndex]=values;
        setFormData(deleteData);
        setIsDeleting(false);
        setDeleteIndex(null);
      }
      else{
        setFormData([...formData,values]);
      }
      formik.resetForm();
    },
  });

  const handleUpdate = (index) => {
    const dataToUpdate = formData[index];
    setUpdateIndex(index);
    setIsUpdating(true);
    formik.setValues(dataToUpdate);
  };
  const handleDelete=(index)=>{
    const dataToDelete=formData[index];
    setDeleteIndex(index);
    setIsDeleting(true);
    formik.setValues(dataToDelete);
  };

  return (
    <div className="bg-login">
      <div className="formformat">
        <form
          className="f01"
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <h1 className="text-center mb-4">{isUpdating ? "UPDATE" : "SIGNUP"}</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              {...formik.getFieldProps("name")}
              className={`form-control ${
                formik.touched.name && formik.errors.name ? "is-invalid" : ""
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="invalid-feedback">{formik.errors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Gender:</label>
            <div>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formik.values.gender === "Male"}
                onChange={() => formik.setFieldValue("gender", "Male")}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formik.values.gender === "Female"}
                onChange={() => formik.setFieldValue("gender", "Female")}
              />{" "}
              Female
            </div>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-danger">{formik.errors.gender}</div>
            )}
          </div>
          <div className="mb-3">
  <label htmlFor="password" className="form-label">
    Password:
  </label>
  <div className="input-group">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      placeholder="Enter your password"
      {...formik.getFieldProps("password")}
      className={`form-control ${
        formik.touched.password && formik.errors.password
          ? "is-invalid"
          : ""
      }`}
    />
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="showPassword"
        checked={showPassword}
        onChange={() => setShowPassword(!showPassword)}
      />
      <label className="form-check-label" htmlFor="showPassword">
        Show Password
      </label>
    </div>
  </div>
  {formik.touched.password && formik.errors.password && (
    <div className="invalid-feedback">{formik.errors.password}</div>
  )}
</div>
<div className="mb-3">
  <label htmlFor="confirmPassword" className="form-label">
    Confirm Password:
  </label>
  <div className="input-group">
    <input
      type={showConfirmPassword ? "text" : "password"}
      name="confirmPassword"
      placeholder="Confirm your password"
      {...formik.getFieldProps("confirmPassword")}
      className={`form-control ${
        formik.touched.confirmPassword &&
        formik.errors.confirmPassword
          ? "is-invalid"
          : ""
      }`}
    />
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id="showConfirmPassword"
        checked={showConfirmPassword}
        onChange={() => setShowConfirmPassword(!showConfirmPassword)}
      />
      <label className="form-check-label" htmlFor="showConfirmPassword">
        Show Confirm Password
      </label>
    </div>
  </div>
  {formik.touched.confirmPassword &&
    formik.errors.confirmPassword && (
      <div className="invalid-feedback">
        {formik.errors.confirmPassword}
      </div>
    )}
</div>
          
    <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              {...formik.getFieldProps("email")}
              className={`form-control ${
                formik.touched.email && formik.errors.email
                  ? "is-invalid"
                  : ""
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="branch" className="form-label">
              Branch:
            </label>
            <select
              name="branch"
              {...formik.getFieldProps("branch")}
              className={`form-control ${
                formik.touched.branch && formik.errors.branch
                  ? "is-invalid"
                  : ""
              }`}
            >
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="CSBS">CSBS</option>
              <option value="ECE">ECE</option>
            </select>
          </div>
          <div className="d-flex gap-3">
            <button type="submit" className="btn btn-primary">
              {isUpdating ? "Update" : "Submit"}
            </button>
            <button
              type="reset"
              className="btn btn-primary"
              onClick={() => {
                formik.resetForm();
                setIsUpdating(false);
                setUpdateIndex(null);
              }}
            >
              Reset
            </button>
          </div>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Password</th>
              <th>Email</th>
              <th>Branch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.gender}</td>
                <td>{data.password}</td>
                <td>{data.email}</td>
                <td>{data.branch}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleUpdate(index)}
                  >
                    Update
                  </button>
                  </td>
                  <td>
                    <button type="button"
                    className="btn btn-primary"
                    onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default SignUpPage;