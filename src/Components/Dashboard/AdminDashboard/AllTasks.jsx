import React from 'react';

const AllTasks = ({tasks = []}) => {
  return (
    <div className="p-4 max-h-[500px] overflow-auto no-scrollbar">
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
