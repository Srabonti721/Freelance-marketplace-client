import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";

const AddTask = () => {
    const { users } = use(AuthContext);
    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const taskData = Object.fromEntries(formData.entries());
        console.log(taskData);

        fetch("http://localhost:3000/task", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(taskData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("after bd", data);
                if(data.insertedId){
              Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "add task successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                }
                form.reset();
            });
    };
    return (
        <div className="bg-gray-100 p-10 rounded-xl my-5">
            <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-4xl font-semibold">Add Task</h2>
                <p className="text-gray-500">
                    To add items like skills or portfolio projects to your
                    profile on Freelancer, log in, go to your profile page, and
                    use the edit or manage options.
                </p>
            </div>
            <form onSubmit={handleAddTask}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto my-8">
                    <div className="space-y-2">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input w-full"
                                placeholder="Enter name"
                                value={users.displayName}
                                required
                            />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Title</label>
                            <input
                                name="title"
                                type="text"
                                className="input w-full"
                                placeholder="Add Task title"
                                required
                            />
                        </fieldset>
                        <div className="w-full bg-base-200 border-base-300 rounded-box p-4">
                            <label className="label">category</label>
                            <select
                                className="w-full border p-2  border-base-300"
                                name="category"
                                required
                            >
                                <option value="">Select Category</option>
                                <option>Web Development</option>
                                <option>Design</option>
                                <option>Writing</option>
                                <option>Marketing</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Email</label>
                            <input
                                name="email"
                                type="text"
                                value={users.email}
                                className="input w-full"
                                placeholder="Enter email"
                                required
                            />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Deadline</label>
                            <input
                                name="deadline"
                                type="date"
                                className="input w-full"
                                placeholder="Enter deadline"
                            />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Budget</label>
                            <input
                                name="budget"
                                type="number"
                                className="input w-full"
                                placeholder="Enter Budget"
                            />
                        </fieldset>
                    </div>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300  rounded-box w-full border p-4">
                    <label className="label">Description</label>
                    <textarea
                        className="border border-base-300 p-2 rounded-box w-full textarea "
                        name="description"
                        placeholder=" add Description"
                        required
                    ></textarea>
                </fieldset>
                <button className="btn hover:text-xl w-full my-4 btn-secondary rounded-full hover:bg[#0E3608]">
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
