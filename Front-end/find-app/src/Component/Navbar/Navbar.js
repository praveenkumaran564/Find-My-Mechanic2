import React from "react";
import { NavLink } from "react-router-dom";
import { Authuse } from "../Userauth";

export default function Navbar() {
  const username = Authuse();
  return (
    <div className="head">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/aboutus"}>AboutUs</NavLink>
      <NavLink to={"/services"}>Services</NavLink>
      {username.userName ?"": (
        <>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={"/signup"}>SignUp</NavLink>
        </>
      )}

      <NavLink to={"/profile"}>profile</NavLink>
    </div>
  );
}
