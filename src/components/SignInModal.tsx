import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface SignInModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the actual authentication
        console.log('Logging in with:', email, password);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Sign In</h2>
                    <button className="close-btn" onClick={onClose}>
                        <AiOutlineClose size={24} />
                    </button>
                </div>

                <div className="modal-body">
                    <p className="modal-subtitle">Continue to YouTube Clone</p>

                    <form onSubmit={handleSubmit} className="signin-form">
                        <div className="form-group">
                            <label>Email or phone</label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="modal-input"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="modal-input"
                                required
                            />
                        </div>

                        <div className="modal-actions">
                            <a href="#" className="forgot-link">Forgot email?</a>
                        </div>

                        <p className="guest-mode-info">
                            Not your computer? Use Guest mode to sign in privately. <a href="#">Learn more</a>
                        </p>

                        <div className="form-footer">
                            <a href="#" className="create-account-link">Create account</a>
                            <button type="submit" className="submit-btn">Next</button>
                        </div>
                    </form>
                </div>
            </div>

            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    backdrop-filter: blur(2px);
                }

                .modal-content {
                    background-color: var(--bg-primary);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    width: 450px;
                    max-width: 90%;
                    padding: 0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                    animation: fadeIn 0.3s ease;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 16px 24px;
                }
                
                .modal-header h2 {
                    font-size: 24px;
                    font-weight: 500;
                    color: var(--text-primary);
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 50%;
                }
                
                .close-btn:hover {
                    background-color: var(--bg-hover);
                }

                .modal-body {
                    padding: 0 24px 48px 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .modal-subtitle {
                    font-size: 16px;
                    margin-bottom: 40px;
                    color: var(--text-primary);
                }
                
                .signin-form {
                    width: 100%;
                }
                
                .form-group {
                    margin-bottom: 24px;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #5f5f5f;
                    border-radius: 4px;
                    padding: 8px 12px;
                    background-color: transparent;
                }
                
                .form-group:focus-within {
                    border-color: #3ea6ff;
                    border-width: 2px;
                    padding: 7px 11px; /* Adjust for border width */
                }
                
                .form-group label {
                    font-size: 12px;
                    color: #aaa;
                    margin-bottom: 4px;
                }
                
                .modal-input {
                    background: none;
                    border: none;
                    color: var(--text-primary);
                    font-size: 16px;
                    outline: none;
                }
                
                .forgot-link {
                    color: #3ea6ff;
                    font-weight: 500;
                    text-decoration: none;
                    font-size: 14px;
                }
                
                .guest-mode-info {
                    margin-top: 40px;
                    font-size: 14px;
                    color: var(--text-secondary);
                    line-height: 1.4;
                }
                
                .guest-mode-info a, .create-account-link {
                    color: #3ea6ff;
                    text-decoration: none;
                    font-weight: 500;
                }
                
                .form-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 40px;
                }
                
                .submit-btn {
                    background-color: #3ea6ff;
                    color: black;
                    border: none;
                    padding: 10px 24px;
                    border-radius: 4px;
                    font-weight: 500;
                    font-size: 14px;
                    cursor: pointer;
                }
                
                .submit-btn:hover {
                    background-color: #65b8ff;
                }
            `}</style>
        </div>
    );
};

export default SignInModal;
