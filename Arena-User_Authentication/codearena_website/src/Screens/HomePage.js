import React from "react";
import logo from "../Assets/Images/Logo.jpg";
import { colors } from "../Assets/Colors";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";


export default function HomePage() {
  const navigate = useNavigate();

  const goToAbout = (link) => {
    navigate(link);
  };

  return (
    <>
      {/* conatiner 1 */}
      <div className="container-fluid d-flex align-items-center justify-content-center home">
        <div className="row w-100">
          {/* Left Section */}
          <div className="mobile-img1">
            <img
              src="images/Logo.jpg"
              alt="Logo"
              className="d-md-none img-fluid p-4"
            />
          </div>
          <div className="col-md-7 d-flex flex-column justify-content-center align-items-start p-5 mb-3 home-content1">
            <div className="main-title-home mb-3">
              <h1 className="display-3 fw-medium mb-2 ">
                <span>Level up </span>
                <span>your </span>
                <span>Coding </span>
                <span>Game With </span>
                <span className="text-colour-red">ArenaHQ</span>
              </h1>
            </div>
            <div className="main-subtitle-home fw-semibold home-colour-second fw-semibold fs-4 mb-3 ">
              <p>
                We've crafted a clear step-by-step roadmap to help you conquer
                <span className=" "> Data Structures and Algorithms</span>.
              </p>
            </div>
            <div className="button-container">
              <button
                className=" ps-4 pe-4 btn site-main-colour text-light fw-semibold fs-5 "
                onClick={() => goToAbout("/topics")}
              >
                Get started
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-5 d-none d-md-flex flex-column align-items-center justify-content-center">
            <div className="screen-img">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid p-3"
                // style={{ maxHeight: "400px", maxWidth: "400px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* container 2 */}
      <div className="container-fluid d-flex align-items-center justify-content-center  mb-3 m-3 home">
        <div className="row w-100">
          <div className="col-md-5 d-none d-md-flex flex-column align-items-center justify-content-center">
            <div className="screen-img">
              <img
                src="/images/admi-aurat.svg"
                alt="Logo"
                className="img-fluid"
                // style={{ maxHeight: "571px", maxWidth: "571px" }}
              />
            </div>
          </div>

          <div className="col-md-7 d-flex flex-column justify-content-center align-items-start p-4 mb-2 home-content2">
          <div className="container2-content">
            <div className="col-md-5 mobile-image2 d-md-flex flex-column align-items-center justify-content-center">
              <img
                src="/images/admi-aurat.svg"
                alt="Logo"
                className="img-fluid p-3 d-md-none "
                // style={{ maxHeight: "400px", maxWidth: "400px" }}
              />
            </div>
              <div className="main-title2-home display-3 fw-bold  mb-3 ms-5">
                <h1 className="display-3 fw-medium mb-2">
                  <span>Discover Our </span>
                  <span>New </span>
                  <span className="text-colour-red">Learning </span>
                  <span className="text-colour-red">Paths </span>
                </h1>
              </div>
              <div className="main-subtitle2-home text-muted fw-semibold fs-5 mb-4 ms-4 ">
                <p>
                  <ul class="list-group list-group-flush mb-2 ms-1">
                    <li class="list-group-item">
                      <span className="fs-4"></span>
                      <span className="navFont .fw-semibold home-colour-second fw-semibold fs-4 ms-1">
                        Unlock endless possibilities, explore innovative
                        approaches!
                      </span>
                    </li>
                    <li class="list-group-item">
                      <span className="fs-4">🎯</span>{" "}
                      <span className="text-muted fw-bold">
                        Rookie Rumble :
                      </span>{" "}
                      Arrays,2D Arrays, searching and sorting, recursion
                    </li>
                    <li class="list-group-item">
                      <span className="fs-4">🎯</span>
                      <span className="text-muted fw-bold">
                        {" "}
                        Warriors Way :
                      </span>
                      Linked list, Stack, Tree, Heaps,HashMaps & Tries
                    </li>
                    <li class="list-group-item">
                      <span className="fs-4">🎯</span>
                      <span className="text-muted fw-bold">
                        {" "}
                        Veterans Vault :
                      </span>
                      Graph, Dynamic Programming, Bit manipulation
                    </li>
                  </ul>
                </p>
              </div>
              <div className="button-container2 ms-5">
              <button
                className=" ps-4 pe-4 btn site-main-colour text-light fw-semibold fs-5"
                onClick={() => goToAbout("/topics")}
              >
                Get started
              </button>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
