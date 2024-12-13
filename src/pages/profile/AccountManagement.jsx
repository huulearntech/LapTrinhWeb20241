const AccountManagement = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Change password</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Old Password</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </form>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Change email</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Old Email</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New Email</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Delete account</h2>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete</button>
        <p className="mt-2 text-sm text-gray-600">Warning: This action cannot be undone</p>
      </div>
    </div>
  );
}

export default AccountManagement;
