
// Mock Data and Logic Reproduction
const MOCK_VIDEOS = [
  {
    id: "13",
    title: "Machine Learning Full Course",
    category: "Computer Science",
    channelName: "AI Masterclass"
  },
  {
      id: "1",
      title: "Building a YouTube Clone",
      category: "Programming",
      channelName: "Code Master"
  }
];

const focusSettings = {
    allowedCategories: [], // Empty
    allowedChannels: [],
    allowedTopics: ["machine learning"], // User input
    allowedCreators: [],
    manualChannels: [],
    manualCategories: []
};

const isFocusEnabled = true;

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
        
        console.log(`Video: ${video.title}`);
        console.log(`Category Allowed: ${isAllowedCategory}`);
        console.log(`Topic Match: ${matchesTopic}`);

        if (!isAllowedCategory && !isAllowedChannel && !isAllowedCreator && !matchesTopic) {
            return false; // Hide if no match
        }
    }
    return true;
});

console.log('Filtered Videos:', filteredVideos.map(v => v.title));
