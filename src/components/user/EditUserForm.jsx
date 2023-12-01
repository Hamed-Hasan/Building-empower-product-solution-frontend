// EditUserForm.jsx

import React, { useState } from 'react';

const EditUserForm = ({ user, onUpdate, onClose }) => {
  const [userData, setUserData] = useState({ name: user.name, email: user.email });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Call the onUpdate function with the updated user data
    onUpdate(userData);
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
      <button type="button" onClick={handleSubmit}>
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
