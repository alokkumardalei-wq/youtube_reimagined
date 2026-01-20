import React from 'react';
import { MOCK_VIDEOS } from '../data/mockData';
import VideoCard from '../components/VideoCard';
import CategoryPills from '../components/CategoryPills';
import { useSearchParams } from 'react-router-dom';

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

interface HomeProps {
    isFocusEnabled?: boolean;
    focusSettings?: FocusSettings;
}

const Home: React.FC<HomeProps> = ({ isFocusEnabled, focusSettings }) => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q')?.toLowerCase() || '';
    const selectedCategoryParam = searchParams.get('category') || 'All';
    const selectedCategories = selectedCategoryParam.split(',');

    const filteredVideos = MOCK_VIDEOS.filter((video) => {
        // 1. Focus Mode Filter (High Priority)
        if (isFocusEnabled && focusSettings) {
            // Category Check (Both pre-selected and manual)
            const isAllowedCategory = focusSettings.allowedCategories.includes(video.category) ||
                focusSettings.manualCategories.some(c => video.category.toLowerCase().includes(c.toLowerCase()));

            // Channel Check (Both pre-selected and manual)
            const isAllowedChannel = focusSettings.allowedChannels.includes(video.channelName) ||
                focusSettings.manualChannels.some(c => video.channelName.toLowerCase().includes(c.toLowerCase()));

            // Creator Check (Matches Channel Name roughly)
            const isAllowedCreator = focusSettings.allowedCreators.some(creator =>
                video.channelName.toLowerCase().includes(creator.toLowerCase())
            );

            // Topic Check (Matches Title or Category)
            const matchesTopic = focusSettings.allowedTopics.some(topic => {
                const t = topic.toLowerCase();
                return video.title.toLowerCase().includes(t) ||
                    video.category.toLowerCase().includes(t);
            });

            if (!isAllowedCategory && !isAllowedChannel && !isAllowedCreator && !matchesTopic) {
                return false; // Hide if no match
            }
        }

        // 2. Standard Search and Category Filter
        const matchesSearch = video.title.toLowerCase().includes(searchQuery) ||
            video.channelName.toLowerCase().includes(searchQuery);

        const matchesCategory = selectedCategories.includes('All') ||
            selectedCategories.includes(video.category);

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="home-container">
            <CategoryPills />
            <div className="video-grid">
                {filteredVideos.length > 0 ? (
                    filteredVideos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))
                ) : (
                    <div className="no-results">
                        <h2>No videos found</h2>
                        <p>Try searching for something else.</p>
                    </div>
                )}
            </div>

            <style>{`
        .home-container {
          flex: 1;
          background-color: var(--bg-primary);
          overflow-y: hidden; 
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          padding: 24px;
        }
        
        .no-results {
            grid-column: 1 / -1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 48px;
            color: var(--text-secondary);
        }

        .no-results h2 {
            margin-bottom: 8px;
            color: var(--text-primary);
        }
        
        @media (max-width: 600px) {
            .video-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
};

export default Home;
