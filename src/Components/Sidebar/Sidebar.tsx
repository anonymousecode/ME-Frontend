import React from "react";
import styles from "./Sidebar.module.css";
import { FaTachometerAlt, FaRegSmile, FaCalendarAlt, FaUser, FaPen, FaSignOutAlt } from "react-icons/fa";

interface SidebarProps {
  onSelect: (component: string) => void;
}


const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  return (
    <nav className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="https://mind-empowered.org/logo192.png" alt="Logo" />
      </div>

      {/* Sidebar Menu */}
      {/* <ul className={styles.navLinks}>
        <li>
          <a href="#">
            <FaTachometerAlt className={styles.icon} />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaRegSmile className={styles.icon} />
            <span>Members</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaCalendarAlt className={styles.icon} />
            <span>Events</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaUser className={styles.icon} />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FaPen className={styles.icon} />
            <span>Feedback</span>
          </a>
        </li>
        <li className={styles.logout}>
          <a href="#">
            <FaSignOutAlt className={styles.icon} />
            <span>Logout</span>
          </a>
        </li>
      </ul> */}

      {/* Sidebar Menu */}
      <ul className={styles.navLinks}>
        <li onClick={() => onSelect("Dashboard")}>
          <FaTachometerAlt className={styles.icon} />
          <span>Dashboard</span>
        </li>
        <li onClick={() => onSelect("Members")}>
          <FaRegSmile className={styles.icon} />
          <span>Members</span>
        </li>
        <li onClick={() => onSelect("Events")}>
          <FaCalendarAlt className={styles.icon} />
          <span>Events</span>
        </li>
        <li onClick={() => onSelect("Profile")}>
          <FaUser className={styles.icon} />
          <span>Profile</span>
        </li>
        <li onClick={() => onSelect("Feedback")}>
          <FaPen className={styles.icon} />
          <span>Feedback</span>
        </li>
        <li className={styles.logout} onClick={() => onSelect("Logout")}>
          <FaSignOutAlt className={styles.icon} />
          <span>Logout</span>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;




