import React from 'react';

const AllTasks = ({tasks = []}) => {
  return (
    <div className="p-4 max-h-[500px] overflow-auto no-scrollbar">
       {/* Table Header */}
      <div className="flex justify-between items-center bg-slate-100 text-slate-800 font-semibold p-3 rounded-md mb-3 shadow-sm">
        <p className="w-1/5">Assigned To</p>
        <p className="w-1/4">Title</p>
        <p className="w-1/6">Category</p>
        <p className="w-1/6">Deadline</p>
        <p className="w-1/6">Status</p>
      </div>
      {tasks.map((tsk, index) => (
        <div
          key={tsk.id || index}
          className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-2"
        >
          <p className="w-1/5 font-semibold">{tsk.assign}</p>
          <p className="w-1/4">{tsk.title}</p>
          <p className="w-1/6 text-sm text-gray-600">{tsk.category}</p>
          <p className="w-1/6 text-sm text-gray-500">{tsk.date}</p>
          <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">
            
          </span>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
