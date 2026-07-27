import { use, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { BiDollar } from "react-icons/bi";
import { Helmet } from "react-helmet-async";

const MyPost = () => {
    const { users, tasks, setTasks } = use(AuthContext);
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
            <Helmet>
                 <title>Freelancer || MyPost</title>
            </Helmet>
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
                                <td className="space-y-2 md:space-x-2">
                                    <Link to={`/update/${task._id}`} className="btn btn-sm  border-amber-400 md:btn-md rounded-3xl">
                                       <GrUpdate />  Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(task._id)}
                                        className="btn btn-sm md:btn-md border-red-400 rounded-3xl "
                                    >
                                       <MdDelete size={20} /> Delete
                                    </button>
                                    <button className="btn btn-sm md:btn-md border-green-400 rounded-3xl">
                                       <BiDollar size={20} />Bids
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
