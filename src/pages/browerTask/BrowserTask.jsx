import { use } from "react";
import { Link, } from "react-router";

const taskPromise = fetch("http://localhost:3000/task").then(res=>res.json())

const BrowserTask = () => {
    const allTask = use(taskPromise)
    const handleDetails = (id) => {
        console.log("clicked", id);
        fetch(`http://localhost:3000/task/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div>
            <div className="text-center my-6 w-3/4 mx-auto">
                <h2 className="text-2xl md:4xl font-semibold">AllTask</h2>
                <p className="">
                    Freelance browser tasks involve simple, web-based
                    assignments like data entry, web research, form filling, and
                    testing. You can find and complete these jobs on platforms
                    like Upwork Browser Automation Jobs, Freelancer Jobs, and
                    Jobbers.{" "}
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>user information</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {allTask.map((task, index) => (
                            <tr key={task._id}>
                                <th>
                                    <label>{index + 1}</label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <h2>{task.name}</h2>
                                    </div>
                                </td>
                                <td className="font-bold">{task.title}</td>
                                <td className="font-bold">{task.category}</td>

                                <th>
                                    <Link to={`/browser/${task._id}`}>
                                        <button
                                            onClick={() =>
                                                handleDetails(task._id)
                                            }
                                            className="btn mr-2 btn-secondary"
                                        >
                                            Details
                                        </button>
                                    </Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowserTask;
