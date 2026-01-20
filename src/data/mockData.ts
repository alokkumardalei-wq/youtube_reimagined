export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  postedAt: string;
  duration: string;
  category: string;
  youtubeId: string;
  transcript?: string;
  aiSummary?: AISummary;
  factCheck?: AIFactCheck[];
}

export interface AIKeyword {
  term: string;
  definition: string;
}

export interface AIFactCheck {
  timestamp: string;
  claim: string;
  status: 'correct' | 'incorrect' | 'disputed';
  correction?: string;
  source?: string;
}

export interface AISummary {
  keywords: AIKeyword[];
  takeaways: string[];
  summaryText: string;
}

export interface Comment {
  id: string;
  user: string;
  avatar: string;
  text: string;
  likes: number;
  timeAgo: string;
}

export const CATEGORIES = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Programming",
  "Computer Science",
  "News",
  "Sports",
  "Learning",
  "Fashion",
  "Podcasts",
  "Comedy",
  "Action-Adventure",
  "Recently uploaded",
  "New to you",
];

export const MOCK_VIDEOS: Video[] = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    title: "Building a YouTube Clone in 1 Hour",
    channelName: "Code Master",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
    views: "1.2M views",
    postedAt: "2 days ago",
    duration: "1:00:00",
    category: "Programming",
    youtubeId: "KIMuI4aQ4Wk",
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    title: "The Future of AI: What You Need to Know",
    channelName: "Tech Trends",
    channelAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    views: "800K views",
    postedAt: "1 week ago",
    duration: "15:30",
    category: "Learning",
    youtubeId: "imp1zW28PDU",
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1493723843684-a63dfe321c5d?q=80&w=1000&auto=format&fit=crop",
    title: "Beautiful Landscapes of Norway 4K",
    channelName: "Nature Relax",
    channelAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
    views: "3.5M views",
    postedAt: "1 year ago",
    duration: "45:00",
    category: "Travel",
    youtubeId: "ysz5S6PUM-U",
  },
  {
    id: "4",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    title: "Top 10 Gaming Moments 2024",
    channelName: "Pro Gamer",
    channelAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60",
    views: "500K views",
    postedAt: "3 days ago",
    duration: "12:45",
    category: "Gaming",
    youtubeId: "V1plpZ8l8gU",
  },
  {
    id: "5",
    thumbnail: "https://images.unsplash.com/photo-1507838153414-b4b713384ebd?q=80&w=1000&auto=format&fit=crop",
    title: "Learn React in 10 Minutes",
    channelName: "Dev Simplified",
    channelAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=60",
    views: "200K views",
    postedAt: "5 hours ago",
    duration: "10:15",
    category: "Programming",
    youtubeId: "w7ejDZ8SWv8",
  },
  {
    id: "6",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    title: "Best Lo-Fi Beats to Study/Relax to",
    channelName: "Chill Vibes",
    channelAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60",
    views: "10M views",
    postedAt: "2 years ago",
    duration: "LIVE",
    category: "Music",
    youtubeId: "jfKfPfyJRdk",
  },
  {
    id: "7",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
    title: "Travel Vlog: Exploring Tokyo",
    channelName: "Wanderlust",
    channelAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    views: "900K views",
    postedAt: "1 month ago",
    duration: "22:00",
    category: "Travel",
    youtubeId: "2b9txcAt4e0",
  },
  {
    id: "8",
    thumbnail: "https://images.unsplash.com/photo-1563206767-5b1d97289374?q=80&w=1000&auto=format&fit=crop",
    title: "Delicious Pasta Recipe",
    channelName: "Chef's Table",
    channelAvatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&auto=format&fit=crop&q=60",
    views: "300K views",
    postedAt: "2 weeks ago",
    duration: "08:30",
    category: "Food",
    youtubeId: "Hk239T5sE4I",
  },
  {
    id: "9",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    title: "Introduction to Computer Science - CS101",
    channelName: "University Lectures",
    channelAvatar: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=100&auto=format&fit=crop&q=60",
    views: "2.1M views",
    postedAt: "3 years ago",
    duration: "1:15:00",
    category: "Computer Science",
    youtubeId: "8jLOx1hD3_o",
  },
  {
    id: "10",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
    title: "Data Structures and Algorithms for Beginners",
    channelName: "Code Academy",
    channelAvatar: "https://images.unsplash.com/photo-1531379410902-1906171d33f3?w=100&auto=format&fit=crop&q=60",
    views: "500K views",
    postedAt: "1 month ago",
    duration: "2:30:00",
    category: "Programming",
    youtubeId: "RBSGKlAvoiM",
  },
  {
    id: "11",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    title: "The Physics of Black Holes",
    channelName: "Science Explained",
    channelAvatar: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?w=100&auto=format&fit=crop&q=60",
    views: "4.8M views",
    postedAt: "6 months ago",
    duration: "25:40",
    category: "Learning",
    youtubeId: "Q7y4q775lZk",
  },
  {
    id: "12",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
    title: "Python vs JavaScript - Which One Should You Choose?",
    channelName: "Tech Talk",
    channelAvatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=60",
    views: "150K views",
    postedAt: "3 days ago",
    duration: "12:10",
    category: "Programming",
    youtubeId: "X8cW3B5y81w",
  },
  {
    id: "13",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    title: "Machine Learning Full Course",
    channelName: "AI Masterclass",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
    views: "1.5M views",
    postedAt: "1 year ago",
    duration: "5:00:00",
    category: "Computer Science",
    youtubeId: "GwIo3gDZCVQ",
    transcript: `
    Welcome to this complete course on Machine Learning. In this video, we're going to cover everything from the basics to advanced neural networks. 
    First, let's define what Machine Learning is. It is a subset of Artificial Intelligence that focuses on building systems that learn from data.
    There are three main types of machine learning: Supervised Learning, Unsupervised Learning, and Reinforcement Learning.
    In Supervised Learning, we train the model on labeled data. For example, giving the computer photos of cats and dogs labeled "cat" or "dog".
    Unsupervised Learning involves finding patterns in unlabeled data. Clustering customers by purchasing behavior is a classic example.
    Now, let's talk about Neural Networks. These were actually proposed back in 1943 by Warren McCulloch and Walter Pitts, not recently as some might think.
    A Neural Network mimics the human brain using layers of nodes. Deep Learning is simply a neural network with many layers.
    One of the most popular optimization algorithms is Gradient Descent. It helps us minimize the error function by moving in the direction of steepest descent.
    Python is the go-to language for Machine Learning because of libraries like TensorFlow, PyTorch, and Scikit-learn.
    However, remember: Data is more important than the algorithm. Garbage in, garbage out. If your data is bad, even the best model will fail.
    Finally, let's discuss overfitting. This happens when your model learns the noise in the training data rather than the actual signal. It performs perfectly on training data but fails on new data.
    `,
    aiSummary: {
      summaryText: "A comprehensive overview of Machine Learning fundamentals, covering supervised vs unsupervised learning, neural networks, and practical applications.",
      keywords: [
        { term: "Supervised Learning", definition: "Training a model on labeled data." },
        { term: "Neural Network", definition: "A series of algorithms that mimic the operations of a human brain to recognize relationships between vast amounts of data." },
        { term: "Gradient Descent", definition: "Optimization algorithm used to minimize some function by iteratively moving in the direction of steepest descent." }
      ],
      takeaways: [
        "Machine learning is a subset of AI.",
        "Data quality is more important than model complexity.",
        "Overfitting occurs when a model learns noise instead of the signal."
      ]
    },
    factCheck: [
      { timestamp: "05:20", claim: "Neural Networks were invented in 2010.", status: "incorrect", correction: "Neural Networks were proposed in 1943 by Warren McCulloch and Walter Pitts." },
      { timestamp: "12:45", claim: "Python is the most popular language for ML.", status: "correct" },
      { timestamp: "45:10", claim: "GPT-4 was released in 2020.", status: "incorrect", correction: "GPT-3 was released in 2020. GPT-4 was released in 2023." }
    ]
  },
  {
    id: "14",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    title: "Cybersecurity Basics in 2026",
    channelName: "SecureNet",
    channelAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    views: "300K views",
    postedAt: "2 weeks ago",
    duration: "18:25",
    category: "Computer Science",
    youtubeId: "inWWhr5tnEA",
  },
  {
    id: "15",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
    title: "How the Internet Works",
    channelName: "Network Wiz",
    channelAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60",
    views: "9K views",
    postedAt: "4 days ago",
    duration: "14:50",
    category: "Computer Science",
    youtubeId: "7_LPdttKXPc",
  },
  {
    id: "16",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    title: "Financial Planning for Beginners",
    channelName: "Money Matters",
    channelAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60",
    views: "250K views",
    postedAt: "3 weeks ago",
    duration: "20:00",
    category: "Learning",
    youtubeId: "WEd58a5oDkI",
  },
  {
    id: "17",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
    title: "I Built a Chocolate Factory!",
    channelName: "MrBeast",
    channelAvatar: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=100&auto=format&fit=crop&q=60",
    views: "200M views",
    postedAt: "1 year ago",
    duration: "15:42",
    category: "Comedy",
    youtubeId: "00NgUctWoKQ",
  },
  {
    id: "18",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop",
    title: "Minecraft Hardcore - 100 Days",
    channelName: "PewDiePie",
    channelAvatar: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=100&auto=format&fit=crop&q=60",
    views: "45M views",
    postedAt: "2 years ago",
    duration: "45:10",
    category: "Gaming",
    youtubeId: "0e3GPea1Tyg", // Random ID
  },
  {
    id: "19",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    title: "lofi hip hop radio - beats to relax/study to",
    channelName: "Lofi Girl",
    channelAvatar: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=100&auto=format&fit=crop&q=60",
    views: "60k watching",
    postedAt: "LIVE",
    duration: "LIVE",
    category: "Music",
    youtubeId: "jfKfPfyJRdk",
  },
  {
    id: "20",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    title: "iPhone 16 Ultra Review: The End of Cameras?",
    channelName: "MKBHD",
    channelAvatar: "https://images.unsplash.com/photo-1531297461136-82af02d295a3?w=100&auto=format&fit=crop&q=60",
    views: "8M views",
    postedAt: "1 day ago",
    duration: "18:20",
    category: "Learning",
    youtubeId: "rxud19m4",
  },
  {
    id: "21",
    thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
    title: "Is Math Real? The Hidden Reality",
    channelName: "Veritasium",
    channelAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    views: "12M views",
    postedAt: "3 months ago",
    duration: "22:15",
    category: "Learning",
    youtubeId: "HeQX2HjkcNo",
  },
  {
    id: "22",
    thumbnail: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
    title: "Reading 100 Books in 7 Days",
    channelName: "MrBeast",
    channelAvatar: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=100&auto=format&fit=crop&q=60",
    views: "95M views",
    postedAt: "5 months ago",
    duration: "14:20",
    category: "Comedy",
    youtubeId: "fHsa9DqmId8",
  },
  {
    id: "23",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    title: "Relaxing Piano Music for Sleep",
    channelName: "Soothing Relaxation",
    channelAvatar: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=100&auto=format&fit=crop&q=60",
    views: "200M views",
    postedAt: "4 years ago",
    duration: "3:00:00",
    category: "Music",
    youtubeId: "WJ3-F02-F_Y",
  },
  {
    id: "24",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop",
    title: "Elden Ring: The Movie (Full Gameshark)",
    channelName: "VaatiVidya",
    channelAvatar: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=100&auto=format&fit=crop&q=60",
    views: "5M views",
    postedAt: "1 year ago",
    duration: "1:45:00",
    category: "Gaming",
    youtubeId: "E3Huy2cdiFg",
  },
  {
    id: "25",
    thumbnail: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
    title: "Top 10 Goals of the Year",
    channelName: "FIFA",
    channelAvatar: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=100&auto=format&fit=crop&q=60",
    views: "15M views",
    postedAt: "2 months ago",
    duration: "10:05",
    category: "Sports",
    youtubeId: "e7X248xR51k",
  },
  {
    id: "26",
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop",
    title: "How to Dress for Your Body Type",
    channelName: "Fashion Wizard",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
    views: "400K views",
    postedAt: "3 weeks ago",
    duration: "12:00",
    category: "Fashion",
    youtubeId: "Vw8q9-5P-5I",
  },
  {
    id: "27",
    thumbnail: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop",
    title: "Joe Rogan Experience #2000 - Elon Musk",
    channelName: "PowerfulJRE",
    channelAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=60",
    views: "30M views",
    postedAt: "6 months ago",
    duration: "2:45:00",
    category: "Podcasts",
    youtubeId: "ycPr5-27vSI",
  },
  {
    id: "28",
    thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop",
    title: "Avatar 3: The Way of Fire (Trailer)",
    channelName: "Movie Trailers",
    channelAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
    views: "50M views",
    postedAt: "2 days ago",
    duration: "02:30",
    category: "Action-Adventure",
    youtubeId: "d9My665987w",
  },
  {
    id: "29",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop",
    title: "Global News: Breaking Stories",
    channelName: "BBC News",
    channelAvatar: "https://images.unsplash.com/photo-1585642930263-dc67c1e54a01?w=100&auto=format&fit=crop&q=60",
    views: "1.5M watching",
    postedAt: "LIVE",
    duration: "LIVE",
    category: "News",
    youtubeId: "lV42f0h0c3k", // BBC News Live logic
  },
  {
    id: "30",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    title: "NASA Live: Earth From Space",
    channelName: "NASA",
    channelAvatar: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=100&auto=format&fit=crop&q=60",
    views: "20k watching",
    postedAt: "LIVE",
    duration: "LIVE",
    category: "Live",
    youtubeId: "21X5lGlDOfg",
  },
  {
    id: "31",
    thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop",
    title: "Learn Python - Full Course for Beginners",
    channelName: "freeCodeCamp.org",
    channelAvatar: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=100&auto=format&fit=crop&q=60",
    views: "40M views",
    postedAt: "4 years ago",
    duration: "4:20:00",
    category: "Programming",
    youtubeId: "rfscVS0vtbw",
  },
  {
    id: "32",
    thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
    title: "73 Questions With Zendaya",
    channelName: "Vogue",
    channelAvatar: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=100&auto=format&fit=crop&q=60",
    views: "25M views",
    postedAt: "1 year ago",
    duration: "14:50",
    category: "Fashion",
    youtubeId: "ijIq_-8HJ14",
  },
  {
    id: "33",
    thumbnail: "https://images.unsplash.com/photo-1607799275518-d58665d099db?q=80&w=1000&auto=format&fit=crop",
    title: "100 Seconds of Code - The Series",
    channelName: "Fireship",
    channelAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=60",
    views: "2M views",
    postedAt: "1 year ago",
    duration: "10:00",
    category: "Programming",
    youtubeId: "vM392a8u14", // Intentional partial ID or search if specific one needed, utilizing a known one:
    // Using a valid ID for Fireship style video
  },
  {
    id: "34",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
    title: "React vs Vue vs Angular - The Complete Comparison",
    channelName: "Traversy Media",
    channelAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    views: "800K views",
    postedAt: "6 months ago",
    duration: "45:30",
    category: "Programming",
    youtubeId: "aC_6E8I_s6g", // Random ID placeholder
  },
  {
    id: "35",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    title: "Why I Left Google (as a Software Engineer)",
    channelName: "Clément Mihailescu",
    channelAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60",
    views: "3.5M views",
    postedAt: "2 years ago",
    duration: "15:45",
    category: "Programming",
    youtubeId: "B6sF01_j5x4", // Random ID placeholder
  },
  {
    id: "36",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop",
    title: "Vim in 100 Seconds",
    channelName: "Fireship",
    channelAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=60",
    views: "1.2M views",
    postedAt: "2 years ago",
    duration: "01:40",
    category: "Programming",
    youtubeId: "4pK4f0M6d6U", // Random ID placeholder
  },
  {
    id: "37",
    thumbnail: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1000&auto=format&fit=crop",
    title: "The Rust Programming Language in 2026",
    channelName: "ThePrimeagen",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
    views: "300K views",
    postedAt: "1 month ago",
    duration: "25:10",
    category: "Programming",
    youtubeId: "M6eDqP8rQ9M", // Random ID placeholder
  },
  {
    id: "38",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
    title: "React JS Full Course 2026 | Build an App",
    channelName: "JavaScript Mastery",
    channelAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60",
    views: "5M views",
    postedAt: "3 weeks ago",
    duration: "10:00:00",
    category: "Programming",
    youtubeId: "bMknfKXIFA8", // React Course
  },
  {
    id: "39",
    thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1000&auto=format&fit=crop",
    title: "Node.js and Express.js - Full Course",
    channelName: "freeCodeCamp.org",
    channelAvatar: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=100&auto=format&fit=crop&q=60",
    views: "2.5M views",
    postedAt: "1 year ago",
    duration: "8:20:00",
    category: "Programming",
    youtubeId: "Oe421EPjeBE", // Node Course
  },
  {
    id: "40",
    thumbnail: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
    title: "CSS Grid vs Flexbox - When to use which?",
    channelName: "Kevin Powell",
    channelAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
    views: "800K views",
    postedAt: "2 months ago",
    duration: "22:15",
    category: "Programming",
    youtubeId: "3elGSZSWTbM", // Kevin Powell CSS
  },
  {
    id: "41",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop",
    title: "TypeScript for Beginners",
    channelName: "Programming with Mosh",
    channelAvatar: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=100&auto=format&fit=crop&q=60",
    views: "1.8M views",
    postedAt: "5 months ago",
    duration: "1:15:00",
    category: "Programming",
    youtubeId: "d56mG7DezGs", // TS Course
  },
  {
    id: "42",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
    title: "Machine Learning for Everybody – Full Course",
    channelName: "freeCodeCamp.org",
    channelAvatar: "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=100&auto=format&fit=crop&q=60",
    views: "3M views",
    postedAt: "1 year ago",
    duration: "4:00:00",
    category: "Computer Science",
    youtubeId: "i_LwzRVP7bg", // ML Course
    aiSummary: {
      summaryText: "An introductory course designed for everyone, breaking down complex ML concepts into understandable analogies.",
      keywords: [
        { term: "Regression", definition: "Predicting a continuous value." },
        { term: "Classification", definition: "Predicting a category." }
      ],
      takeaways: [
        "You don't need a PhD to do Machine Learning.",
        "Start with simple models like Linear Regression."
      ]
    }
  },
  {
    id: "43",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    title: "Neural Networks from Scratch",
    channelName: "Sentdex",
    channelAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
    views: "1.5M views",
    postedAt: "3 years ago",
    duration: "20:30",
    category: "Computer Science",
    youtubeId: "Wo5dMEP_BbI", // Neural Networks
  },
  {
    id: "44",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    title: "Gradient Descent, Step-by-Step",
    channelName: "StatQuest with Josh Starmer",
    channelAvatar: "https://images.unsplash.com/photo-1531379410902-1906171d33f3?w=100&auto=format&fit=crop&q=60",
    views: "2M views",
    postedAt: "2 years ago",
    duration: "24:00",
    category: "Learning",
    youtubeId: "sDv4f4s2SB8", // StatQuest
  },
  {
    id: "45",
    thumbnail: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1000&auto=format&fit=crop",
    title: "AI For Everyone",
    channelName: "DeepLearning.AI",
    channelAvatar: "https://images.unsplash.com/photo-1563206767-5b1d97289374?w=100&auto=format&fit=crop&q=60",
    views: "500K views",
    postedAt: "1 year ago",
    duration: "10:15",
    category: "Computer Science",
    youtubeId: "KNAWp2S3w94", // Andrew Ng
  }
];

export const MOCK_COMMENTS: Comment[] = [
  {
    id: "c1",
    user: "Alice C.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    text: "This video saved my grade! Thank you so much for the clear explanation.",
    likes: 124,
    timeAgo: "2 days ago"
  },
  {
    id: "c2",
    user: "Bob D.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop",
    text: "Could you make a part 2 covering advanced topics?",
    likes: 56,
    timeAgo: "5 hours ago"
  },
  {
    id: "c3",
    user: "Charlie",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop",
    text: "The production quality is insane using 4K cameras.",
    likes: 89,
    timeAgo: "1 week ago"
  },
  {
    id: "c4",
    user: "DevGuy",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop",
    text: "Finally, a tutorial that doesn't skip the basics.",
    likes: 210,
    timeAgo: "3 days ago"
  },
];
