import { use, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Featured = () => {
    const { tasks, setTasks } = use(AuthContext);
    useEffect(() => {
        fetch(
            "https://freelance-task-marketplace-server-gamma.vercel.app/featuredTasks",
        )
            .then((res) => res.json())
            .then((data) => {
                setTasks(data);
            });
    }, []);
    return (
        <div>
            <h2 className="text-2xl p-4 font-semibold">Featured Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                {tasks.map((task) => (
                    <div key={task._id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{task.title}</h2>

                            <p>
                                <strong>Category:</strong> {task.category}
                            </p>
                            <p>
                                <strong>Budget:</strong> ${task.budget}
                            </p>
                            <p>
                                <strong>Deadline:</strong> {task.deadline}
                            </p>

                            <div className="card-actions justify-end">
                                <button className="btn text-white bg-[#0E3608]">
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
