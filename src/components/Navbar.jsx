import {
  AccountCircleOutlined,
  MenuRounded,
  Mic,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Menu } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebarExpanded }) => {
  const toggleSidebar = () => {
    setSidebarExpanded((previousValue) => !previousValue);
  };
  return (
    <header className="navbar">
      <div className="content content--left">
        <button
          className="button button--toggle-sidebar"
          onClick={() => {
            toggleSidebar();
          }}
        >
          <MenuRounded />
        </button>
        <Link className="link">
          <img
            className="logo"
            src="https://iconape.com/wp-content/files/mt/383138/svg/383138.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="content content--center">
        <div className="searchbox">
          <input className="input" placeholder="Search" />
          <button className="button button--search">
            <Search />
          </button>
          <button className="button button--microphone">
            <Mic />
          </button>
        </div>
      </div>
      <div className="content content--right">
        <button className="button button--more">
          <MoreVert />
        </button>
        <Link className="link link--sign-in">
          <AccountCircleOutlined />
          <label>Sign in</label>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
