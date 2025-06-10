import React, { useState } from 'react';

const CreateTask = ({setTasks}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [assign, setAssign] = useState('');
  const [category, setCategory] = useState('');

  const Submithandle = (e) => {
    e.preventDefault();
    const newTask = {title, description, date, assign, category};
    console.log(newTask);
    setTasks((prev) => [...prev, newTask])
    //clear form;
    setTitle('');
    setDescription('');
    setDate('');
    setAssign('');
    setCategory('');
  };

  return (
    <div className="flex items-start justify-center p-5">
      <form
        onSubmit={Submithandle}
        className="w-full max-w-5xl bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6"
      >
        {/* Left Column */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">Create New Task</h2>

          {/* Task Title */}
          <div>
            <label className="block mb-1 text-slate-700">Task Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Enter task title"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block mb-1 text-slate-700">Deadline</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block mb-1 text-slate-700">Assign To</label>
            <input
              value={assign}
              onChange={(e) => setAssign(e.target.value)}
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Employee name or ID"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-slate-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="uiux">UI/UX</option>
              <option value="qa">Quality Assurance</option>
              <option value="devops">DevOps</option>
              <option value="documentation">Documentation</option>
              <option value="research">Research</option>
              <option value="support">Support</option>
            </select>
          </div>
        </div>

        {/* Right Column - Description & Button */}
        <div className="md:w-1/2 space-y-4 flex flex-col justify-between">
          <div>
            <label className="block mb-1 text-slate-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="9"
              className="w-full border border-gray-300 rounded-md p-2 resize-none focus:ring-2 focus:ring-teal-500 focus:outline-none"
              placeholder="Write task details..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 rounded-md transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
