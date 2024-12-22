import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Forgot from "../Pages/Forgot";
import JobDetails from "../Pages/JobDetails";
import JobApply from "../Pages/JobApply";
import MyApplication from "../Pages/MyApplication";
import AddJob from "../Pages/AddJob";
import MyPostJob from "../Pages/MyPostJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/jobdetails/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobapply/:id",
        element: (
          <PrivetRoute>
            <JobApply></JobApply>
          </PrivetRoute>
        ),
      },
      {
        path: "/myapplication",
        element: (
          <PrivetRoute>
            <MyApplication></MyApplication>
          </PrivetRoute>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivetRoute>
            <AddJob></AddJob>
          </PrivetRoute>
        ),
      },
      {
        path: "/mypostjob",
        element: (
          <PrivetRoute>
            <MyPostJob></MyPostJob>
          </PrivetRoute>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login/forgot",
        element: <Forgot></Forgot>,
      },
    ],
  },
]);

export default routes;
