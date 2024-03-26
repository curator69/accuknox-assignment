import React from "react";

const MyProtectedComponent = () => {
  return (
    <div>
      <h1>This is a protected component!</h1>
      <p>You can only access this page if you are logged in.</p>
    </div>
  );
};

export default MyProtectedComponent;
