import React from "react";
import style from "./Navbar.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Note from "../pages/note/Notes";
import AddNote from "../pages/note/AddNote";
import EditNote from "../pages/note/EditNote";
import { useSelector } from "react-redux";
function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.login);

  return (
    <div>
      {!isLoggedIn && (
        <>
          <NavLink className={style.link} to="/Login">
            Giriş Yap
          </NavLink>
          <NavLink className={style.link} to="/Register">
            Kayıt Ol
          </NavLink>
        </>
      )}

      {isLoggedIn && (
        <>
          <NavLink className={style.link} to="/Note">
            Notlar
          </NavLink>
          <NavLink className={style.link} to="/AddNote">
            Yeni Not Ekle
          </NavLink>
          <div className={style.right}>
            <a href="#">Hoş Geldin Ulaş</a>
          </div>
        </>
        
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/note" element={<Note />} />
        <Route path="/editnote/:id" element={<EditNote />} />
        <Route path="/addnote" element={<AddNote />} />
      </Routes>
    </div>
  );
}

export default Navbar;
