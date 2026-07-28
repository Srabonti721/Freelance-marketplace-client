import {} from "react";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";
import Register from "./Auth/Register";
import MainLayout from "./Layouts/MainLayout";
import Loading from "./components/Loading";
import Update from "./components/MyPost.jsx/Update";
import AuthProvider from "./context/AuthProvider";
import AddTask from "./pages/AddTask";
import ErrorPage from "./pages/ErrorPage";
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
                loader: () =>
                    fetch(
                        "https://freelance-task-marketplace-server-gamma.vercel.app/task",
                    ),
                hydrateFallbackElement: <Loading />,
            },
            {
                path: "/browser/:id",
                element: (
                    <PrivateRoute>
                        <Details />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://freelance-task-marketplace-server-gamma.vercel.app/task/${params.id}`,
                    ),
                hydrateFallbackElement: <Loading />,
            },
            {
                path: "/myPost",
                element: (
                    <PrivateRoute>
                        <MyPost></MyPost>
                    </PrivateRoute>
                ),
            },
            {
                path: "/update/:id",
                Component: Update,
                loader: ({ params }) =>
                    fetch(
                        `https://freelance-task-marketplace-server-gamma.vercel.app/task/${params.id}`,
                    ),
                hydrateFallbackElement: <Loading />,
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
    {
        path: "*",
        Component: ErrorPage,
    },
]);

function App() {
    return (
        <AuthProvider>
            <HelmetProvider>
                <RouterProvider router={router} />;
            </HelmetProvider>
            <ToastContainer />
        </AuthProvider>
    );
}

export default App;
