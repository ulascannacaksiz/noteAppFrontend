import React from "react";
import style from "./Navbar.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Note from "../pages/note/Notes";
function Navbar() {
  return (
    <div>
      <NavLink
        className={style.link}
        to="/Login"
      >
        Giriş Yap
      </NavLink>
      <NavLink
     className={style.link}
        to="/Register"
      >
        Kayıt Ol
      </NavLink>
      <NavLink
            className={style.link}
        to="/Note"
      >
        Yeni Not Ekle
      </NavLink>

      <div className={style.right}>
        <a href="#">Hoş Geldin Ulaş</a>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </div>
  );
}

export default Navbar;
