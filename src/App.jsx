import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { logout } from "./redux/authSlice";

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <Dashboard username={user.username} handleLogout={handleLogout} />
      ) : (
        <>
          <Login />
          <Signup />
        </>
      )}
    </div>
  );
}

export default App;
