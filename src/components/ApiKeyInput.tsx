import React, { useState, useEffect } from 'react';
import { AiOutlineKey, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineCheck } from 'react-icons/ai';

interface ApiKeyInputProps {
    onKeySave: (key: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onKeySave }) => {
    const [key, setKey] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const storedKey = localStorage.getItem('gemini_api_key');
        if (storedKey) {
            setKey(storedKey);
            setSaved(true);
            onKeySave(storedKey);
        }
    }, [onKeySave]);

    const handleSave = () => {
        if (key.trim()) {
            localStorage.setItem('gemini_api_key', key.trim());
            setSaved(true);
            onKeySave(key.trim());
        }
    };

    const handleClear = () => {
        localStorage.removeItem('gemini_api_key');
        setKey('');
        setSaved(false);
        onKeySave('');
    };

    return (
        <div className="api-key-container">
            <div className="api-header">
                <AiOutlineKey size={20} />
                <span>Gemini API Key</span>
            </div>

            <div className="api-body">
                <p className="api-desc">
                    Enter your Gemini API Key to enable real-time AI features.
                    <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style={{ color: '#3ea6ff', marginLeft: '5px' }}>
                        Get it here
                    </a>
                </p>

                <div className="input-row">
                    <div className="input-wrapper">
                        <input
                            type={isVisible ? "text" : "password"}
                            placeholder="Enter API Key"
                            value={key}
                            onChange={(e) => {
                                setKey(e.target.value);
                                setSaved(false);
                            }}
                            className="api-input"
                        />
                        <button
                            className="toggle-visibility"
                            onClick={() => setIsVisible(!isVisible)}
                        >
                            {isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                    {!saved ? (
                        <button className="save-btn" onClick={handleSave}>Save</button>
                    ) : (
                        <button className="saved-btn" onClick={handleClear}>
                            <AiOutlineCheck /> Linked
                        </button>
                    )}
                </div>
            </div>

            <style>{`
                .api-key-container {
                    background: #1a1a1a;
                    border: 1px solid #333;
                    border-radius: 8px;
                    padding: 12px;
                    margin-bottom: 20px;
                }
                .api-header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 600;
                    color: #ddd;
                    margin-bottom: 8px;
                    font-size: 14px;
                }
                .api-desc {
                    font-size: 12px;
                    color: #888;
                    margin-bottom: 8px;
                }
                .input-row {
                    display: flex;
                    gap: 8px;
                }
                .input-wrapper {
                    position: relative;
                    flex: 1;
                }
                .api-input {
                    width: 100%;
                    padding: 8px 30px 8px 10px;
                    background: #0f0f0f;
                    border: 1px solid #444;
                    border-radius: 4px;
                    color: white;
                    font-size: 13px;
                }
                .toggle-visibility {
                    position: absolute;
                    right: 8px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: none;
                    border: none;
                    color: #888;
                    cursor: pointer;
                    display: flex;
                }
                .save-btn {
                    padding: 0 16px;
                    background: #3ea6ff;
                    color: black;
                    border: none;
                    border-radius: 4px;
                    font-weight: 500;
                    cursor: pointer;
                    font-size: 13px;
                }
                 .saved-btn {
                    padding: 0 16px;
                    background: #2ba640;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-weight: 500;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 13px;
                }
            `}</style>
        </div>
    );
};

export default ApiKeyInput;
