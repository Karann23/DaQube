/**
 * ============================================================================
 * DAQUBE - CENTRALIZED MEDIA & IMAGE CONFIGURATION
 * ============================================================================
 * 
 * Edit this file to add, change, or replace any images and videos on the website.
 * 
 * HOW TO ADD YOUR OWN LOCAL IMAGES:
 * 1. Place your image file (PNG, JPG, WebP, SVG) in the `public/images/` folder.
 *    For example: `public/images/my-hero.jpg`
 * 2. Set the path as `/images/my-hero.jpg` in the corresponding section below.
 * 
 * HOW TO USE EXTERNAL / CDN URLS:
 * Simply paste the complete web URL, e.g. "https://example.com/photo.jpg".
 */

export interface MediaAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

// Helper to generate consistent high-res Unsplash CDN image URLs
export const unsplashImage = (id: string, width = 1200): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

/**
 * Videos used across homepage and showcase sections
 */
export const siteVideos = {
  // Hero section ambient video
  heroShowcase: {
    src: "/videos/frontpage.mp4",
    poster: unsplashImage("photo-1518770660439-4636190af475", 1600),
    alt: "DaQube visual platform demonstration video",
    caption: "HUMAN INPUT → MODEL INTELLIGENCE"
  },
  // Data collection workflow section video
  workflowDemo: {
    src: "/videos/Workflow_Demonstration.mp4",
    poster: unsplashImage("photo-1485846234645-a62644f84728", 1400),
    alt: "DaQube workflow demonstration in motion",
    caption: "DATA COLLECTION IN MOTION"
  }
} as const;

/**
 * Service Catalogue Images (used on homepage cards and /services pages)
 */
export const serviceImages = {
  imageCollection: {
    src: unsplashImage("photo-1518770660439-4636190af475", 1200),
    alt: "Electronic components photographed for visual dataset"
  },
  videoCollection: {
    src: unsplashImage("photo-1485846234645-a62644f84728", 1200),
    alt: "Video production camera capturing motion scenes"
  },
  audioCollection: {
    src: unsplashImage("photo-1590602847861-f357a9332bbc", 1200),
    alt: "Microphone and headphones in acoustic recording setup"
  },
  transcription: {
    src: unsplashImage("photo-1455390582262-044cdead277a", 1200),
    alt: "Notebook and transcription workspace"
  },
  annotation: {
    src: unsplashImage("photo-1535378620166-273708d44e4c", 1200),
    alt: "Computer vision bounding and segmentation interface"
  },
  textCollection: {
    src: unsplashImage("photo-1516321318423-f06f85e504b3", 1200),
    alt: "Digital document preparation on laptop"
  },
  documentOcr: {
    src: unsplashImage("photo-1450101499163-c8848c66ca85", 1200),
    alt: "Business paperwork and forms for OCR extraction"
  },
  multimodalData: {
    src: unsplashImage("photo-1485827404703-89b55fcc595e", 1200),
    alt: "Robotics and connected sensor technology"
  },
  aiEvaluation: {
    src: unsplashImage("photo-1553877522-43269d4ea984", 1200),
    alt: "Team reviewing model evaluation benchmarks"
  }
} as const;

/**
 * Editorial and Insight Article Cover Images
 */
export const articleImages = {
  whyDataCoverageMatters: {
    src: unsplashImage("photo-1518770660439-4636190af475", 1400),
    alt: "Technology components illustrating dataset coverage"
  },
  annotationGuidelinesThatScale: {
    src: unsplashImage("photo-1535378620166-273708d44e4c", 1400),
    alt: "Annotation interface showing structured labeling"
  },
  buildingUsefulSpeechDataset: {
    src: unsplashImage("photo-1590602847861-f357a9332bbc", 1400),
    alt: "Studio recording microphone for acoustic datasets"
  },
  humanFeedbackForLanguageModels: {
    src: unsplashImage("photo-1553877522-43269d4ea984", 1400),
    alt: "Human reviewers evaluating AI outputs"
  }
} as const;

/**
 * Case Study Cover Images
 */
export const caseStudyImages = {
  retailShelfVision: {
    src: unsplashImage("photo-1534452203293-494d7ddbf7e0", 1200),
    alt: "Retail store shelves with structured product layouts"
  },
  multilingualSpeechPipeline: {
    src: unsplashImage("photo-1590602847861-f357a9332bbc", 1200),
    alt: "Studio microphone for multilingual speech recordings"
  },
  documentAiGroundTruth: {
    src: unsplashImage("photo-1450101499163-c8848c66ca85", 1200),
    alt: "Printed forms and business documents for OCR analysis"
  },
  videoActionLabeling: {
    src: unsplashImage("photo-1485846234645-a62644f84728", 1200),
    alt: "High-speed camera recording action footage"
  }
} as const;
