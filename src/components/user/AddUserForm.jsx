import React, { useState } from 'react';

const AddUserForm = ({ onClose, onAddUser }) => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '', created_by: 'admin' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Validate input if needed

    // Call the onAddUser function with the new user data
    onAddUser(userData);

    // Close the modal
    onClose();
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
      </label>
      <br />
      {/* Assuming created_by is a fixed value for the current user */}
      {/* If it's dynamic, you may need a different approach to set it */}
      <button type="button" onClick={handleSubmit}>
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
