// src/pages/ProfilePage.js
import React, { useState } from 'react';
import InputField from '../components/FormInputField';
import { BsPencilSquare as EditIcon } from 'react-icons/bs';
import { FaCheck as SaveIcon } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { fake_user } from '../fake_data';

const ProfileSection = () => {
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
              <div className="flex justify-end">
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


const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('Profile');
  const sections = ['Profile', 'Manage password'];

  const renderSectionContent = (section) => {
    switch (section) {
      case "Profile":
        return <ProfileSection />;
      case "Manage password":
        return <div>Manage password</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="flex lg:h-full w-full lg:w-1/4 p-6 overflow-auto lg:overflow-hidden bg-white shadow-lg divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-500">
        <ul className="flex lg:flex-col w-full lg:w-auto overflow-x-auto lg:overflow-x-hidden">
          {sections.map((section) => (
            <li key={section} className="flex-shrink-0 lg:flex-shrink">
              <div
                className={`block rounded-lg p-2 ${activeSection === section ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-full w-full lg:w-3/4 p-6 overflow-auto">
        {renderSectionContent(activeSection)}
      </div>
    </div>
  );
};

export default ProfilePage;