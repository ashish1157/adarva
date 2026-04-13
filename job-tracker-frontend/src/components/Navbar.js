export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold tracking-wide">Job Tracker</h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-1 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}