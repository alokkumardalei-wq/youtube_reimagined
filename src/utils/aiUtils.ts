import type { Video } from '../data/mockData';

export const getFallbackTranscript = (video: Video): string => {
    if (video.transcript) return video.transcript;

    const baseIntro = `Welcome back to the channel. Today we are watching "${video.title}".`;

    // Category-specific flavor text to make the AI output more realistic
    switch (video.category) {
        case 'Programming':
        case 'Computer Science':
            return `
            ${baseIntro}
            In this coding tutorial, we will dive deep into the core concepts of software development using modern best practices.
            We'll start by setting up our development environment and installing necessary dependencies.
            One key concept we'll discuss is the importance of clean code and modular architecture.
            We will also debug some common errors that developers face.
            By the end of this video, you will have a solid understanding of how to implement this in your own projects.
            Remember to test your code frequently to avoid bugs in production.
            `;
        case 'Gaming':
            return `
            ${baseIntro}
            What is up guys! We are back with some more high-level gameplay.
            In this walkthrough, I'm going to show you the best strategies to win.
            Notice how we use the map to our advantage here. 
            The graphics in this game are absolutely insane, clearly next-gen.
            That boss fight was incredibly difficult, but the loot was worth it.
            Don't forget to like and subscribe for more content!
            `;
        case 'Learning':
        case 'Science':
            return `
            ${baseIntro}
            In this educational video, we will explore the fascinating science behind this topic.
            Research shows that understanding the fundamental principles is key to mastering the subject.
            We will look at several case studies and real-world examples.
            It's important to question our assumptions and look at the data objectively.
            Let's break down this complex phenomenon into simple, understandable parts.
            `;
        case 'Music':
            return `
            ${baseIntro}
            This video features a curated selection of music designed to evoke specific emotions.
            Notice the intricate melody and the harmony between the instruments.
            Music has been shown to improve focus and reduce stress levels.
            This composition blends traditional elements with modern production techniques.
            Sit back, relax, and let the music take you on a journey.
            `;
        default:
            return `
            ${baseIntro}
            In this video, we will cover the main points regarding ${video.title}.
            This content is created by ${video.channelName} and aims to entertain and inform.
            We'll go through several interesting segments that highlight the creativity of the creator.
            Make sure to watch until the end for a special announcement.
            If you enjoyed this, check out the other videos on the channel.
            `;
    }
};
