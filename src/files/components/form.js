import React, { useState } from 'react';
function  appComponent() {
    const [formData, setFormData] = useState({
      username: '',
      gender: '',
      email: '',
      password: '',
      branch: 'Dept',
      expertise: [],
    });
  
    const [tableData, setTableData] = useState([]);
    const registeredEmails = new Set();
    const registeredUsernames = new Set();
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        setFormData((prev) => {
          const expertise = checked
            ? [...prev.expertise, value]
            : prev.expertise.filter((exp) => exp !== value);
          return { ...prev, expertise };
        });
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { username, email, password, branch, gender, expertise } = formData;
  
      // Validation logic
      if (!username || !email || !branch || !gender || expertise.length === 0 || !password) {
        alert('Please fill in all required fields.');
        return;
      }
  
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        alert('Invalid email address.');
        return;
      }
  
      if (registeredEmails.has(email)) {
        alert('Email already registered.');
        return;
      }
  
      if (registeredUsernames.has(username)) {
        alert('Username already taken.');
        return;
      }
  
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*@).{8,}$/;
      if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and the "@" symbol.');
        return;
      }
  
      registeredEmails.add(email);
      registeredUsernames.add(username);
      setTableData((prev) => [
        ...prev,
        { username, gender, email, password, branch, expertise: expertise.join(', ') },
      ]);
      setFormData({
        username: '',
        gender: '',
        email: '',
        password: '',
        branch: 'Dept',
        expertise: [],
      });
    };
  
    const deleteRow = (index) => {
      const email = tableData[index].email;
      const username = tableData[index].username;
  
      registeredEmails.delete(email);
      registeredUsernames.delete(username);
  
      setTableData((prev) => prev.filter((_, i) => i !== index));
    };
  
    return (
      <div className="container mt-5">
        <h2>LOGIN</h2>
        <form id="myForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            Username:
            <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" required />
          </div>
          <div className="mb-3">
            Gender: <br />
            <input type="radio" name="gender" value="male" onChange={handleChange} className="form-label" required /> Male <br />
            <input type="radio" name="gender" value="female" onChange={handleChange} className="form-label" required /> Female <br />
          </div>
          <div className="mb-3">
            Email:
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            Password:
            <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} placeholder="Enter password" required />
            <input type="checkbox" id="togglePassword" className="form-label" onClick={() => {
              const passwordInput = document.querySelector('input[name="password"]');
              passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
            }} />
            Show password
          </div>
          <div className="mb-4">
            Branch:
            <select name="branch" className="form-control" value={formData.branch} onChange={handleChange}>
              <option value="Dept">Dept</option>
              <option value="IT">IT</option>
              <option value="CSE">CSE</option>
              <option value="CSBS">CSBS</option>
              <option value="ECE">ECE</option>
            </select>
          </div>
          <div className="mb-3">
            Expertise:<br />
            <input type="checkbox" className="expertise" id="php" value="PHP" checked={formData.expertise.includes('PHP')} onChange={handleChange} />
            <label className="form-check-label" htmlFor="php">PHP</label>
            <input type="checkbox" className="expertise" id="R" value="R" checked={formData.expertise.includes('R')} onChange={handleChange} />
            <label className="form-check-label" htmlFor="R">R</label>
            <input type="checkbox" className="expertise" id="C" value="C" checked={formData.expertise.includes('C')} onChange={handleChange} />
            <label className="form-check-label" htmlFor="C">C</label>
            <input type="checkbox" className="expertise" id="Js" value="Js" checked={formData.expertise.includes('Js')} onChange={handleChange} />
            <label className="form-check-label" htmlFor="Javascript">Javascript</label>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button type="submit" id="submit" className="btn btn-primary">Submit</button>
            <button type="button" id="reset" className="btn btn-primary" onClick={() => setFormData({
              username: '',
              gender: '',
              email: '',
              password: '',
              branch: 'Dept',
              expertise: [],
            })}>Reset</button>
          </div>
        </form>
        <div className="studentTable">
          <table id="myTable" className="table table-striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Password</th>
                <th>Branch</th>
                <th>Expertise</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.username}</td>
                  <td>{row.gender}</td>
                  <td>{row.email}</td>
                  <td>{row.password}</td>
                  <td>{row.branch}</td>
                  <td>{row.expertise}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => deleteRow(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default appComponent;
  