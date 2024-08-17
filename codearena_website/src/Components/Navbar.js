import React, { useState } from "react";
import Hamburger from "hamburger-react";
import StyleSheet from "reactjs-stylesheet";
import { colors } from "../Assets/Colors";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Navbar({ isHomePage }) {
  const [isOpen, setOpen] = useState(false);

  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="white"
          size={22}
          disabled={isHomePage ? true : false}
        />
        <div style={styles.logo}>ArenaHQ</div>
      </div>

      <div style={styles.right}>
        <li style={styles.menuOptions}>
          <ul>Home</ul>
          <ul>About us</ul>
          <ul>Login</ul>
        </li>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          sunColor="white"
        />
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10vh",
    backgroundColor: colors.main,
    display: "flex", // Use Flexbox
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    marginLeft: 50,
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuOptions: {
    display: "flex",
    color: "white",
    fontWeight: 600,
    fontSize: 18,
  },
  right: {
    marginRight: 50,

    display: "flex",
    alignItems: "center",
    width: 500,
    justifyContent: "space-around",
  },

  logo: {
    color: "white",
    fontWeight: "bolder",
    fontSize: 22,
  },
});
