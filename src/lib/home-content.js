/**
 * Editable homepage copy and media.
 * Change text, image URLs or video paths here instead of searching through JSX.
 * Local media should live in /public/images or /public/videos and use paths like /images/example.jpg.
 */
export const homeModalityCards = [
    {
        number: "01 / VISUAL DATA",
        title: "See the details.",
        description: "Images, video frames, object labels and scene understanding.",
        image: "/images/visual-data.avif",
    },
    {
        number: "02 / AUDIO & SPEECH",
        title: "Capture every voice.",
        description: "Speech, accents, sound events, transcription and language coverage.",
        image: "/images/audio-speech.avif",
    },
    {
        number: "03 / TEXT & DOCUMENTS",
        title: "Give language structure.",
        description: "Document capture, OCR text, entity labels and normalized transcripts.",
        image: "/images/text-documents.avif",
    },
    {
        number: "04 / MULTIMODAL AI",
        title: "Connect the signals.",
        description: "Aligned data and human feedback for richer AI experiences.",
        image: "/images/multimodal-ai.avif",
    },
];
export const homeProcessSteps = [
    { number: "01", title: "Define the signal", text: "We align on your use case, target population, data specification and acceptance criteria." },
    { number: "02", title: "Collect with purpose", text: "We plan collection workflows around your formats, coverage, languages and constraints." },
    { number: "03", title: "Review and refine", text: "Structured checks and human review help identify gaps before delivery." },
    { number: "04", title: "Deliver for training", text: "Receive organized, documented data designed to fit your downstream workflow." },
];
export const siteConfig = {
    name: "DaQube",
    tagline: "The Data Behind Intelligence.",
    contactEmail: "partnerships@daqube.ai",
};
