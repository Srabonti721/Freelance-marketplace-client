import {} from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Register from "./Auth/Register";
import MainLayout from "./Layouts/MainLayout";
import AuthProvider from "./context/AuthProvider";
import AddTask from "./pages/AddTask";
import Home from "./pages/Home";
import MyPost from "./pages/MyPost";
import BrowserTask from "./pages/browerTask/BrowserTask";
import Details from "./pages/browerTask/Details";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/add",
                element: (
                    <PrivateRoute>
                        <AddTask></AddTask>
                    </PrivateRoute>
                ),
            },
            {
                path: "/browser",
                Component: BrowserTask,
            },
            {
                path: "/browser/:id",
                element:<PrivateRoute>
                  <Details/>
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/task/${params.id}`),
            },
            {
                path: "/myPost",
                element: (
                    <PrivateRoute>
                        <MyPost></MyPost>
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login,
            },
            {
                path: "/auth/register",
                Component: Register,
            },
        ],
    },
]);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />;
            <ToastContainer />
        </AuthProvider>
    );
}

export default App;
