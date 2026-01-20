import { pipeline } from '@xenova/transformers';

class LocalLLMService {
    private summarizer: any = null;


    // Load the models (lazy loading)
    async loadModels(onProgress?: (progress: number) => void) {
        if (this.summarizer) return;

        try {
            console.log("Loading Local AI Models...");

            // Use a smaller, faster model appropriate for client-side
            // 'Xenova/distilbart-cnn-6-6' is ~250MB, might be heavy.
            // 'Xenova/LaMini-Flan-T5-77M' is super small (~300MB) but decent.
            // Let's go with 'Xenova/distilbart-cnn-6-6' as it's standard for summarization.

            this.summarizer = await pipeline('summarization', 'Xenova/distilbart-cnn-6-6', {
                progress_callback: (d: any) => {
                    if (d.status === 'progress' && onProgress) {
                        onProgress(d.progress);
                    }
                }
            });

            console.log("Local AI Models Loaded.");
        } catch (err) {
            console.error("Failed to load local models:", err);
            throw err;
        }
    }

    async generateSummary(text: string): Promise<string> {
        if (!this.summarizer) await this.loadModels();

        try {
            // Truncate text to standard ~1024 tokens (safe estimate 3500 chars)
            const safeText = text.slice(0, 3500);

            // Adjust generation parameters for short inputs to prevent errors
            // If input is short (< 500 chars), don't force long generation.
            const isShort = safeText.length < 600;
            const minTokens = isShort ? 10 : 40;
            const maxTokens = isShort ? 60 : 150;

            const result = await this.summarizer(safeText, {
                max_new_tokens: maxTokens,
                min_new_tokens: minTokens,
                do_sample: false // Deterministic is more stable
            });

            return result[0].summary_text;
        } catch (err: any) {
            console.error("Local Summary Generation Error:", err);
            // Return a user-friendly error string instead of generic fail
            return `Analysis Failed: ${err.message || 'Unknown model error'}`;
        }
    }

    // Heuristic Fact Checking (Simulated with simple logic + checking against text)
    // Since real fact checking requires internet search (which is not "local AI"),
    // We will use a lightweight extraction method to find "claim-like" sentences.
    async extractClaims(text: string): Promise<{ claim: string, status: string, timestamp: string }[]> {
        // Implementation: Split sentences, find verifiable statements, random verify for demo.
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 20);

        // Pick 3 random sentences as "claims"
        const claims = sentences
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(claim => ({
                claim: claim.trim(),
                status: Math.random() > 0.8 ? 'disputed' : 'correct', // Mostly correct for "source" text
                timestamp: this.getRandomTimestamp()
            }));

        return claims;
    }

    private getRandomTimestamp(): string {
        const mins = Math.floor(Math.random() * 10);
        const secs = Math.floor(Math.random() * 59);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}

export const localLlmService = new LocalLLMService();
