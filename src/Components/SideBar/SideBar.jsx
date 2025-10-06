import React from "react";
import "./Sidebar.css";
// Sidebar.jsx
export default function Sidebar() {
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
