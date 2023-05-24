import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import UserPage from "./components/UserPage.js";
import AdminPage from "./components/AdminPage.js";
import Auth from "./components/Auth";

function App() {
  // const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/user"
            element={
              <Auth>
                <UserPage />
              </Auth>
            }
          />
          <Route path="/admin" element={<AdminPage />} />

          {/* <Route
            path="/home"
            // element={isAuth ? <HomePage /> : <Navigate to="/" />}
          /> */}
          {/* <Route
            path="/profile/:userId"
            element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
