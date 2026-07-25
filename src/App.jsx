import {} from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import MyPost from "./pages/MyPost";
import BrowserTask from "./pages/BrowserTask";
import AddTask from "./pages/AddTask";
import AuthProvider from "./context/AuthProvider";

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
]);

function App() {
   return (
  <AuthProvider>
   <RouterProvider router={router} />;
  </AuthProvider>
   )
}

export default App;
