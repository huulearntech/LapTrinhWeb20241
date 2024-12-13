import React, { useState } from 'react';

import AccountManagement from './AccountManagement';
import UserInformation from './UserInformation';



const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('User Information');
  const sections = ['User Information', 'Account Management'];

  const renderSectionContent = (section) => {
    switch (section) {
      case "User Information":
        return <UserInformation />;
      case "Account Management":
        return <AccountManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="flex lg:h-full w-full lg:w-1/4 p-6 lg:overflow-y-auto bg-white shadow-lg divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-500">
        <ul className="flex lg:flex-col w-full lg:w-auto overflow-x-auto lg:overflow-x-hidden max-lg:space-x-4 lg:space-y-4">
          {sections.map((section) => (
            <li key={section} className="flex-shrink-0 lg:flex-shrink">
              <button
                className={`block w-full rounded-full p-3 text-lg ${activeSection === section ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"}`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-full w-full lg:w-3/4 p-6 items-start justify-center overflow-auto">
        {renderSectionContent(activeSection)}
      </div>
    </div>
  );
};

export default ProfilePage;