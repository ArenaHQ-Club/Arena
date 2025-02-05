import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../Assets/Images/Logo.jpg";

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch user info and handle redirection
    const checkUser = async () => {
      try {
        // Get user info from /userinfo endpoint
        const response = await axios.get("http://localhost:8080/userinfo", {
          withCredentials: true,
        });

        // Wait for 5 seconds before redirecting
        setTimeout(() => {
          // If token is present, redirect to Home page
          if (response.status === 200) {
            navigate("/home"); // Redirect to home
          }
        }, 5000);
      } catch (error) {
        console.log(error);
        // If no user is found or token is invalid, redirect to signup
        setTimeout(() => {
          navigate("/signup"); // Redirect to signup
        }, 5000);
      }
    };

    // Call the function to check user info
    checkUser();
  }, [navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: 20,
        }}
      >
        <img
          src={logo}
          alt="Loading..."
          style={{
            height: 800,
            width: 800,
          }}
        />
      </div>
    </div>
  );
}
