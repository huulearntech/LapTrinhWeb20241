import { useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState({
    avatar: "https://placehold.co/150",
    firstName: "Nguyen",
    lastName: "An",
    email: "example@example.com",
    phone: "0123456789",
    birthdate: "1999-05-01",
  });
  
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUser((prev) => ({ ...prev, avatar: imageUrl }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submit here
    console.log("submitted");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
          <label htmlFor="chooseAvatar" hidden={!editing} className="cursor-pointer fit-content">
            Change picture
          </label>
          <input
            id="chooseAvatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <fieldset disabled={!editing}>
            <div className="flex flex-row space-x-4">
              <div className="flex flex-col flex-grow">
                <label className="font-semibold">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!editing ? 'text-gray-400' : ''}`}
                  required
                />
              </div>
              <div className="flex flex-col flex-grow">
                <label className="font-semibold">Surname</label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!editing ? 'text-gray-400' : ''}`}
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!editing ? 'text-gray-400' : ''}`}
                required
              />
            </div>
            <div className="mt-4">
              <label className="font-semibold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!editing ? 'text-gray-400' : ''}`}
                required
              />
            </div>
            <div className="mt-4">
              <label className="font-semibold">Birthdate</label>
              <input
                type="date"
                name="birthdate"
                value={user.birthdate}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${!editing ? 'text-gray-400' : ''}`}
                required
              />
            </div>
          </fieldset>
          <div className="mt-4">
            {editing ? (
              <div className="flex flex-row space-x-4">
              <button
                className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500 transition"
                onClick={(e) => {
                  e.preventDefault();
                  setEditing(false);
                  }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
              >
                Update Profile
              </button>
              </div>
              
            ) : (
              <button
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={(e) => {
                  e.preventDefault();
                  setEditing(true);
                }}
              >
                Edit profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
