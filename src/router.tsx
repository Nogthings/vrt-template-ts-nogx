import { createBrowserRouter } from "react-router-dom";

// layouts
import HomeLayout from "./layouts/home";

// pages
import Home from "./layouts/home/pages/home";
import Blog from "./layouts/home/pages/blog";
import Store from "./layouts/home/pages/store";
import AdminLayout from "./layouts/admin";
import Dashboard from "./layouts/admin/pages/dashboard";
import Posts from "./layouts/admin/pages/posts";
import NotFound from "./layouts/pages/404";
import CreatePost from "./layouts/admin/pages/posts/pages/create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "store", element: <Store /> },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "posts",
        element: <Posts />,
        children: [{ path: "create", element: <CreatePost /> }],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
