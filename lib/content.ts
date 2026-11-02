/**
 * ============================================================================
 * DAQUBE - CONTENT & SITE DATA STRUCTURE
 * ============================================================================
 * 
 * To modify images or videos, you can edit `lib/images.ts` directly,
 * or update the image/video properties in this file.
 */

import {
  serviceImages,
  articleImages,
  caseStudyImages,
  siteVideos,
  unsplashImage,
} from "./images";

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  video?: string;
  useCases: string[];
  deliverables: string[];
  process: { title: string; text: string }[];
  benefits: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "image-collection",
    title: "Image Data Collection",
    short: "Purpose-built image datasets for computer vision, visual search and intelligent automation.",
    eyebrow: "01 / VISUAL DATA",
    image: serviceImages.imageCollection.src,
    imageAlt: serviceImages.imageCollection.alt,
    video: siteVideos.workflowDemo.src,
    intro: "Give computer vision systems examples that reflect the world they will operate in. DaQube plans image collection around your target objects, environments, capture conditions and labeling requirements—from everyday scenes to specialist use cases.",
    useCases: [
      "Retail products, shelves and inventory",
      "Road scenes, vehicles and infrastructure",
      "Documents, receipts, forms and printed text",
      "Manufacturing parts, defects and visual inspection",
      "Indoor/outdoor scenes and environmental conditions",
      "Custom capture protocols for research and product teams",
    ],
    deliverables: [
      "Images organized to your naming and folder conventions",
      "Capture metadata and agreed attributes",
      "Coverage matrix for viewpoints, lighting and environments",
      "Consent and collection notes where applicable",
      "Optional annotation-ready manifests and sample QA report",
    ],
    process: [
      { title: "Define the brief", text: "Set target classes, source requirements, geography, capture guidance, metadata schema and acceptance rules." },
      { title: "Plan coverage", text: "Map important variations—device, distance, lighting, background, viewpoint and edge cases—before collection begins." },
      { title: "Collect and screen", text: "Capture or curate examples against the agreed specification, then screen for duplicates, blur, and missing views." },
      { title: "Review and deliver", text: "Share a sample for feedback, resolve issues against agreed criteria and deliver a documented, structured dataset." },
    ],
    benefits: [
      "More deliberate coverage of real-world variation",
      "A documented collection process instead of an unstructured image dump",
      "Optional handoff directly into annotation and quality review",
    ],
    related: ["annotation", "video-collection", "document-ocr"],
  },
  {
    slug: "video-collection",
    title: "Video Data Collection",
    short: "Context-rich video for action recognition, scene understanding and temporal AI tasks.",
    eyebrow: "02 / VIDEO & MOTION",
    image: serviceImages.videoCollection.src,
    imageAlt: serviceImages.videoCollection.alt,
    video: siteVideos.workflowDemo.src,
    intro: "Video shows how scenes evolve—not just what appears in a single frame. DaQube structures collection around activities, events, environments and temporal patterns, with metadata that makes each clip easier to search, review and label.",
    useCases: [
      "Human actions and activity recognition",
      "Traffic, mobility and road-user scenarios",
      "Retail operations and customer-flow patterns",
      "Industrial workflows and safety scenarios",
      "Robotics and embodied AI environments",
      "Event detection and scene-change analysis",
    ],
    deliverables: [
      "Clips segmented to agreed duration and format",
      "Scenario, environment and event metadata",
      "Frame sampling or clip manifests when required",
      "Privacy and exclusion rules for sensitive content",
      "Optional timestamps, captions and frame-level annotations",
    ],
    process: [
      { title: "Specify scenarios", text: "Define actions, events, scene types, clip duration, camera position and variations a model must learn." },
      { title: "Build a capture plan", text: "Translate requirements into collection instructions, safety constraints and coverage checklists." },
      { title: "Validate clips", text: "Review technical quality, relevance, duration, duplicates and coverage before production delivery." },
      { title: "Prepare for labeling", text: "Organize clips and metadata for temporal annotation, event tagging or downstream model training." },
    ],
    benefits: [
      "Temporal context for activity and event learning",
      "Consistent clip-level metadata",
      "A smoother transition from collection to video annotation",
    ],
    related: ["image-collection", "annotation", "multimodal-data"],
  },
  {
    slug: "audio-collection",
    title: "Audio & Speech Collection",
    short: "Speech, conversational and acoustic-event recordings shaped around your language and model goals.",
    eyebrow: "03 / AUDIO & SPEECH",
    image: serviceImages.audioCollection.src,
    imageAlt: serviceImages.audioCollection.alt,
    video: siteVideos.workflowDemo.src,
    intro: "Voice and sound systems need more than clean studio speech. Collection plans account for languages, accents, speaking styles, acoustic environments, speaker attributes and sound events—within the consent, privacy and usage requirements of the project.",
    useCases: [
      "Automatic speech recognition (ASR)",
      "Voice assistants and conversational interfaces",
      "Multilingual and regional-language speech",
      "Wake-word and command recognition",
      "Environmental and industrial sound events",
      "Speech emotion or intent research",
    ],
    deliverables: [
      "Audio files in agreed formats and sampling specifications",
      "Speaker/session metadata using project-approved fields",
      "Language, locale, prompt and recording-condition labels",
      "Collection protocol and technical quality checks",
      "Optional transcripts, timestamps and speaker turns",
    ],
    process: [
      { title: "Set language coverage", text: "Agree on languages, locales, prompts, speaking styles, recording conditions and participant requirements." },
      { title: "Prepare recording guidance", text: "Create simple instructions for microphone distance, quiet/noisy conditions, file naming and consent." },
      { title: "Screen the audio", text: "Check duration, clipping, silence, noise, file integrity and task completion against agreed thresholds." },
      { title: "Align text and sound", text: "Where required, connect audio with transcripts, timestamps, speaker turns and review notes." },
    ],
    benefits: [
      "Coverage planned around people and environments relevant to your use case",
      "Consistent technical specifications",
      "Optional transcription and speech annotation in the same workflow",
    ],
    related: ["transcription", "text-collection", "multimodal-data"],
  },
  {
    slug: "transcription",
    title: "Transcription & Speech-to-Text Data",
    short: "Human-reviewed transcripts, timestamps and speaker turns for speech and language workflows.",
    eyebrow: "04 / LANGUAGE DATA",
    image: serviceImages.transcription.src,
    imageAlt: serviceImages.transcription.alt,
    intro: "Turn recorded speech into structured text that people can review and machines can use. Workflows follow verbatim or clean-read conventions, include timestamps and speaker labels, and document how uncertain words, overlap and non-speech sounds should be handled.",
    useCases: [
      "Interviews, meetings and conference recordings",
      "Podcasts, webinars and long-form media",
      "Call-center and customer-support audio",
      "Multilingual speech and localization workflows",
      "Captioning and subtitle preparation",
      "Transcription data for ASR training and evaluation",
    ],
    deliverables: [
      "Transcript in agreed file format and convention",
      "Speaker labels and timestamps when requested",
      "Punctuation, casing and disfluency rules applied consistently",
      "Unclear-speech markers and reviewer notes",
      "Optional translation, subtitles or alignment files",
    ],
    process: [
      { title: "Choose the convention", text: "Agree on verbatim level, punctuation, speaker labels, timestamps, and disfluencies." },
      { title: "Transcribe", text: "Prepare transcripts against the agreed style guide and required language or locale." },
      { title: "Review uncertain sections", text: "Use a review pass to resolve unclear phrases, speaker changes and formatting inconsistencies." },
      { title: "Export and sample", text: "Deliver structured files with sample review summaries and documented edge-case decisions." },
    ],
    benefits: [
      "Clear transcript conventions for repeatable work",
      "Human review for difficult audio and ambiguous wording",
      "Optional time alignment and multilingual support",
    ],
    related: ["audio-collection", "text-collection", "ai-evaluation"],
  },
  {
    slug: "annotation",
    title: "Image & Video Annotation",
    short: "Precise labels that turn raw visual data into machine-readable training examples.",
    eyebrow: "05 / ANNOTATION",
    image: serviceImages.annotation.src,
    imageAlt: serviceImages.annotation.alt,
    intro: "Annotation quality depends on clear definitions as much as careful labeling. DaQube structures visual labeling around task-specific guidelines, examples, edge-case rules and review criteria so teams can measure consistency.",
    useCases: [
      "Object detection with bounding boxes",
      "Polygon and instance segmentation",
      "Semantic segmentation and pixel-level masks",
      "Keypoint and landmark labeling",
      "Video frame labels, tracking and event tags",
      "Image classification and attribute tagging",
    ],
    deliverables: [
      "Labels in target schema and export format",
      "Guidelines with positive, negative and edge-case examples",
      "Reviewer feedback and issue categories",
      "Class counts and agreed completeness checks",
      "Optional adjudication of conflicting labels",
    ],
    process: [
      { title: "Define the ontology", text: "Set classes, attributes, geometry rules, exclusions and handling for ambiguous examples." },
      { title: "Pilot the guidelines", text: "Label a small sample, compare interpretations and refine instructions before scaling." },
      { title: "Annotate in batches", text: "Apply agreed schemas with checks for missing objects, invalid geometry and inconsistent classes." },
      { title: "Review and resolve", text: "Sample outputs, track disagreement patterns and adjudicate issues against approved rules." },
    ],
    benefits: [
      "Consistent interpretation across annotators",
      "Explicit path for difficult and disputed examples",
      "Exports designed to fit your model pipeline",
    ],
    related: ["image-collection", "video-collection", "ai-evaluation"],
  },
  {
    slug: "text-collection",
    title: "Text Data Collection & Labeling",
    short: "Structured text for language models, search, classification and conversational AI.",
    eyebrow: "06 / TEXT & LANGUAGE",
    image: serviceImages.textCollection.src,
    imageAlt: serviceImages.textCollection.alt,
    intro: "Language systems learn from variety, structure and context. DaQube collects or prepares text examples with consistent metadata and labels, aligned to defined use cases, locales, data policies and downstream schemas.",
    useCases: [
      "Intent and topic classification",
      "Named-entity recognition and entity linking",
      "Sentiment and opinion tagging",
      "Question-answer and conversational examples",
      "Search relevance and document categorization",
      "Text normalization and language-specific review",
    ],
    deliverables: [
      "Structured records in JSONL, CSV or agreed format",
      "Label schema and decision guide",
      "Locale, source-type and category metadata",
      "Duplicate and formatting checks",
      "Review notes for ambiguous or borderline cases",
    ],
    process: [
      { title: "Define the task", text: "Specify text types, categories, languages, inclusion criteria and record structures." },
      { title: "Create the schema", text: "Document labels, entity boundaries, multi-label rules and representative examples." },
      { title: "Prepare and label", text: "Collect or normalize examples and apply approved schemas with consistency checks." },
      { title: "Validate the output", text: "Review samples, examine label distributions and resolve edge cases before final export." },
    ],
    benefits: [
      "Labels reflect actual task requirements rather than generic categories",
      "Language-specific conventions documented up front",
      "Structured output ready for downstream workflows",
    ],
    related: ["transcription", "document-ocr", "ai-evaluation"],
  },
  {
    slug: "document-ocr",
    title: "Document Data & OCR",
    short: "Extract and structure text from forms, receipts, invoices and complex documents.",
    eyebrow: "07 / DOCUMENT INTELLIGENCE",
    image: serviceImages.documentOcr.src,
    imageAlt: serviceImages.documentOcr.alt,
    intro: "Document AI needs examples of both text and layout. Collection and labeling covers document variety, image quality, field-level extraction, reading order and difficult cases such as skew, low contrast, mixed layouts and handwriting.",
    useCases: [
      "Invoices, receipts and purchase orders",
      "Forms, applications and business cards",
      "Menus, tickets and identity documents where appropriate",
      "Table and key-value extraction",
      "OCR ground truth and document classification",
      "Layout-aware document understanding",
    ],
    deliverables: [
      "Document images with associated ground-truth text",
      "Field-level labels and bounding regions when required",
      "Document type and quality metadata",
      "Validation rules for required fields and formats",
      "Optional reading-order and table annotations",
    ],
    process: [
      { title: "Map document types", text: "Identify formats, fields, languages, layout variations and sensitive-data rules." },
      { title: "Design ground truth", text: "Agree on transcription conventions, field schemas, coordinates and normalization rules." },
      { title: "Capture and label", text: "Prepare representative documents and annotate text, fields or layout elements." },
      { title: "Run validation", text: "Check field completeness, text-to-region alignment, and agreed quality samples." },
    ],
    benefits: [
      "Ground truth for both text recognition and layout understanding",
      "Explicit rules for normalization and missing fields",
      "Documented handling for edge cases and sensitive information",
    ],
    related: ["image-collection", "text-collection", "annotation"],
  },
  {
    slug: "multimodal-data",
    title: "Multimodal Data Solutions",
    short: "Connect images, video, audio and text into aligned examples for richer AI systems.",
    eyebrow: "08 / CONNECTED DATA",
    image: serviceImages.multimodalData.src,
    imageAlt: serviceImages.multimodalData.alt,
    intro: "Multimodal models need records that agree across inputs. DaQube helps define linked assets, timestamps, speaker turns, captions, scene descriptions and metadata so relationships remain clear throughout training.",
    useCases: [
      "Image-text and video-caption pairs",
      "Audio-video synchronization and speaker turns",
      "Robotics and embodied AI scenarios",
      "Instruction-following examples grounded in visual input",
      "Cross-modal retrieval and matching",
      "Multimodal benchmark and evaluation sets",
    ],
    deliverables: [
      "Linked records with stable IDs",
      "Timestamp and alignment metadata",
      "Captions, transcripts or descriptions as specified",
      "Schema documentation and validation checks",
      "Sample-level review of cross-modal consistency",
    ],
    process: [
      { title: "Model the relationships", text: "Define which assets belong together, how they are referenced and required alignment." },
      { title: "Collect each modality", text: "Plan visual, audio and text components around shared scenarios or examples." },
      { title: "Align and annotate", text: "Connect timestamps, descriptions, labels and metadata under shared record structures." },
      { title: "Validate links", text: "Check missing assets, broken references, temporal mismatches and consistency." },
    ],
    benefits: [
      "Preserved relationships between assets",
      "Clear schemas for complex training pipelines",
      "One coordinated workflow across modalities",
    ],
    related: ["image-collection", "video-collection", "audio-collection", "annotation"],
  },
  {
    slug: "ai-evaluation",
    title: "AI Evaluation & Human Feedback",
    short: "Human judgment and structured rubrics to reveal model strengths, weaknesses and failure patterns.",
    eyebrow: "09 / MODEL QUALITY",
    image: serviceImages.aiEvaluation.src,
    imageAlt: serviceImages.aiEvaluation.alt,
    intro: "Evaluation turns subjective impressions into structured evidence. DaQube helps teams design rubrics, compare candidate responses, tag errors and review difficult examples so model behavior is examined systematically.",
    useCases: [
      "Response quality and instruction following",
      "Pairwise preference ranking",
      "Factuality, relevance and completeness review",
      "Safety and policy rubric evaluation",
      "Edge-case and adversarial test sets",
      "Error taxonomy and benchmark creation",
    ],
    deliverables: [
      "Rubric and evaluator instructions",
      "Scored examples with rationale fields where required",
      "Pairwise preference or ranking records",
      "Error categories and failure summaries",
      "Benchmark-ready structured exports",
    ],
    process: [
      { title: "Set evaluation goals", text: "Define behaviors to assess, expected evidence, scoring scale and critical failure thresholds." },
      { title: "Calibrate reviewers", text: "Use shared examples to align interpretations and document acceptable boundaries." },
      { title: "Evaluate systematically", text: "Apply rubrics to model outputs, record scores and tag relevant error patterns." },
      { title: "Analyze and refine", text: "Summarize disagreement and recurring failure modes to inform model or data iterations." },
    ],
    benefits: [
      "Evaluation criteria that are explicit and reviewable",
      "Human feedback linked to observable behaviors",
      "Actionable findings that inform targeted improvements",
    ],
    related: ["text-collection", "transcription", "annotation"],
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  takeaway: string;
};

export const articles: Article[] = [
  {
    slug: "why-data-coverage-matters",
    title: "Why Data Coverage Matters More Than Dataset Size",
    category: "DATA STRATEGY",
    readTime: "5 min read",
    date: "October 2026",
    excerpt: "A large dataset can still leave a model unprepared for real-world conditions. Coverage starts with the task, not the file count.",
    image: articleImages.whyDataCoverageMatters.src,
    imageAlt: articleImages.whyDataCoverageMatters.alt,
    intro: "Dataset size is easy to count. Coverage is harder—and often more useful to reason about. A model can see millions of examples and still struggle when lighting changes or an accent varies.",
    sections: [
      {
        heading: "Start with the operating environment",
        paragraphs: [
          "Before collecting data, list situations the system must handle: environments, devices, user groups, languages, object types and known edge cases.",
          "The coverage map should reflect actual product use. A retail vision model needs varying shelves, packaging and occlusion. The right dimensions depend on the task.",
        ],
      },
      {
        heading: "Measure gaps, not just totals",
        paragraphs: [
          "Track how examples are distributed across dimensions that matter. A dataset with balanced classes can still be unbalanced across lighting or geography.",
          "Prioritize by frequency, failure impact, risk and collection cost. Document rationale so plans can evolve with product requirements.",
        ],
      },
      {
        heading: "Connect collection to evaluation",
        paragraphs: [
          "Coverage planning informs both training and evaluation splits. Keep evaluation examples that test meaningful variations and avoid data leakage.",
          "Review errors after model evaluation to uncover missing slices or ambiguous label definitions.",
        ],
      },
    ],
    takeaway: "Build a coverage plan before scaling collection. The goal is evidence that the dataset represents the real task.",
  },
  {
    slug: "annotation-guidelines-that-scale",
    title: "How to Write Annotation Guidelines That Scale",
    category: "ANNOTATION",
    readTime: "6 min read",
    date: "October 2026",
    excerpt: "Consistent labels come from shared decisions. Strong guidelines make easy cases quick and difficult cases predictable.",
    image: articleImages.annotationGuidelinesThatScale.src,
    imageAlt: articleImages.annotationGuidelinesThatScale.alt,
    intro: "Annotation guidelines are the operating manual for a dataset. When definitions are vague, two careful annotators make different choices. A scalable guideline resolves ambiguity early.",
    sections: [
      {
        heading: "Define labels operationally",
        paragraphs: [
          "A label name alone is not a definition. Explain qualifiers, exclusions, partial visibility, and hierarchy rules when categories overlap.",
          "For visual tasks, specify geometry rules, occlusion thresholds and truncation. For text tasks, define exact boundary rules and handling for typos.",
        ],
      },
      {
        heading: "Use examples and counterexamples",
        paragraphs: [
          "Include clear positives, clear negatives and borderline cases. Counterexamples show exactly where a label should stop.",
          "Create a short decision tree for frequent ambiguities so reviewers don't need to ask questions repeatedly.",
        ],
      },
      {
        heading: "Calibrate before production",
        paragraphs: [
          "Run pilot batches and compare annotations. Review disagreement patterns, update guidelines, and repeat until consistency criteria are met.",
          "During production, version guidelines and record dates rules changed to keep datasets coherent over time.",
        ],
      },
    ],
    takeaway: "A scalable guideline is specific, example-rich, versioned and tested on real edge cases before scaling.",
  },
  {
    slug: "building-a-useful-speech-dataset",
    title: "Building a Useful Speech Dataset Across Languages and Environments",
    category: "AUDIO & SPEECH",
    readTime: "5 min read",
    date: "September 2026",
    excerpt: "Language coverage is more than a list of locales. Recording conditions, prompts and transcript conventions shape audio utility.",
    image: articleImages.buildingUsefulSpeechDataset.src,
    imageAlt: articleImages.buildingUsefulSpeechDataset.alt,
    intro: "Speech data quality depends on what was said, how it was recorded, and how it is represented in text.",
    sections: [
      {
        heading: "Plan language and speaker variation",
        paragraphs: [
          "Define target languages and locales, then identify variations that matter: regional vocabulary, speaking rate, conversational vs. read speech.",
          "Prompts should reflect realistic interactions without forcing unnatural cadence.",
        ],
      },
      {
        heading: "Control recording quality",
        paragraphs: [
          "Specify formats, sample rates, clipping limits, acceptable noise thresholds and file naming conventions.",
          "Quality checks must distinguish technical defects from useful real-world environmental variation.",
        ],
      },
      {
        heading: "Keep audio and transcripts aligned",
        paragraphs: [
          "Decide whether transcripts are verbatim or normalized, and specify disfluency markers, speaker tags and timestamp precision.",
          "Review initial samples early to standardize handling of difficult words and overlapping speech.",
        ],
      },
    ],
    takeaway: "A useful speech dataset is deliberately varied, technically documented, and paired with conventions matching the model's job.",
  },
  {
    slug: "human-feedback-for-language-models",
    title: "What Makes Human Feedback Useful for Language Model Evaluation?",
    category: "AI EVALUATION",
    readTime: "6 min read",
    date: "September 2026",
    excerpt: "Preference labels are only as useful as the question, rubric and context that produced them.",
    image: articleImages.humanFeedbackForLanguageModels.src,
    imageAlt: articleImages.humanFeedbackForLanguageModels.alt,
    intro: "Human feedback helps teams evaluate model outputs, but preference labels without clear criteria are difficult to interpret.",
    sections: [
      {
        heading: "Separate the dimensions",
        paragraphs: [
          "A response may be helpful but factually weak, or safe but incomplete. Define dimensions relevant to the task and score them with explicit rubrics.",
          "Include clear examples of severe errors so small stylistic preferences don't overshadow substantive issues.",
        ],
      },
      {
        heading: "Make comparisons fair",
        paragraphs: [
          "Present candidate responses with identical prompts and contexts. Randomize display order and provide options for ties.",
          "Use calibration examples to train reviewers and align interpretations before scoring live data.",
        ],
      },
      {
        heading: "Turn scores into action",
        paragraphs: [
          "Summaries should categorize error types, severity levels and scenarios to guide prompt and training data iterations.",
          "Track rubric versions to make longitudinal comparisons valid over time.",
        ],
      },
    ],
    takeaway: "Human feedback is strongest when evaluation criteria are precise, reviewers are calibrated, and results produce actionable insights.",
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  type: string;
  image: string;
  imageAlt: string;
  summary: string;
  challenge: string;
  approach: string[];
  workflow: string[];
  deliverables: string[];
  note: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "retail-shelf-vision",
    title: "Designing a Retail Shelf Dataset for Visual Recognition",
    industry: "Retail & Computer Vision",
    type: "Illustrative workflow",
    image: caseStudyImages.retailShelfVision.src,
    imageAlt: caseStudyImages.retailShelfVision.alt,
    summary: "An example of how a retail team structures image collection and annotation for shelf-level product recognition.",
    challenge: "A retail vision model encounters packaging variants, partial occlusion, changing shelf layouts, reflections and uneven lighting.",
    approach: [
      "Map product categories, packaging variants and shelf conditions into a coverage matrix.",
      "Create capture instructions for camera distance, viewing angle, and lighting.",
      "Define annotation rules for product instances, partial visibility and ambiguous packaging.",
      "Pilot a small batch to resolve unclear categories before scaling.",
    ],
    workflow: [
      "Scope and coverage planning",
      "Image collection and technical screening",
      "Bounding-box or polygon annotation",
      "Sample review and issue resolution",
      "Structured export with schema documentation",
    ],
    deliverables: [
      "Organized image set and metadata manifest",
      "Annotation guidelines and agreed label schema",
      "Labeled examples in required export format",
      "Sample quality review notes and limitations",
    ],
    note: "This is an illustrative project scenario, not a claim of a completed client engagement or measured result.",
  },
  {
    slug: "multilingual-speech-pipeline",
    title: "Planning a Multilingual Speech Collection Pipeline",
    industry: "Speech & Language AI",
    type: "Illustrative workflow",
    image: caseStudyImages.multilingualSpeechPipeline.src,
    imageAlt: caseStudyImages.multilingualSpeechPipeline.alt,
    summary: "A sample workflow for collecting speech across multiple locales, recording environments and transcription requirements.",
    challenge: "Voice products perform unevenly across accents and acoustic environments. Useful datasets require deliberate language coverage.",
    approach: [
      "Define target locales, prompts, participation criteria and consent requirements.",
      "Specify audio formats, duration, recording guidance and metadata schemas.",
      "Create transcript conventions for punctuation, disfluencies and speaker turns.",
      "Review early samples and revise instructions before full production.",
    ],
    workflow: [
      "Language and task definition",
      "Recording protocol and pilot",
      "Audio screening and transcript preparation",
      "Human review and alignment checks",
      "Delivery with metadata and conventions",
    ],
    deliverables: [
      "Audio files with approved metadata",
      "Transcripts with requested speaker labels and timestamps",
      "Recording and transcription guidance",
      "Review notes for technical and linguistic edge cases",
    ],
    note: "This is an illustrative project scenario, not a claim of a completed client engagement or measured result.",
  },
  {
    slug: "document-ai-ground-truth",
    title: "Creating Ground Truth for Document AI",
    industry: "OCR & Document Intelligence",
    type: "Illustrative workflow",
    image: caseStudyImages.documentAiGroundTruth.src,
    imageAlt: caseStudyImages.documentAiGroundTruth.alt,
    summary: "Building consistent datasets for OCR, field extraction and document layout understanding.",
    challenge: "Documents vary widely in layout, scan quality, language and field placement.",
    approach: [
      "Inventory document types, field requirements, layout variations and sensitive data rules.",
      "Define ground-truth conventions for text, reading order, key-value pairs and bounding regions.",
      "Include representative cases like skewed scans, missing fields and multi-page forms.",
      "Validate text-to-region alignment and schema completeness.",
    ],
    workflow: [
      "Document taxonomy and sample plan",
      "Ground-truth schema design",
      "Transcription and region labeling",
      "Validation and exception review",
      "Structured export and documentation",
    ],
    deliverables: [
      "Document images and ground-truth text",
      "Field-level records and region annotations",
      "Document-type metadata and schema notes",
      "Validation results and exception categories",
    ],
    note: "This is an illustrative project scenario, not a claim of a completed client engagement or measured result.",
  },
  {
    slug: "video-action-labeling",
    title: "Structuring Video Labels for Activity Recognition",
    industry: "Video & Temporal AI",
    type: "Illustrative workflow",
    image: caseStudyImages.videoActionLabeling.src,
    imageAlt: caseStudyImages.videoActionLabeling.alt,
    summary: "Converting raw clips into consistent temporal labels for actions and events.",
    challenge: "Video tasks require clear agreement on when actions begin, end, overlap or become occluded.",
    approach: [
      "Define event classes and temporal boundary rules with clear examples.",
      "Agree on clip duration, frame sampling, timestamps and metadata requirements.",
      "Pilot difficult cases such as occlusion, interrupted actions and simultaneous events.",
      "Review temporal consistency and document adjudication decisions.",
    ],
    workflow: [
      "Scenario and label definition",
      "Clip organization and metadata",
      "Frame or segment annotation",
      "Temporal consistency review",
      "Export with event schema",
    ],
    deliverables: [
      "Clip manifest and metadata",
      "Temporal labels or frame-level annotations",
      "Guidelines for boundaries and overlapping events",
      "Sample review notes and export schema",
    ],
    note: "This is an illustrative project scenario, not a claim of a completed client engagement or measured result.",
  },
];
