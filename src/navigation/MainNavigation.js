import React, { useState } from "react";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../util/UIElements/Backdrop";
const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsopen] = useState(false);
  const openDrawer = () => {
    setDrawerIsopen(true);
  };
  const closeDrawer = () => {
    setDrawerIsopen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      }
      <MainHeader>
        <p className="main-navigation__title">
          <Link to="/" className="main-navigation-title-hover">
            {" "}
            <img src="/images/homepage/logo.png" alt="logo" />
          </Link>
        </p>
        <div
          style={{
           
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: '5rem'
          }}
        >
          <span style={{fontWeight: '700', color: '#52616b'}}>MENU</span>
          <button className="main-navigation__menu-btn" onClick={openDrawer}>
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
