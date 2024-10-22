import React from "react";
import Stylesheet from "reactjs-stylesheet";

export default function Profile() {
  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileSidebar}>
        <div style={styles.profileInfo}>
          <div style={styles.profileHeader}>
            <img
              style={styles.profilePic}
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729468800&semt=ais_hybrid" // Replace with your logo
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
          <div style={styles.socialIcons}>
            <a href="#" style={styles.icon}>
              <i className="fab fa-github"></i>
            </a>
            <a href="#" style={styles.icon}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" style={styles.icon}>
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" style={styles.icon}>
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>

      <div style={styles.profileContent}>
        <div style={styles.progressSection}>
          <h2 style={styles.sectionTitle}>Progress</h2>
          <div style={styles.progressCircles}>
            <div style={styles.circleContainer}>
              <div style={styles.circle}>
                <p style={styles.percentageText}>0%</p>
              </div>
              <p style={styles.circleTitle}>Rookie Rumble</p>
            </div>
            <div style={styles.circleContainer}>
              <div style={styles.circle}>
                <p style={styles.percentageText}>0%</p>
              </div>
              <p style={styles.circleTitle}>Warrior's Way</p>
            </div>
            <div style={styles.circleContainer}>
              <div style={styles.circle}>
                <p style={styles.percentageText}>0%</p>
              </div>
              <p style={styles.circleTitle}>Veteran's Vault</p>
            </div>
          </div>
        </div>

        <div style={styles.topicsSection}>
          <h2 style={styles.sectionTitle}>Topics covered</h2>
          <div style={styles.topicsGrid}>
            <div style={styles.topic}>Arrays</div>
            <div style={styles.topic}>Strings</div>
            <div style={styles.topic}>Stack</div>
            <div style={styles.topic}>Greedy</div>
            <div style={styles.topic}>Heap</div>
            <div style={styles.topic}>Math</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
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
    height: "30vh", // Set height to 50vh to match progress section
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
    marginLeft: "20px", // Space between logo and text
    textAlign: "left",
  },
  profileName: {
    margin: "10px 0",
    fontWeight: "bold", // Bold text
  },
  profileText: {
    margin: "5px 0",
    fontWeight: "bold", // Bold text
  },
  profileContact: {
    marginTop: "30px",
  },
  contactText: {
    marginBottom: "10px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    fontSize: "20px",
  },
  icon: {
    color: "#000",
  },
  profileContent: {
    flex: 1,
  },
  progressSection: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    height: "50vh", // Set progress section to 50% of the viewport height
    marginBottom: "20px",
  },
  sectionTitle: {
    marginBottom: "20px",
    textAlign: "center",
  },
  progressCircles: {
    marginTop: 80,
    display: "flex",
    justifyContent: "center", // Center the circles horizontally
    gap: "50px", // Add space between the circles
  },
  circleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  circle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "200px", // Increased circle size
    height: "200px", // Increased circle size
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  percentageText: {
    color: "#ff0000", // Red text for percentage
    fontWeight: "bold", // Bold text
    fontSize: "22px",
  },
  circleTitle: {
    marginTop: "10px", // Add margin for spacing below the circle
    textAlign: "center",
    fontWeight: "bold", // Make the title bold
    fontSize: "16px", // Slightly increase the font size of the title
  },
  topicsSection: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
  },
  topicsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Three boxes per row
    gap: "20px", // Increase space between boxes
  },
  topic: {
    backgroundColor: "#808080", // Gray background
    padding: "20px", // Bigger size
    textAlign: "center",
    borderRadius: "5px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    fontWeight: "bold", // Bold text
    color: "#fff", // White text
    fontSize: "18px", // Slightly bigger font
  },
});
