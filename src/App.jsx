import {} from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import MyPost from "./pages/MyPost";
import BrowserTask from "./pages/BrowserTask";
import AddTask from "./pages/AddTask";
import AuthProvider from "./context/AuthProvider";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Auth/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component:MainLayout,
        children:[
          {
            index:true,
            Component:Home
          },
          {
            path:"/add",
            element:<PrivateRoute>
              <AddTask></AddTask>
            </PrivateRoute>
          },
          {
            path:"/browser",
            Component:BrowserTask
          },
          {
            path:"/myPost",
            element:<PrivateRoute>
              <MyPost></MyPost>
            </PrivateRoute>
          },
        ]
    },
    {
      path:'/auth',
      Component:AuthLayout,
      children:[
    {
      path:'/auth/login',
      Component:Login
    },
    {
      path:'/auth/register',
      Component:Register
    },
      ]
    },

]);

function App() {
   return (
  <AuthProvider>
   <RouterProvider router={router} />;
   <ToastContainer/>
  </AuthProvider>
   )
}

export default App;
