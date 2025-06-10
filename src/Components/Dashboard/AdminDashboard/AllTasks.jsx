import React from 'react';

const tasks = [
  {
    id: 1,
    employee: 'Johnathan Doe',
    title: 'Design homepage layout for new product landing page',
    status: 'Completed',
    category: 'Design',
    deadline: '2025-06-30',
    priority: 'High',
  },
  {
    id: 2,
    employee: 'Ayesha Khan',
    title: 'Fix bug in user authentication flow',
    status: 'In Progress',
    category: 'Bug Fix',
    deadline: '2025-06-15',
    priority: 'Medium',
  },
  {
    id: 3,
    employee: 'Ali Raza',
    title: 'Update backend API documentation and security notes',
    status: 'Pending',
    category: 'Development',
    deadline: '2025-06-20',
    priority: 'Low',
  },
  {
    id: 4,
    employee: 'Sana Sheikh',
    title: 'QA testing for checkout module',
    status: 'Failed',
    category: 'Review',
    deadline: '2025-06-18',
    priority: 'High',
  },
];

const statusColor = {
  Completed: 'bg-green-100 text-green-700',
  'In Progress': 'bg-yellow-100 text-yellow-700',
  Pending: 'bg-blue-100 text-blue-700',
  Failed: 'bg-red-100 text-red-700',
};

const priorityColor = {
  High: 'bg-red-100 text-red-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  Low: 'bg-green-100 text-green-700',
};

const AllTasks = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">All Tasks</h2>

      <div className="max-h-64 overflow-auto scrollbar-hide">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-100 text-left font-medium text-slate-600">
              <th className="py-2 px-4">Employee</th>
              <th className="py-2 px-4">Task</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Deadline</th>
              <th className="py-2 px-4">Priority</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {tasks.map((task) => (
              <tr key={task.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4 whitespace-nowrap font-medium">
                  {task.employee}
                </td>
                <td
                  className="py-3 px-4 max-w-xs truncate"
                  title={task.title}
                >
                  {task.title}
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      statusColor[task.status] || 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className="py-3 px-4">{task.category}</td>
                <td className="py-3 px-4">{new Date(task.deadline).toLocaleDateString()}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      priorityColor[task.priority] || 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTasks;
