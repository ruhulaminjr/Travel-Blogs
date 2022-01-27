import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddBlog from "./Pages/AddBlog/AddBlog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/HomePage/Home/Home";
import Login from "./Pages/Login/Login";
import ShowBlog from "./Pages/ShowBlog/ShowBlog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/addblog"
          element={
            <PrivateRoute>
              <AddBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/viewblog/:id"
          element={
            <PrivateRoute>
              <ShowBlog />
            </PrivateRoute>
          }
        />
        <Route path="/dashboard" element={<PrivateRoute>
          <Dashboard/>
        </PrivateRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
