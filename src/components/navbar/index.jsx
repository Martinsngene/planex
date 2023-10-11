import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import { Links } from "../constants/NavBar.Schema";
import Menu from "../menu";
import styles from "./styles.module.css";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <nav className={styles.container}>
      {/* Logo */}
      <div className={styles.logo_container}>
        <a href='/'>Planex🚀</a>
      </div>
      {/* Nav Links Container */}
      <ul className={styles.nav_links_container}>
        {Links.map((item, index) => {
          return (
            <a key={index} href={item.route}>
              <button className={styles.nav_link}>
                {item.link.toUpperCase()}
              </button>
            </a>
          );
        })}
      </ul>

      {/* Open Menu Button */}
      <div className='block md:hidden'>
        <button
          className={styles.menu_open_button}
          onClick={() => setMenuState(true)}>
          <BiMenu />
        </button>
      </div>
      {/* Menu */}
      {menuState && <Menu ctrlMenu={() => setMenuState(false)} />}
    </nav>
  );
};

export default NavBar;
