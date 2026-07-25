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
            Component:AddTask
          },
          {
            path:"/browser",
            Component:BrowserTask
          },
          {
            path:"/myPost",
            Component:MyPost
          },
        ]
    },
    {
      path:'/auth',
      Component:AuthLayout
    },
    {
      path:'/auth/login',
      Component:Login
    },
    {
      path:'/auth/register',
      Component:Register
    },
]);

function App() {
   return (
  <AuthProvider>
   <RouterProvider router={router} />;
  </AuthProvider>
   )
}

export default App;
