import { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const MyPost = () => {
    const { users, tasks, setTasks } = use(AuthContext);
    // const [task, setTask] = useState(tasks);
    

    useEffect(() => {
        fetch(`http://localhost:3000/myTask?email=${users.email}`)
            .then((res) => res.json())
            .then((data) => {
                setTasks(data);
            });
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed)
                fetch(`http://localhost:3000/task/${id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(tasks),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            const remainingData = tasks.filter(
                                (singleTask) => singleTask._id !== id
                            );
                            
                            setTasks(remainingData);
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Posted data has been deleted.",
                                icon: "success"
                            });
                        }
                    });
        });
    };

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
                        {tasks.map((task) => (
                            <tr key={task._id}>
                                <td className="font-semibold text-xl">
                                    {task.title}
                                </td>
                                <td className="font-semibold">
                                    {task.category}
                                </td>
                                <td className="font-semibold">
                                    {task.deadline}
                                </td>
                                <td className="font-semibold">
                                    ${task.budget}
                                </td>
                                <td className="space-x-2">
                                    <button className="btn border-amber-400 rounded-3xl">
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(task._id)}
                                        className="btn border-red-400 rounded-3xl "
                                    >
                                        Delete
                                    </button>
                                    <button className="btn border-green-400 rounded-3xl">
                                        Bids
                                    </button>
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
