import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineCompass, AiOutlineClockCircle, AiOutlineLike } from 'react-icons/ai';
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdHistory } from 'react-icons/md';
import { GoVideo } from 'react-icons/go';
import { BsFire } from 'react-icons/bs';
import { IoGameControllerOutline, IoMusicalNoteOutline } from 'react-icons/io5';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    if (!isOpen) return null;

    const isActive = (path: string) => location.pathname === path;

    const mainLinks = [
        { icon: <AiFillHome size={24} />, text: "Home", path: "/" },
        { icon: <AiOutlineCompass size={24} />, text: "Shorts", path: "/shorts" },
        { icon: <MdOutlineSubscriptions size={24} />, text: "Subscriptions", path: "/feed/subscriptions" },
    ];

    const secondaryLinks = [
        { icon: <MdOutlineVideoLibrary size={24} />, text: "Library", path: "/library" },
        { icon: <MdHistory size={24} />, text: "History", path: "/feed/history" },
        { icon: <GoVideo size={24} />, text: "Your videos", path: "/studio/videos" },
        { icon: <AiOutlineClockCircle size={24} />, text: "Watch later", path: "/playlist?list=WL" },
        { icon: <AiOutlineLike size={24} />, text: "Liked videos", path: "/playlist?list=LL" },
    ];

    const exploreLinks = [
        { icon: <BsFire size={24} />, text: "Trending", path: "/feed/trending" },
        { icon: <IoMusicalNoteOutline size={24} />, text: "Music", path: "/channel/music" },
        { icon: <IoGameControllerOutline size={24} />, text: "Gaming", path: "/gaming" },
    ];

    const handleNavigation = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                {mainLinks.map((link, index) => (
                    <div
                        key={index}
                        className={`sidebar-item ${isActive(link.path) ? 'active' : ''}`}
                        onClick={() => handleNavigation(link.path)}
                    >
                        <span className="sidebar-icon">{link.icon}</span>
                        <span className="sidebar-text">{link.text}</span>
                    </div>
                ))}
            </div>
            <div className="sidebar-divider" />
            <div className="sidebar-section">
                <h3 className="sidebar-title">You</h3>
                {secondaryLinks.map((link, index) => (
                    <div
                        key={index}
                        className={`sidebar-item ${isActive(link.path) ? 'active' : ''}`}
                        onClick={() => handleNavigation(link.path)}
                    >
                        <span className="sidebar-icon">{link.icon}</span>
                        <span className="sidebar-text">{link.text}</span>
                    </div>
                ))}
            </div>

            <div className="sidebar-divider" />
            <div className="sidebar-section">
                <h3 className="sidebar-title">Explore</h3>
                {exploreLinks.map((link, index) => (
                    <div
                        key={index}
                        className={`sidebar-item ${isActive(link.path) ? 'active' : ''}`}
                        onClick={() => handleNavigation(link.path)}
                    >
                        <span className="sidebar-icon">{link.icon}</span>
                        <span className="sidebar-text">{link.text}</span>
                    </div>
                ))}
            </div>

            <style>{`
        .sidebar {
          width: var(--sidebar-width);
          background-color: var(--bg-primary);
          height: calc(100vh - var(--header-height));
          overflow-y: auto;
          position: sticky;
          top: var(--header-height);
          padding-right: 12px;
        }

        .sidebar-section {
          padding: 12px;
        }

        .sidebar-item {
          display: flex;
          align-items: center;
          padding: 0 12px;
          height: 40px;
          border-radius: 10px;
          cursor: pointer;
          color: var(--text-primary);
        }

        .sidebar-item:hover {
          background-color: var(--bg-hover);
        }
        
        .sidebar-item.active {
           background-color: var(--bg-secondary);
           font-weight: 500;
        }
        
        .sidebar-item.active:hover {
            background-color: #3d3d3d; /* slightly lighter than active for hover effect */
        }

        .sidebar-icon {
          margin-right: 24px;
          display: flex;
          align-items: center;
        }

        .sidebar-text {
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .sidebar-divider {
            height: 1px;
            background-color: var(--border-color);
            margin: 12px 0;
        }
        
        .sidebar-title {
            font-size: 16px;
            font-weight: 500;
            padding: 8px 12px;
            display: flex;
            align-items: center;
        }
        
        @media(max-width: 1000px) {
            .sidebar {
               /* Could implement mini sidebar logic here for tablet if needed, 
                  but for now we will rely on isOpen prop or overlay */
            }
        }
      `}</style>
        </aside>
    );
};

export default Sidebar;
