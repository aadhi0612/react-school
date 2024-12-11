import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
function LoginPage() {
  const [showPassword] = useState(false);
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Name is required.")
      .min(2, "Name must be at least 2 characters long.")
      .test("unique-name", "This name is already taken.", async (value) => {}),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must have at least 8 characters.")
      .matches(
        /^[a-zA-Z0-9!@#$%^&*]{8,16}$/,
        "Password must only contain letters, numbers, or !@#$%^&*."
      ),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
  });

  return (
    <div className="logini">
      <div className="login-box">
        <form className="f02" onSubmit={formik.handleSubmit}>
          <h1 className="loghead">LOGIN</h1>
          <div className="mb3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              lassName="form-label"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.username && formik.touched.username ? (
              <div className="error">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="mb3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
