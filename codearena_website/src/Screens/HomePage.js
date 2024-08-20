// import React from "react";
// import Stylesheet from "reactjs-stylesheet";
// import logo from "../Assets/Images/Logo.jpg";

// import { colors } from "../Assets/Colors";
// export default function HomePage() {
//   return (
//     <div style={styles.container}>
//       <div style={styles.left}>
//         <div style={styles.header}>
//           Level up your <br></br>
//           <span style={{ color: colors.main }}>Coding</span> Game
//         </div>
//         <div style={styles.subtext}>
//           We've crafted a clear, step-by-step roadmap to help you conquer Data
//           Structures and Algorithms.
//         </div>
//         <div style={styles.btn}>Get started</div>
//       </div>
//       <div style={styles.right}>
//         <img src={logo} style={styles.image}></img>
//       </div>

//       <div style={styles.difficultyOptions}></div>
//     </div>
//   );
// }

// const styles = Stylesheet.create({
//   container: {
//     display: "flex",
//     justifyContent: "space-around",
//     height: "80%",
//   },

//   image: {
//     height: 600,
//     width: 600,
//   },
//   left: {
//     height: "100%",
//     width: "30%",

//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",

//     marginLeft: 80,
//   },

//   right: {
//     width: "40%",
//     display: "flex",
//     alignItems: "center",
//   },
//   header: {
//     fontSize: 70,
//     wordSpacing: 10,
//     fontWeight: "bolder",
//     marginBottom: 20,
//   },
//   subtext: {
//     fontSize: 22,
//     fontWeight: 600,
//   },

//   btn: {
//     width: "100%",
//     backgroundColor: colors.main,
//     marginTop: 60,
//     height: 60,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bolder",
//   },
//   social: {
//     display: "flex",
//     backgroundColor: "green",
//   },
//   img: {
//     height: 30,
//     width: 30,
//   },

//   difficultyOptions: {
//     height: 400,
//     width: "100%",
//     backgroundColor: "red",
//   },
// });

import React from "react";
import Stylesheet from "reactjs-stylesheet";
import logo from "../Assets/Images/Logo.jpg";
import { colors } from "../Assets/Colors";
import DifficultyLevel from "../Components/DifficultyLevel";
import Egg from "../Assets/Images/egg.png";
import Viking from "../Assets/Images/viking.png";
import Veteran from "../Assets/Images/veteran.png";
import Business from "../Assets/Images/businessman.png";

export default function HomePage() {
  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.left}>
          <div style={styles.header}>
            Level up your <br />
            <span style={{ color: colors.main }}>Coding</span> Game
          </div>
          <div style={styles.subtext}>
            We've crafted a clear, step-by-step roadmap to help you conquer Data
            Structures and Algorithms.
          </div>
          <div style={styles.btn}>Get started</div>
        </div>
        <div style={styles.right}>
          <img src={logo} style={styles.image} alt="Logo" />
        </div>
      </div>
      <div style={styles.difficultyOptions}>
        <DifficultyLevel img={Egg} text="Rookie Rumble" color={colors.rookie} />
        <DifficultyLevel
          img={Viking}
          text="Warrior's Way"
          color={colors.warrior}
        />
        <DifficultyLevel
          img={Veteran}
          text="Veteran's Vault"
          color={colors.veteran}
        />
        <DifficultyLevel
          img={Business}
          text="Training Grounds"
          color={colors.training}
        />
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "95%",
  },

  contentContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },

  image: {
    height: 600,
    width: 600,
  },
  left: {
    height: "100%",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 80,
  },

  right: {
    width: "40%",
    display: "flex",
    alignItems: "center",
  },
  header: {
    fontSize: 70,
    wordSpacing: 10,
    fontWeight: "bolder",
    marginBottom: 20,
  },
  subtext: {
    fontSize: 22,
    fontWeight: 600,
  },

  btn: {
    width: "100%",
    backgroundColor: colors.main,
    marginTop: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bolder",
  },

  difficultyOptions: {
    marginTop: 20,
    height: "100%",
    width: "100%",

    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingRight: 60,
    paddingLeft: 60,
  },
});
