import React from "react";
import "./SideBar.css";

const  Sidebar = ()=> {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <span>☰</span>
                <span>💬</span>
                <span>📞</span>
                <span>👥</span>
            </div>

            <div className="sidebar-bottom">
                <span>⭐</span>
                <span>⚙️</span>
            </div>
        </div>
    );
}

export default Sidebar