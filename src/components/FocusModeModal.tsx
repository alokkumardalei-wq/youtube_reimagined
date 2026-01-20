import React, { useState, useEffect } from 'react';
import { CATEGORIES, MOCK_VIDEOS } from '../data/mockData';
import { AiOutlineClose } from 'react-icons/ai';

interface FocusSettings {
    allowedCategories: string[];
    allowedChannels: string[];
    allowedTopics: string[];
    allowedCreators: string[];
    manualChannels: string[];
    manualCategories: string[];
    enableBlueLightFilter: boolean;
    sessionDuration: number;
}

interface FocusModeModalProps {
    isOpen: boolean;
    onClose: () => void;
    settings: FocusSettings;
    onSave: (settings: FocusSettings) => void;
    isEnabled: boolean;
    onToggle: (enabled: boolean) => void;
}

const FocusModeModal: React.FC<FocusModeModalProps> = ({ isOpen, onClose, settings, onSave, isEnabled, onToggle }) => {
    const [localSettings, setLocalSettings] = useState<FocusSettings>(settings);

    // Controlled inputs for manual adding
    const [topicInput, setTopicInput] = useState('');
    const [creatorInput, setCreatorInput] = useState('');
    const [channelInput, setChannelInput] = useState('');
    const [categoryInput, setCategoryInput] = useState('');

    // Extract unique channels from mock data
    const uniqueChannels = Array.from(new Set(MOCK_VIDEOS.map(v => v.channelName))).sort();

    useEffect(() => {
        setLocalSettings(settings);
    }, [settings, isOpen]);

    if (!isOpen) return null;

    const toggleCategory = (category: string) => {
        setLocalSettings(prev => {
            const isSelected = prev.allowedCategories.includes(category);
            return {
                ...prev,
                allowedCategories: isSelected
                    ? prev.allowedCategories.filter(c => c !== category)
                    : [...prev.allowedCategories, category]
            };
        });
    };

    const toggleChannel = (channel: string) => {
        setLocalSettings(prev => {
            const isSelected = prev.allowedChannels.includes(channel);
            return {
                ...prev,
                allowedChannels: isSelected
                    ? prev.allowedChannels.filter(c => c !== channel)
                    : [...prev.allowedChannels, channel]
            };
        });
    };

    const addTopic = () => {
        const val = topicInput.trim();
        if (val && !localSettings.allowedTopics.includes(val)) {
            setLocalSettings(prev => ({
                ...prev,
                allowedTopics: [...prev.allowedTopics, val]
            }));
            setTopicInput('');
        }
    };

    const addCreator = () => {
        const val = creatorInput.trim();
        if (val && !localSettings.allowedCreators.includes(val)) {
            setLocalSettings(prev => ({
                ...prev,
                allowedCreators: [...prev.allowedCreators, val]
            }));
            setCreatorInput('');
        }
    };

    const addChannel = () => {
        const val = channelInput.trim();
        if (val && !localSettings.manualChannels.includes(val)) {
            setLocalSettings(prev => ({
                ...prev,
                manualChannels: [...prev.manualChannels, val]
            }));
            setChannelInput('');
        }
    };

    const addCategory = () => {
        const val = categoryInput.trim();
        if (val && !localSettings.manualCategories.includes(val)) {
            setLocalSettings(prev => ({
                ...prev,
                manualCategories: [...prev.manualCategories, val]
            }));
            setCategoryInput('');
        }
    };

    const handleSave = () => {
        // Auto-add pending inputs on save
        let updatedSettings = { ...localSettings };

        if (topicInput.trim() && !updatedSettings.allowedTopics.includes(topicInput.trim())) {
            updatedSettings.allowedTopics = [...updatedSettings.allowedTopics, topicInput.trim()];
        }
        if (creatorInput.trim() && !updatedSettings.allowedCreators.includes(creatorInput.trim())) {
            updatedSettings.allowedCreators = [...updatedSettings.allowedCreators, creatorInput.trim()];
        }
        if (channelInput.trim() && !updatedSettings.manualChannels.includes(channelInput.trim())) {
            updatedSettings.manualChannels = [...updatedSettings.manualChannels, channelInput.trim()];
        }
        if (categoryInput.trim() && !updatedSettings.manualCategories.includes(categoryInput.trim())) {
            updatedSettings.manualCategories = [...updatedSettings.manualCategories, categoryInput.trim()];
        }

        onSave(updatedSettings);

        // Clear inputs
        setTopicInput('');
        setCreatorInput('');
        setChannelInput('');
        setCategoryInput('');

        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Focus Mode Settings</h2>
                    <button className="close-btn" onClick={onClose}><AiOutlineClose size={24} /></button>
                </div>

                <div className="modal-body">
                    <div className="toggle-section">
                        <label className="toggle-label">
                            <input
                                type="checkbox"
                                checked={isEnabled}
                                onChange={(e) => onToggle(e.target.checked)}
                            />
                            <span className="toggle-text">Enable Focus Mode</span>
                        </label>
                        <p className="toggle-desc">When enabled, only videos from selected categories and channels will be shown.</p>
                    </div>

                    {/* Blue Light & Session Settings */}
                    <div className="blue-light-section" style={{
                        background: '#1a1a1a',
                        padding: '15px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        border: '1px solid #333'
                    }}>
                        <div className="toggle-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <label className="toggle-label" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={localSettings.enableBlueLightFilter}
                                    onChange={(e) => setLocalSettings(prev => ({ ...prev, enableBlueLightFilter: e.target.checked }))}
                                />
                                <span className="toggle-text" style={{ fontSize: '14px', fontWeight: 500 }}>Enable Blue Light Filter (Eye Protection)</span>
                            </label>
                        </div>

                        {localSettings.enableBlueLightFilter && (
                            <div className="duration-input" style={{ marginLeft: '25px' }}>
                                <label style={{ fontSize: '13px', color: '#aaaaaa', display: 'block', marginBottom: '5px' }}>
                                    Session Duration (Hours):
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="24"
                                    step="0.5"
                                    value={localSettings.sessionDuration}
                                    onChange={(e) => setLocalSettings(prev => ({ ...prev, sessionDuration: parseFloat(e.target.value) || 0 }))}
                                    style={{
                                        background: '#2a2a2a',
                                        border: '1px solid #444',
                                        borderRadius: '4px',
                                        padding: '6px 10px',
                                        color: 'white',
                                        width: '80px'
                                    }}
                                />
                                <span style={{ fontSize: '12px', color: '#666', marginLeft: '10px' }}>
                                    (Set 0 for manual off)
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Custom Topics Input */}
                    <div className="selection-section">
                        <h3>Topics (Keywords)</h3>
                        <div className="input-with-btn">
                            <input
                                type="text"
                                placeholder="Add topic (e.g., React)..."
                                value={topicInput}
                                onChange={(e) => setTopicInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addTopic()}
                            />
                            <button className="add-btn" onClick={addTopic}>Add</button>
                        </div>
                        <div className="pill-grid">
                            {localSettings.allowedTopics.map(item => (
                                <button key={item} className="selection-pill active" onClick={() => setLocalSettings(prev => ({ ...prev, allowedTopics: prev.allowedTopics.filter(k => k !== item) }))}>
                                    {item} &times;
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Custom Creators Input */}
                    <div className="selection-section">
                        <h3>Creators</h3>
                        <div className="input-with-btn">
                            <input
                                type="text"
                                placeholder="Add specific creator name..."
                                value={creatorInput}
                                onChange={(e) => setCreatorInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addCreator()}
                            />
                            <button className="add-btn" onClick={addCreator}>Add</button>
                        </div>
                        <div className="pill-grid">
                            {localSettings.allowedCreators.map(item => (
                                <button key={item} className="selection-pill active" onClick={() => setLocalSettings(prev => ({ ...prev, allowedCreators: prev.allowedCreators.filter(k => k !== item) }))}>
                                    {item} &times;
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Manual Channels Input */}
                    <div className="selection-section">
                        <h3>Channels (Manual Add)</h3>
                        <div className="input-with-btn">
                            <input
                                type="text"
                                placeholder="Add channel name..."
                                value={channelInput}
                                onChange={(e) => setChannelInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addChannel()}
                            />
                            <button className="add-btn" onClick={addChannel}>Add</button>
                        </div>
                        <div className="pill-grid">
                            {localSettings.manualChannels.map(item => (
                                <button key={item} className="selection-pill active" onClick={() => setLocalSettings(prev => ({ ...prev, manualChannels: prev.manualChannels.filter(k => k !== item) }))}>
                                    {item} &times;
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Manual Categories Input */}
                    <div className="selection-section">
                        <h3>Categories (Manual Add)</h3>
                        <div className="input-with-btn">
                            <input
                                type="text"
                                placeholder="Add category (e.g., Vlog, Review)..."
                                value={categoryInput}
                                onChange={(e) => setCategoryInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && addCategory()}
                            />
                            <button className="add-btn" onClick={addCategory}>Add</button>
                        </div>
                        <div className="pill-grid">
                            {localSettings.manualCategories.map(item => (
                                <button key={item} className="selection-pill active" onClick={() => setLocalSettings(prev => ({ ...prev, manualCategories: prev.manualCategories.filter(k => k !== item) }))}>
                                    {item} &times;
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="selection-section">
                        <h3>Allowed Categories</h3>
                        <div className="pill-grid">
                            {CATEGORIES.filter(c => c !== 'All').map(category => (
                                <button
                                    key={category}
                                    className={`selection-pill ${localSettings.allowedCategories.includes(category) ? 'active' : ''}`}
                                    onClick={() => toggleCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="selection-section">
                        <h3>Allowed Channels</h3>
                        <div className="pill-grid">
                            {uniqueChannels.map(channel => (
                                <button
                                    key={channel}
                                    className={`selection-pill ${localSettings.allowedChannels.includes(channel) ? 'active' : ''}`}
                                    onClick={() => toggleChannel(channel)}
                                >
                                    {channel}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="save-btn" onClick={handleSave}>Save & Close</button>
                </div>
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .modal-content {
                    background-color: var(--bg-secondary);
                    width: 90%;
                    max-width: 600px;
                    max-height: 90vh;
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    color: var(--text-primary);
                }

                .modal-header {
                    padding: 16px 24px;
                    border-bottom: 1px solid var(--border-color);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: var(--text-primary);
                    cursor: pointer;
                }

                .modal-body {
                    padding: 24px;
                    overflow-y: auto;
                    flex: 1;
                }

                .toggle-section {
                    margin-bottom: 24px;
                    padding-bottom: 24px;
                    border-bottom: 1px solid var(--border-color);
                }

                .toggle-label {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                }

                .toggle-desc {
                    margin-top: 8px;
                    color: var(--text-secondary);
                    font-size: 14px;
                }

                .selection-section {
                    margin-bottom: 24px;
                }

                .selection-section h3 {
                    margin-bottom: 12px;
                    font-size: 16px;
                }

                .pill-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 10px;
                }

                .selection-pill {
                    background-color: #2a2a2a;
                    border: 1px solid var(--border-color);
                    color: var(--text-primary);
                    padding: 6px 12px;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .selection-pill:hover {
                    background-color: var(--bg-hover);
                }

                .selection-pill.active {
                    background-color: var(--text-primary);
                    color: var(--bg-primary);
                    border-color: var(--text-primary);
                }

                .modal-footer {
                    padding: 16px 24px;
                    border-top: 1px solid var(--border-color);
                    display: flex;
                    justify-content: flex-end;
                }

                .save-btn {
                    background-color: #3ea6ff;
                    color: white;
                    border: none;
                    padding: 10px 24px;
                    border-radius: 20px;
                    font-weight: 600;
                    cursor: pointer;
                }

                .save-btn:hover {
                    background-color: #3095e8;
                }

                .helper-text {
                    font-size: 12px;
                    color: var(--text-secondary);
                    margin: 6px 0 12px 0;
                }

                 .input-with-btn {
                    display: flex;
                    gap: 8px;
                    width: 100%;
                }
                
                .input-with-btn input {
                    flex: 1;
                    padding: 10px 14px;
                    border-radius: 8px;
                    background-color: #1a1a1a;
                    border: 1px solid var(--border-color);
                    color: white;
                    font-size: 14px;
                }
                
                .input-with-btn input:focus {
                    outline: 1px solid #3ea6ff;
                }
                
                .add-btn {
                    background-color: #2a2a2a;
                    border: 1px solid var(--border-color);
                    color: var(--text-primary);
                    padding: 0 16px;
                    border-radius: 8px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                
                .add-btn:hover {
                    background-color: #3ea6ff;
                    color: white;
                    border-color: #3ea6ff;
                }
            `}</style>
        </div>
    );
};

export default FocusModeModal;
