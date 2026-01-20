import { GoogleGenerativeAI } from "@google/generative-ai";
import type { AISummary, AIFactCheck } from "../data/mockData";

export const generateGeminiSummary = async (apiKey: string, transcript: string): Promise<AISummary> => {
    const genAI = new GoogleGenerativeAI(apiKey.trim());
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Analyze the following video transcript and provide a structured summary in JSON format.
    The output must strictly adhere to this JSON structure:
    {
        "summaryText": "A brief paragraph summarizing the main topic.",
        "keywords": [
            {"term": "Term 1", "definition": "Definition 1"},
            {"term": "Term 2", "definition": "Definition 2"}
        ],
        "takeaways": [
            "Key takeaway 1",
            "Key takeaway 2"
        ]
    }

    Transcript:
    ${transcript}
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Robust JSON extraction
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("No JSON found in response");

        return JSON.parse(jsonMatch[0]) as AISummary;
    } catch (error) {
        console.error("Gemini Summary Error:", error);
        throw error;
    }
};

export const generateGeminiFactCheck = async (apiKey: string, transcript: string): Promise<AIFactCheck[]> => {
    const genAI = new GoogleGenerativeAI(apiKey.trim());
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
    Analyze the following video transcript and verify the factual claims made.
    Identify at least 3 distinct claims.
    The output must strictly adhere to this JSON structure (an array of objects):
    [
        {
            "timestamp": "MM:SS",
            "claim": "The claim made in the text",
            "status": "correct" | "incorrect" | "disputed",
            "correction": "Optional correction if incorrect",
            "source": "Optional source"
        }
    ]

    If no specific timestamp is mentioned in the text, estimate or use "General".

    Transcript:
    ${transcript}
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Robust JSON extraction for Array
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) throw new Error("No JSON Array found in response");

        return JSON.parse(jsonMatch[0]) as AIFactCheck[];
    } catch (error) {
        console.error("Gemini Fact Check Error:", error);
        throw error;
    }
};
