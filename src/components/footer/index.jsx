import React from "react";

import { footerIcons } from "../constants/Footer.Schema";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.column_one}>
        <p>Copyright &copy; 2023 Martins Ngene. All Rights Reserved.</p>
      </div>
      <div className={styles.column_two}>
        {footerIcons.map((icon, index) => {
          return (
            <div className='cursor-pointer' key={index}>
              <a href={icon.link}>
                <div className={styles.link} title={icon.name}>
                  {icon.icon}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
