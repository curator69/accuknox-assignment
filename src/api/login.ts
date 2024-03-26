import axios from "axios";

const login = async (credentials) => {
  try {
    const response = await axios.post("/api/login", credentials);

    // Handle successful login response
    if (response.data.token) {
      // Check if response has a token property
      // Store the token securely (e.g., in local storage or a cookie with HttpOnly flag)
      localStorage.setItem("userToken", response.data.token);
      return response.data; // Optionally return user data as well
    } else {
      throw new Error("Invalid login response"); // Handle unexpected response format
    }
  } catch (error) {
    console.error(error);
    // Handle login errors appropriately
    if (error.response && error.response.status === 401) {
      return Promise.reject({ message: "Invalid username or password" }); // Specific error for UI feedback
    } else {
      return Promise.reject({ message: "Login failed. Please try again." }); // Generic error for UI
    }
  }
};

// Example usage:
const credentials = { username: "user1", password: "password123" };
const loginResponse = await login(credentials)
  .then((data) => {
    console.log("Login successful:", data);
    // Handle successful login (e.g., redirect to protected route)
  })
  .catch((error) => {
    console.error("Login error:", error);
    // Handle login errors (e.g., display error message to user)
  });
