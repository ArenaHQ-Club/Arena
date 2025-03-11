import React from "react";
import axios from "axios";

export default function Profile() {
  const signOut = async () => {
    try {
      await axios.get("http://localhost:8080/signout", {
        withCredentials: true,
      });
      window.location.href = "/signup"; 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileSidebar}>
        <div style={styles.profileInfo}>
          <div style={styles.profileHeader}>
            <img
              style={styles.profilePic}
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729468800&semt=ais_hybrid"
              alt="Profile"
            />
            <div style={styles.profileTextContainer}>
              <h2 style={styles.profileName}>Name</h2>
              <p style={styles.profileText}>Team_id</p>
              <p style={styles.profileText}>#username</p>
            </div>
          </div>
        </div>
        <div style={styles.profileContact}>
          <p style={styles.contactText}>Email</p>
        </div>
      </div>

      <div style={styles.profileContent}>
        <button onClick={signOut} style={styles.signOutButton}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

const styles = {
  profileContainer: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },
  profileSidebar: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    width: "20%",
    height: "30vh",
  },
  profileInfo: {
    textAlign: "center",
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
  },
  profilePic: {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  },
  profileTextContainer: {
    marginLeft: "20px",
    textAlign: "left",
  },
  profileName: {
    margin: "10px 0",
    fontWeight: "bold",
  },
  profileText: {
    margin: "5px 0",
    fontWeight: "bold",
  },
  profileContact: {
    marginTop: "30px",
  },
  contactText: {
    marginBottom: "10px",
  },
  profileContent: {
    flex: 1,
  },
  signOutButton: {
    backgroundColor: "#f44336", // Red color for the button
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    width: "100px",
    margin: "20px auto",
    display: "block",
  },
};
