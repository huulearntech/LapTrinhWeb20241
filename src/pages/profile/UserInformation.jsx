import React, { useState } from 'react';
import InputField from '../../components/FormInputField';
import { BsPencilSquare as EditIcon } from 'react-icons/bs';
import { FaCheck as SaveIcon } from 'react-icons/fa6';
import { toast } from 'react-toastify';

import { fake_user } from '../../fake_data';

const UserInformation = () => {
  const [user, setUser] = useState(fake_user);
  const [editing, setEditing] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl">
        <div className="flex h-16 justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Profile</h2>
          {!editing && (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="flex p-2 items-center text-blue-500 font-bold text-lg rounded-lg hover:bg-gray-200"
            >
              <EditIcon className="mr-2" />
              Edit
            </button>
          )}
        </div>
        <fieldset disabled={!editing}>
          <form onSubmit={() => { toast.success("Submitted!") }} className="space-y-6">
            <InputField label="Full Name" name="fullName" type="text" value={user.fullName} onChange={handleChange} disabled={!editing} />
            <InputField label="Phone number" name="phone" type="text" value={user.phone} onChange={handleChange} disabled={!editing} />
            <InputField label="Email" name="email" type="email" value={user.email} onChange={handleChange} disabled={!editing} />
            {editing && (
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="flex p-2 items-center text-gray-500 font-bold text-lg rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setEditing(false);
                    toast.success("Saved!", toast);
                  }}
                  className="flex p-2 items-center text-white font-bold bg-blue-500 text-lg rounded-lg hover:bg-blue-600"
                >
                  <SaveIcon className="mr-2" />
                  Save
                </button>
              </div>
            )}
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default UserInformation;