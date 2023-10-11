import React from "react";

import styles from "./styles.module.css";
import NavBar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
