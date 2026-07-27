import React, { useEffect, useState } from 'react';

const Featured = () => {
const [tasks, setTasks] = useState([]);
console.log(tasks);


    useEffect(() => {
    fetch("http://localhost:3000/featuredTasks")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTasks(data)
            });
}, []);
    return (
        <div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
  {tasks.map(task => (
    <div key={task._id} className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{task.title}</h2>

        <p><strong>Category:</strong> {task.category}</p>
        <p><strong>Budget:</strong> ${task.budget}</p>
        <p><strong>Deadline:</strong> {task.deadline}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            See Details
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
    );
};

export default Featured;