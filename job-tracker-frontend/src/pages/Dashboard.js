import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";
import { FaBriefcase } from "react-icons/fa";

const STATUS_COLORS = {
  Applied: "bg-blue-100 text-blue-700",
  Interview: "bg-yellow-100 text-yellow-700",
  Offer: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ title: "", company: "", status: "Applied" });

  const fetchJobs = async () => {
    const res = await api.get("/jobs");
    setJobs(res.data);
  };

  const createJob = async (e) => {
    e.preventDefault();
    await api.post("/jobs", form);
    setForm({ title: "", company: "", status: "Applied" });
    fetchJobs();
  };

    const updateJobStatus = async (id, status) => {
    await api.patch(`/jobs/${id}/status`, { status });
    fetchJobs(); // ✅ refresh list
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-6 min-h-screen bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        {/* Add Job */}
        <div className="flex justify-center">
          <form onSubmit={createJob} className="bg-white p-6 rounded-2xl shadow-md mb-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-3">Add Job</h3>

            <input
              value={form.title}
              className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Job Title"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <input
              value={form.company}
              className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Company"
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />

            {/* ✅ Status Dropdown */}
            <select
              value={form.status}
              className="w-full p-2 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
              Add Job
            </button>
          </form>
        </div>

        {/* Job List */}
        <div className="grid gap-3 md:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <FaBriefcase /> {job.title}
              </h3>
              <p className="text-gray-500 mb-2">{job.company}</p>

              
                  <select
                  value={job.status}
                  className={`text-xs font-semibold px-2 py-1 rounded-full border-0 cursor-pointer ${STATUS_COLORS[job.status] || "bg-gray-100 text-gray-700"}`}
                  onChange={(e) => updateJobStatus(job.id, e.target.value)}
                >
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              
            </div>
          ))}

          {jobs.length === 0 && (
            <p className="text-gray-500 text-center mt-10 text-lg">
              No jobs added yet 🚀
            </p>
          )}
        </div>
      </div>
    </>
  );
}