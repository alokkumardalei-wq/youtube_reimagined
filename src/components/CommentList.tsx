import React from 'react';
import type { Comment } from '../data/mockData';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

interface CommentListProps {
    comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <div className="comment-list">
            <h3 className="comments-header">{comments.length} Comments</h3>
            {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                    <img src={comment.avatar} alt={comment.user} className="comment-avatar" />
                    <div className="comment-content">
                        <div className="comment-header">
                            <span className="comment-user">{comment.user}</span>
                            <span className="comment-time">{comment.timeAgo}</span>
                        </div>
                        <p className="comment-text">{comment.text}</p>
                        <div className="comment-actions">
                            <button className="comment-action-btn">
                                <AiOutlineLike size={16} /> <span>{comment.likes}</span>
                            </button>
                            <button className="comment-action-btn">
                                <AiOutlineDislike size={16} />
                            </button>
                            <button className="comment-reply-btn">Reply</button>
                        </div>
                    </div>
                </div>
            ))}

            <style>{`
            .comment-list {
                margin-top: 24px;
                max-width: 900px;
            }
            .comments-header {
                font-size: 20px;
                margin-bottom: 24px;
            }
            .comment-item {
                display: flex;
                gap: 16px;
                margin-bottom: 24px;
            }
            .comment-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
            }
            .comment-content {
                flex: 1;
            }
            .comment-header {
                margin-bottom: 4px;
            }
            .comment-user {
                font-size: 13px;
                font-weight: 500;
                margin-right: 8px;
            }
            .comment-time {
                font-size: 12px;
                color: var(--text-secondary);
            }
            .comment-text {
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 8px;
            }
            .comment-actions {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .comment-action-btn {
                background: none;
                border: none;
                color: var(--text-secondary);
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 4px;
                font-size: 12px;
            }
            .comment-action-btn:hover {
                background-color: var(--bg-hover);
                border-radius: 12px;
            }
            .comment-reply-btn {
                background: none;
                border: none;
                color: var(--text-secondary);
                font-size: 12px;
                font-weight: 500;
                cursor: pointer;
                padding: 8px 16px;
                border-radius: 18px;
            }
            .comment-reply-btn:hover {
                background-color: var(--bg-hover);
            }
        `}</style>
        </div>
    );
};

export default CommentList;
