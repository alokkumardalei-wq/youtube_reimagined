import React from 'react';
import type { Video } from '../data/mockData';
import { Link } from 'react-router-dom';

interface VideoCardProps {
    video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    return (
        <div className="video-card">
            <Link to={`/watch/${video.id}`} style={{ display: 'block', textDecoration: 'none' }}>
                <div className="thumbnail-container">
                    <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                    <span className="duration">{video.duration}</span>
                </div>
                <div className="meta-container">
                    <img src={video.channelAvatar} alt={video.channelName} className="avatar" />
                    <div className="text-info">
                        <h3 className="video-title">{video.title}</h3>
                        <p className="channel-name">{video.channelName}</p>
                        <div className="stats">
                            <span>{video.views}</span>
                            <span className="dot">•</span>
                            <span>{video.postedAt}</span>
                        </div>
                    </div>
                </div>
            </Link>

            <style>{`
        .video-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .thumbnail-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          background-color: #202020;
        }

        .thumbnail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.2s;
        }
        
        .video-card:hover .thumbnail {
            border-radius: 0; /* Optional: YouTube does this on web sometimes, but rounded is more modern */
        }

        .duration {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 2px 4px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }

        .meta-container {
          display: flex;
          gap: 12px;
          padding-right: 24px;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .text-info {
          display: flex;
          flex-direction: column;
        }

        .video-title {
          color: var(--text-primary);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.4;
          margin-bottom: 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .channel-name {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 2px;
        }
        
        .channel-name:hover {
            color: var(--text-primary);
        }

        .stats {
          color: var(--text-secondary);
          font-size: 14px;
        }

        .dot {
          margin: 0 4px;
        }
      `}</style>
        </div>
    );
};

export default VideoCard;
