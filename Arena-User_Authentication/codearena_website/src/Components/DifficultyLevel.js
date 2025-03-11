import React from "react";
import Stylesheet from "reactjs-stylesheet";
import { colors } from "../Assets/Colors";
import { NavLink } from "react-router-dom";
export default function DifficultyLevel({ img, text,desc, color, onClick }) {
  return (
    //  <div style={styles.container}>
    //   <img src={img} style={styles.image} />
    //   <span style={styles.text}>{text}</span>
    //   <button style={styles.tryButton} onClick={onClick}>
    //     Try
    //   </button>
    // </div> 

/* <div className="card p-3 shadow" style={{ width: "22rem" ,height:"26rem" }}>
<img src={img} className="card-img-top" alt="..." height="200" width="190" />
<div className="card-body">
  <h5 className="card-title">{text}</h5>
  <p className="card-text">Some quick example text to build on the card title of the card's content.</p>
  <a href="#" className="btn site-main-colour text-light fw-bold">Try {text}</a>
</div>
</div>   */

<div className="card mb-3 p-2 shadow-sm " style={{width: "450px"}}>
  <div className="row g-0">
    <div className="col-md-5 card-img-center  d-flex justify-content-center">
      <img src={img} className="rounded-start img-fluid "  alt="..." />
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title fw-medium fs-4">{text}</h5>
        <p className="card-text text-muted ">{desc}</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
      </div>
        <div className="justify-content-center">
        <NavLink to="#" className="btn site-main-colour text-light fw-bold mb-3 ms-2" onClick={onClick}>Try {text}</NavLink>
        </div>
    </div>
  </div>
</div>

  );
}

const styles = Stylesheet.create({
  container: {
    height: 400,
    width: 500,
    cursor: "pointer",
    // borderRadius: 30,
    display: "flex",
    flexDirection: "column", // Column layout
    alignItems: "center",
    justifyContent: "center", // Center content vertically
    border:"1px solid",
    // boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)", // Adding shadow
    padding: "20px", // Added padding for spacing
  },

  image: {
    height: 150, // Increased image size
    width: 150,
    marginBottom: 20, // Space between image and title
  },

  text: {
    color: "black",
    fontWeight: "bolder",
    fontSize: 22,
    marginBottom: 20, // Space between title and button
  },

  tryButton: {
    height: 40,
    width: 120,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    // borderRadius: 20, // 20px border radius
    // border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
});
