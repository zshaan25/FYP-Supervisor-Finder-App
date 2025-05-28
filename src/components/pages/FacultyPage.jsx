import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { PlusIcon, XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const FacultyCard = ({ faculty, onDelete }) => (
  <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition">
    <div>
      <p className="text-xl font-semibold">{faculty.name}</p>
      <p className="text-sm text-gray-500">{faculty.email}</p>
      <div className="flex gap-2 mt-2">
        <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">
          {faculty.domain}
        </span>
        <span className="text-sm text-gray-400">Slots: {faculty.slots}</span>
      </div>
    </div>
    <button onClick={() => onDelete(faculty.id)} className="text-red-500 hover:text-red-700">
      <XMarkIcon className="w-5 h-5" />
    </button>
  </div>
);

export default function FacultyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [facultyList, setFacultyList] = useState([
    { id: 1, name: "Dr. Mehtab Ahmad ", email: "mehtab.ahmad@cs.uol.edu.pk", domain: "AI", slots: "5" },
    { id: 2, name: "Dr. Nadeem Ali ", email: "nadeem.ali@cs.uol.edu.pk", domain: "Cybersecurity", slots: "3" },
  ]);
  const [newFaculty, setNewFaculty] = useState({ name: "", email: "", domain: "", slots: "" });

  const handleAdd = () => {
    setFacultyList([...facultyList, { ...newFaculty, id: Date.now() }]);
    setNewFaculty({ name: "", email: "", domain: "", slots: "" });
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setFacultyList(facultyList.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-200">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-800">Faculty Dashboard</h1>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-indigo-700 transition"
          onClick={() => setIsOpen(true)}
        >
          <PlusIcon className="w-5 h-5" />
          Add Faculty
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {facultyList.map((faculty) => (
          <FacultyCard key={faculty.id} faculty={faculty} onDelete={handleDelete} />
        ))}
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md">
            <Dialog.Title className="text-lg font-bold text-indigo-700 mb-4">Add New Faculty</Dialog.Title>
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded p-2 mb-2"
              value={newFaculty.name}
              onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded p-2 mb-2"
              value={newFaculty.email}
              onChange={(e) => setNewFaculty({ ...newFaculty, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Domain"
              className="w-full border rounded p-2 mb-2"
              value={newFaculty.domain}
              onChange={(e) => setNewFaculty({ ...newFaculty, domain: e.target.value })}
            />
            <input
              type="number"
              placeholder="Slots"
              className="w-full border rounded p-2 mb-4"
              value={newFaculty.slots}
              onChange={(e) => setNewFaculty({ ...newFaculty, slots: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                onClick={handleAdd}
              >
                Save
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
