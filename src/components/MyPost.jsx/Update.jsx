import { use } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";
import { Helmet } from "react-helmet-async";

const Update = () => {
    const { users } = use(AuthContext);
    const { _id, title, description, budget, deadline, category } =
        useLoaderData();
        
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedForm = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/task/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatedForm),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Task Deleted Successfully",
                        icon: "success",
                        draggable: true,
                    });
                }
            });
    };
    return (
        <div className="bg-gray-100 p-10 rounded-xl my-5">
                <Helmet> 
                <title>Freelancer || update task</title>
            </Helmet>
            <div className="text-center space-y-4">

                <h2 className="text-2xl md:text-4xl font-semibold">
                    Update Task 
                </h2>
            </div>
            <form onSubmit={handleUpdate}>
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
                                defaultValue={title}
                                required
                            />
                        </fieldset>
                        <div className="w-full bg-base-200 border-base-300 rounded-box p-4">
                            <label className="label">category</label>
                            <select
                                className="w-full border p-2  border-base-300"
                                name="category"
                                defaultValue={category}
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
                                defaultValue={deadline}
                                className="input w-full"
                                placeholder="Enter deadline"
                            />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Budget</label>
                            <input
                                name="budget"
                                type="number"
                                defaultValue={budget}
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
                        defaultValue={description}
                        placeholder=" add Description"
                        required
                    ></textarea>
                </fieldset>
                <button className="btn hover:text-xl w-full my-4 hover:text-green-700  hover:bg-white btn-primary rounded-full hover:bg[#0E3608]">
                    Update Task
                </button>
            </form>
        </div>
    );
};

export default Update;
