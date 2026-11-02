# DaQube — The Data Behind Intelligence

A polished, multi-page Next.js website starter for an AI training-data services company.

## Pages
- `/` — Homepage
- `/services` — Service catalogue with individual detail pages for image collection, video collection, audio collection, transcription, annotation, text collection, document OCR, multimodal data and AI evaluation
- `/services/[slug]` — Dedicated service landing pages with use cases, imagery, optional video, process steps, deliverables and related services
- `/insights` and `/insights/[slug]` — Original educational articles with full written content
- `/case-studies` and `/case-studies/[slug]` — Illustrative workflow pages with challenges, approach, workflow and deliverables
- `/industries` — Industry use cases
- `/quality` — Quality assurance and responsible data practices
- `/about` — Company story and approach
- `/contact` — Project enquiry form

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Lead form email delivery
The contact form validates inputs in the browser and sends them to `/api/contact`.
For email delivery, create a Resend account, verify your sending domain, and set these variables in `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxx
LEADS_TO_EMAIL=hello@yourdomain.com
RESEND_FROM_EMAIL=DaQube Website <website@yourdomain.com>
```

Restart the development server after changing environment variables. Without these settings, the API returns a configuration error instead of pretending that an enquiry was delivered.

## Before launch
- Replace the example email address and set up your domain.
- Add your real legal company name, address, privacy policy and terms.
- Review all service descriptions so they reflect the services you can actually deliver.
- Add genuine case studies, client logos, certifications and performance metrics only when verified.
- Configure analytics, consent controls and spam protection (for example, Turnstile or reCAPTCHA).
- Run `npm run build` before deploying.
- Check trademark, company-name and domain availability for DaQube.

## Deploy
Push the project to GitHub and import it into Vercel, or deploy to another Next.js-compatible host. Add the environment variables in your hosting dashboard.

## Expanded content and service pages

The site includes individual service landing pages, a journal with original articles, and illustrative case-study workflows. Case-study pages are explicitly labeled as illustrative examples and do not claim real client engagements or performance metrics. Service pages include use cases, process stages, possible deliverables, related capabilities, images and video where configured. Remote images and videos require an internet connection.

## Updated service messaging and visual treatment

The homepage and services page now use original, DaQube-specific descriptions covering visual data collection, speech and audio datasets, document/OCR text, annotation methods (including boxes, polygons, keypoints and segmentation), multimodal alignment, and human-led model evaluation. These are informed by the types of service categories described publicly by GTS.ai, but the copy is rewritten for DaQube rather than copied.

The homepage also includes an image-led modality section with subtle hover interactions and CSS motion on the existing abstract data-cube visual. The photos are loaded from Unsplash's image CDN, so an internet connection is needed to display them. Before launch, consider replacing these demo photos with licensed/owned brand imagery and confirm that every described service matches DaQube's actual delivery capacity.

Reference pages used for service-category research:
- https://gts.ai/
- https://gts.ai/services/
- https://gts.ai/services/image-and-video-annotation/
- https://gts.ai/services/text-data-collection/
