import React, { use, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';


const MyPost = () => {
    const {users, tasks, setTasks} = use(AuthContext);
    console.log(tasks);

    useEffect(()=>{
    fetch(`http://localhost:3000/myTask?email=${users.email}`)
  .then(res => res.json())
  .then(data =>
     {
        console.log(data);
        setTasks(data)
     });
    },[])

    
    return (
        <div>
           <div className="overflow-x-auto my-10 px-5">
  <table className="table table-zebra">
    <thead>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Deadline</th>
        <th>Budget</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {tasks.map(task => (
        <tr key={task._id}>
          <td>{task.title}</td>
          <td>{task.category}</td>
          <td>{task.deadline}</td>
          <td>${task.budget}</td>
          <td className="space-x-2">
            <button className="btn btn-sm btn-info">Update</button>
            <button className="btn btn-sm btn-error">Delete</button>
            <button className="btn btn-sm btn-success">Bids</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPost;