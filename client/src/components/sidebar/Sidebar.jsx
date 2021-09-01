import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
 function facebook(){
   window.location.href="https://www.facebook.com/profile.php?id=100009118479186";
 }
 function instagram(){
   window.location.href="https://www.instagram.com/aman_supertramp/";
 }
 function twitter(){
  window.location.href="https://twitter.com/supertramp_aman";
}
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="image"
          src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=727&q=80"
          alt=""
        />
        <p>
          Jobs fill your pockets , but 
          Adventures fill your soul , so
          sometimes getting lost is not a waste of time.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square" onClick={facebook}></i>
          <i className="sidebarIcon fab fa-twitter-square" onClick={twitter}></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square" onClick={instagram}></i>
        </div>
      </div>
    </div>
  );
}
