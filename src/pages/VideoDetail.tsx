import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_VIDEOS, MOCK_COMMENTS } from '../data/mockData';
import CommentList from '../components/CommentList';
import AICompanion from '../components/AICompanion';
import { getFallbackTranscript } from '../utils/aiUtils';

import { AiOutlineLike, AiOutlineDislike, AiOutlineShareAlt, AiOutlineScissor, AiOutlineMore } from 'react-icons/ai';

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

interface VideoDetailProps {
    isFocusEnabled?: boolean;
    focusSettings?: FocusSettings;
}

const VideoDetail: React.FC<VideoDetailProps> = ({ isFocusEnabled, focusSettings }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const video = MOCK_VIDEOS.find(v => v.id === id) || MOCK_VIDEOS[0];
    const activeTranscript = getFallbackTranscript(video);

    // Filter Logic Helper
    const isVideoAllowed = (v: typeof MOCK_VIDEOS[0]) => {
        if (!isFocusEnabled || !focusSettings) return true;

        const isAllowedCategory = focusSettings.allowedCategories.includes(v.category) ||
            focusSettings.manualCategories.some(c => v.category.toLowerCase().includes(c.toLowerCase()));

        const isAllowedChannel = focusSettings.allowedChannels.includes(v.channelName) ||
            focusSettings.manualChannels.some(c => v.channelName.toLowerCase().includes(c.toLowerCase()));

        const isAllowedCreator = focusSettings.allowedCreators.some(creator =>
            v.channelName.toLowerCase().includes(creator.toLowerCase())
        );

        const matchesTopic = focusSettings.allowedTopics.some(topic => {
            const t = topic.toLowerCase();
            return v.title.toLowerCase().includes(t) ||
                v.category.toLowerCase().includes(t);
        });

        return isAllowedCategory || isAllowedChannel || isAllowedCreator || matchesTopic;
    };

    // Smarter recommendations: same category, exclude current video, RESPECT FOCUS MODE
    const relatedVideos = MOCK_VIDEOS
        .filter(v => v.category === video.category && v.id !== video.id)
        .filter(isVideoAllowed) // Apply focus filter
        .slice(0, 10);

    // Fallback if not enough related videos
    const fallbackVideos = MOCK_VIDEOS
        .filter(v => v.id !== video.id)
        .filter(isVideoAllowed) // Apply focus filter
        .slice(0, 10);

    const displayVideos = relatedVideos.length > 0 ? relatedVideos : fallbackVideos;

    const handleVideoClick = (videoId: string) => {
        navigate(`/watch/${videoId}`);
        window.scrollTo(0, 0); // Scroll to top on navigation
    };

    return (
        <div className="video-detail-page">
            <div className="primary-column">
                <div className="player-wrapper">
                    <div className="video-player-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="video-iframe"
                        ></iframe>
                    </div>
                </div>

                <h1 className="video-title-main">{video.title}</h1>

                <div className="video-actions-row">
                    <div className="channel-info">
                        <img src={video.channelAvatar} alt={video.channelName} className="channel-avatar-lg" />
                        <div className="channel-text">
                            <h3 className="channel-name-lg">{video.channelName}</h3>
                            <span className="sub-count">1.2M subscribers</span>
                        </div>
                        <button className="subscribe-btn">Subscribe</button>
                    </div>

                    <div className="actions-group">
                        <div className="action-btn-group">
                            <button className="action-btn rounded-l">
                                <AiOutlineLike size={20} /> <span>12K</span>
                            </button>
                            <div className="separator"></div>
                            <button className="action-btn rounded-r">
                                <AiOutlineDislike size={20} />
                            </button>
                        </div>

                        <button className="action-btn rounded-full">
                            <AiOutlineShareAlt size={20} /> <span>Share</span>
                        </button>
                        <button className="action-btn rounded-full">
                            <AiOutlineScissor size={20} /> <span>Clip</span>
                        </button>
                        <button className="action-btn icon-only rounded-full">
                            <AiOutlineMore size={20} />
                        </button>
                    </div>
                </div>

                <div className="description-box">
                    <p className="views-date">{video.views} • {video.postedAt}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="show-more-btn">Show more</button>
                </div>

                <div className="comments-section">
                    <CommentList comments={MOCK_COMMENTS} />
                </div>
            </div>

            <div className="secondary-column">

                {/* AI Companion Section (Visible if data exists OR transcript exists for generation) */}
                {(video.aiSummary || video.factCheck || activeTranscript) && (
                    <AICompanion
                        summary={video.aiSummary}
                        factChecks={video.factCheck}
                        videoTitle={video.title}
                        transcript={activeTranscript}
                    />
                )}

                {displayVideos.map((v) => (
                    <div
                        key={v.id}
                        className="compact-video-card"
                        onClick={() => handleVideoClick(v.id)}
                    >
                        <div className="compact-thumbnail">
                            <img src={v.thumbnail} alt={v.title} />
                            <span className="compact-duration">{v.duration}</span>
                        </div>
                        <div className="compact-info">
                            <h4 className="compact-title">{v.title}</h4>
                            <p className="compact-channel">{v.channelName}</p>
                            <p className="compact-views">{v.views} • {v.postedAt}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .video-detail-page {
            display: flex;
            gap: 24px;
            padding: 24px 24px 0 24px;
            max-width: 1600px;
            margin: 0 auto;
            color: var(--text-primary);
        }
        
        .primary-column {
            flex: 1;
            min-width: 0; /* fixes flexbox overflow issues */
        }
        
        .secondary-column {
            width: 400px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            flex-shrink: 0;
        }
        
        .player-wrapper {
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            background: black;
            aspect-ratio: 16/9;
            margin-bottom: 12px;
        }
        
        .video-player-container {
            width: 100%;
            height: 100%;
        }
        
        .video-iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        
        .video-title-main {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
        }
        
        .video-actions-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-bottom: 12px;
        }
        
        .channel-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .channel-avatar-lg {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        
        .channel-name-lg {
            font-size: 16px;
            font-weight: 500;
        }
        
        .sub-count {
            font-size: 12px;
            color: var(--text-secondary);
        }
        
        .subscribe-btn {
            background-color: var(--text-primary);
            color: var(--bg-primary);
            border: none;
            padding: 0 16px;
            height: 36px;
            border-radius: 18px;
            font-weight: 500;
            font-size: 14px;
            cursor: pointer;
            margin-left: 12px;
        }
        
        .subscribe-btn:hover {
            background-color: #d9d9d9;
        }
        
        .actions-group {
            display: flex;
            gap: 8px;
        }
        
        .action-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            background-color: var(--bg-secondary);
            color: var(--text-primary);
            border: none;
            padding: 0 16px;
            height: 36px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
        }
        
        .action-btn:hover {
            background-color: var(--bg-hover);
        }
        
        .rounded-l { border-radius: 18px 0 0 18px; }
        .rounded-r { border-radius: 0 18px 18px 0; }
        .rounded-full { border-radius: 18px; }
        .icon-only { padding: 0 10px; }
        
        .action-btn-group {
            display: flex;
            align-items: center;
        }
        
        .separator {
            width: 1px;
            height: 24px;
            background-color: var(--border-color);
        }
        
        .description-box {
            background-color: var(--bg-secondary);
            border-radius: 12px;
            padding: 12px;
            margin-top: 12px;
            font-size: 14px;
        }
        
        .views-date {
            font-weight: 500;
            margin-bottom: 8px;
        }
        
        .show-more-btn {
            background: none;
            border: none;
            color: var(--text-primary);
            font-weight: 500;
            cursor: pointer;
            margin-top: 8px;
            padding: 0;
        }
        
        /* Compact Video Card Styles */
        .compact-video-card {
            display: flex;
            gap: 8px;
            cursor: pointer;
        }
        
        .compact-thumbnail {
            width: 168px;
            height: 94px;
            flex-shrink: 0;
            border-radius: 8px;
            overflow: hidden;
            position: relative;
        }
        
        .compact-thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .compact-duration {
            position: absolute;
            bottom: 4px;
            right: 4px;
            background-color: rgba(0,0,0,0.8);
            color: white;
            font-size: 12px;
            padding: 1px 4px;
            border-radius: 4px;
        }
        
        .compact-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        
        .compact-title {
            font-size: 14px;
            font-weight: 500;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            margin: 0;
        }
        
        .compact-channel, .compact-views {
            font-size: 12px;
            color: var(--text-secondary);
            margin: 0;
        }
        
        @media (max-width: 1000px) {
            .video-detail-page {
                flex-direction: column;
            }
            .secondary-column {
                width: 100%;
            }
        }
      `}</style>
        </div>
    );
};

export default VideoDetail;
