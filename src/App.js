import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Single from './pages/Single';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is Home!</div>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/write",
    element: <Write/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <h1>Hello Almeera</h1> */}
    </div>
  );
}

export default App;
