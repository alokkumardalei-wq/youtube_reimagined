import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineVideoCameraAdd, AiOutlineBell, AiOutlineUser, AiOutlineHistory } from 'react-icons/ai';
import { BsMicFill, BsYoutube } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { MOCK_VIDEOS } from '../data/mockData';

interface NavbarProps {
  toggleSidebar: () => void;
  onSignInClick: () => void;
  onFocusModeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, onSignInClick, onFocusModeClick }) => {
  // ... existing code ...

  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof MOCK_VIDEOS>([]);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filtered = MOCK_VIDEOS.filter(v =>
        v.title.toLowerCase().includes(query.toLowerCase()) ||
        v.channelName.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (videoId: string) => {
    navigate(`/watch/${videoId}`);
    setShowSuggestions(false);
    setSearchQuery('');
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="icon-btn" onClick={toggleSidebar}>
          <AiOutlineMenu size={24} />
        </button>
        <div className="logo-container">
          <BsYoutube size={30} color="#FF0000" />
          <span className="logo-text">YouTube</span>
        </div>
      </div>

      <div className="navbar-center">
        <div className="search-bar-container" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
            />
            <button type="submit" className="search-btn">
              <AiOutlineSearch size={24} />
            </button>
          </form>

          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map(video => (
                <div
                  key={video.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(video.id)}
                >
                  <AiOutlineHistory className="suggestion-icon" />
                  <span className="suggestion-text">{video.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="mic-btn">
          <BsMicFill size={20} />
        </button>
      </div>

      <div className="navbar-right">
        <button
          className="icon-btn focus-btn"
          onClick={onFocusModeClick}
          title="Focus Mode"
        >
          <span className="focus-label">Focus</span>
        </button>
        <button className="icon-btn">
          <AiOutlineVideoCameraAdd size={24} />
        </button>
        <button className="icon-btn">
          <AiOutlineBell size={24} />
        </button>
        <button className="icon-btn" onClick={onSignInClick}>
          <AiOutlineUser size={24} />
        </button>
      </div>

      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
          height: var(--header-height);
          background-color: var(--bg-primary);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
        }

        .logo-text {
          font-size: 20px;
          font-weight: bold;
          letter-spacing: -0.5px;
          font-family: 'Oswald', sans-serif; 
        }

        .navbar-center {
          display: flex;
          align-items: center;
          flex: 0 1 732px;
          gap: 8px;
        }

        .search-bar-container {
          display: flex;
          flex: 1;
          align-items: center;
          position: relative;
        }

        .search-form {
           display: flex;
           flex: 1;
           align-items: center;
        }

        .search-suggestions {
            position: absolute;
            top: 100%;
            left: 0;
            right: 52px; /* Leave space for mic button roughly */
            background-color: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-top: none;
            border-radius: 0 0 12px 12px;
            padding: 8px 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.5);
            z-index: 1000;
        }

        .suggestion-item {
            display: flex;
            align-items: center;
            padding: 6px 24px;
            cursor: pointer;
            gap: 12px;
        }

        .suggestion-item:hover {
            background-color: var(--bg-hover);
        }

        .suggestion-icon {
            color: var(--text-secondary);
            min-width: 20px;
        }

        .suggestion-text {
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .search-input {
          flex: 1;
          background-color: #121212;
          border: 1px solid var(--border-color);
          border-right: none;
          color: var(--text-primary);
          padding: 8px 16px;
          font-size: 16px;
          border-radius: 40px 0 0 40px;
          height: 40px;
        }
        
        .search-input:focus {
           outline: none;
           border-color: #1c62b9;
        }

        .search-btn {
          height: 40px;
          width: 64px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 0 40px 40px 0;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .search-btn:hover {
          background-color: var(--bg-hover);
        }

        .mic-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background-color: #181818;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mic-btn:hover {
            background-color: var(--bg-hover);
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .icon-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-btn:hover {
          background-color: var(--bg-hover);
        }
        
        .focus-btn {
            border: 1px solid var(--border-color);
            border-radius: 18px;
            width: auto;
            padding: 0 12px;
            height: 36px;
        }

        .focus-label {
            font-weight: 600;
            font-size: 14px;
        }

        @media (max-width: 650px) {
            .navbar-center {
                display: none;
            }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
