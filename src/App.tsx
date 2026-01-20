import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';
import SignInModal from './components/SignInModal';
import FocusModeModal from './components/FocusModeModal';
import BlueLightOverlay from './components/BlueLightOverlay';
import './App.css';

interface FocusSettings {
  allowedCategories: string[];
  allowedChannels: string[];
  allowedTopics: string[];
  allowedCreators: string[];
  manualChannels: string[];
  manualCategories: string[];
  enableBlueLightFilter: boolean;
  sessionDuration: number; // in hours
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  // Focus Mode State
  const [isFocusModeOpen, setIsFocusModeOpen] = useState(false);
  const [isFocusEnabled, setIsFocusEnabled] = useState(false);
  const [focusSettings, setFocusSettings] = useState<FocusSettings>({
    allowedCategories: ['Programming', 'Computer Science'], // Default defaults
    allowedChannels: [],
    allowedTopics: [],
    allowedCreators: [],
    manualChannels: [],
    manualCategories: [],
    enableBlueLightFilter: true, // Default On
    sessionDuration: 0 // 0 means indefinite/manual toggle
  });

  const [isBlueLightActive, setIsBlueLightActive] = useState(false);

  // Blue Light Timer Logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isFocusEnabled && focusSettings.enableBlueLightFilter) {
      setIsBlueLightActive(true);

      if (focusSettings.sessionDuration > 0) {
        timer = setTimeout(() => {
          setIsBlueLightActive(false);
          // Optional: You could also auto-disable focus mode here if desired
          // setIsFocusEnabled(false); 
        }, focusSettings.sessionDuration * 60 * 60 * 1000); // Hours to milliseconds
      }
    } else {
      setIsBlueLightActive(false);
    }

    return () => clearTimeout(timer);
  }, [isFocusEnabled, focusSettings.enableBlueLightFilter, focusSettings.sessionDuration]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className={`app ${isFocusEnabled ? 'focus-mode-active' : ''}`}>
        <Navbar
          toggleSidebar={toggleSidebar}
          onSignInClick={() => setIsSignInOpen(true)}
          onFocusModeClick={() => setIsFocusModeOpen(true)}
        />
        <div className="main-content">
          <BlueLightOverlay isActive={isBlueLightActive} />
          <Sidebar isOpen={sidebarOpen} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={
                <Home
                  isFocusEnabled={isFocusEnabled}
                  focusSettings={focusSettings}
                />
              } />
              <Route path="/watch/:id" element={
                <VideoDetail
                  isFocusEnabled={isFocusEnabled}
                  focusSettings={focusSettings}
                />
              } />
            </Routes>
          </div>
        </div>

        <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />

        <FocusModeModal
          isOpen={isFocusModeOpen}
          onClose={() => setIsFocusModeOpen(false)}
          isEnabled={isFocusEnabled}
          onToggle={setIsFocusEnabled}
          settings={focusSettings}
          onSave={setFocusSettings}
        />
      </div>
      <style>{`
        .app {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: var(--bg-primary);
        }
        
        .app.focus-mode-active {
          --bg-primary: #000000;
          --bg-secondary: #111111;
        }

        .main-content {
          display: flex;
          flex: 1;
          height: calc(100vh - var(--header-height));
          overflow: hidden;
        }

        .content-area {
          flex: 1;
          overflow-y: auto;
          height: calc(100vh - var(--header-height));
        }
      `}</style>
    </Router>
  );
}

export default App;
