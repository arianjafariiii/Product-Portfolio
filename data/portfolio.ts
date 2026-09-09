export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  type: string;
  tags: string[];
  summary: string;
  problem: string;
  research: string[];
  insights: string[];
  decisions: string[];
  outcome: string;
  tools: string[];
  links: ProjectLink[];
  featured: boolean;
};

export const siteConfig = {
  name: 'Arian Jafari',
  email: 'arian.jafari2233@gmail.com',
  location: 'Isfahan, Iran',
  linkedIn: 'https://www.linkedin.com',
  resumeUrl: 'https://example.com/resume.pdf',
  seoKeywords: [
    'Arian Jafari',
    'Product Research',
    'Competitive Intelligence',
    'Product Strategy',
    'Product Manager',
    'Market Research',
    'Competitor Analysis',
  ],
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/about' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const projects: Project[] = [
  {
    slug: 'ai-agents-simplified',
    title: 'AI Agents Simplified',
    subtitle: 'AI Media Product / Product Operations / Growth Research',
    role: 'Product & Growth Strategy',
    year: '2024',
    type: 'AI Media Product / Product Operations / Growth Research',
    tags: ['Audience Research', 'Content Strategy', 'AI', 'AI Agents', 'Growth Research', 'Automation', 'Notion', 'HubSpot', 'n8n'],
    summary: 'Monitored audience and content performance, translated feedback into product and editorial decisions, researched AI and AI-agent products, and coordinated weekly experiments to shape growth and product direction. This included audience and content-format experiments, CTR and SEO research, monetisation research, and a reply-aware outreach automation that turned Apollo contact lists into personalized multi-sender email campaigns. One initiative proposed interview-based content featuring AI company CEOs to create educational value while offering an organic thought-leadership channel.',
    problem: 'The content and product strategy needed a stronger loop between audience feedback, data, and experimentation so that the publication could evolve in a targeted and sustainable way.',
    research: [
      'Monitored content and audience KPIs to understand what resonated with the audience',
      'Designed and used surveys to capture feedback and identify content gaps',
      'Reviewed post impressions, survey feedback, and successful competitors to identify audience tests and content patterns worth validating',
      'Tested newsletter structures over consecutive weeks and used SEO research to investigate a declining click-through rate',
      'Researched monetisation options and developed concepts for both a CPC advertising model and CEO interview content',
      'Researched AI and AI-agent products to understand trends, user needs, and positioning opportunities',
      'Translated feedback into weekly workflow coordination and content/product experimentation',
      'Mapped the operational requirements for personalized outreach, sender rotation, follow-up timing, and reply handling',
      'Created a content ideation and prioritization sheet that made approval status, publishing format, ownership, and priority visible to the team',
      'Used Notion, ClickUp, HubSpot, Google Sheets, and Google Docs to manage research and execution workflows',
    ],
    insights: [
      'Audience learning value was a strong driver, and interviews with AI founders and executives could create educational content with strategic value for the brand and partners.',
      'A repeatable growth loop needed consistent audience listening, structured feedback translation, and experimentation rather than isolated campaigns.',
      'The strongest content ideas came from combining audience pain points, market trends, and credible product learning.',
      'Broader educational content drove stronger engagement when it was balanced deliberately with deep-dive formats.',
      'Internal and external links, including in simple relevant contexts, were a practical lever for improving newsletter click-through rate.',
    ],
    decisions: [
      'Proposed interview-based content featuring AI company CEOs to create educational resource value and an organic thought-leadership channel.',
      'Designed and tested a planned mix of newsletter structures to find a sustainable balance between deep dives and more accessible educational content.',
      'Recommended shifting advertising from CPR toward CPC through a new platform, alongside CEO interviews as a format with value for both sponsors and readers.',
      'Built an n8n outreach system that used 4–5 sender inboxes to deliver campaign batches of 20 personalized emails from Apollo contact data.',
      'Automated two follow-ups at three- and four-day intervals, with Gmail reply detection and contact-state updates that stopped further outreach once a recipient replied.',
      'Set up an early task-assignment and content-production tracker before the team moved its workflows into Notion and Trello.',
      'Used audience and content signal to inform new content/product concepts and improve decision quality over time.',
    ],
    outcome: 'The work created a more structured growth loop across content, SEO, monetisation, and outreach. Following audience and content-format testing, engagement on broader educational posts increased from roughly 20–22 to 60–70 likes and comments. The CPC and CEO-interview initiatives doubled revenue in weaker periods, while the outreach automation avoided an estimated $50–80 monthly tooling cost and supported the sell-out of 60 tickets for the first event. The reported dashboard snapshot shows 57,366 subscribers (from 31,231), $652 pledged annualized revenue (from $96), and 1.18M one-year views (from 133K).',
    tools: ['Notion', 'ClickUp', 'HubSpot', 'Google Sheets', 'Google Docs', 'n8n', 'Survey Design', 'AI Research'],
    links: [
      { label: 'Newsletter', href: 'https://aiagentssimplified.substack.com/publish/home' },
      { label: 'Case Study', href: '/projects/ai-agents-simplified' },
    ],
    featured: true,
  },
  {
    slug: 'matintouch',
    title: 'MatinTouch',
    subtitle: 'B2B Product & Digital Strategy',
    role: 'Product Strategy & Market Intelligence Lead',
    year: '2024',
    type: 'B2B / Product / Market Research',
    tags: ['B2B Research', 'SEO', 'Website Strategy', 'Positioning', 'Commercial Messaging', 'Product Pages'],
    summary: 'Used competitive and market research to improve positioning, website structure, B2B messaging, and commercial communication across the business. The work translated research into visible changes across product pages, SEO, content, and website architecture.',
    problem: 'The company needed a clearer digital strategy to translate trade-market demand into stronger website structure, product-page communication, and commercial clarity.',
    research: [
      'B2B market research and competitor analysis',
      'Search-demand and SEO research',
      'Website structure and product-page strategy review',
      'Commercial messaging and lead-generation improvements',
    ],
    insights: [
      'A strong website needed to match the actual buyer journey and search behavior in international B2B trade.',
      'Commercial clarity improved when product pages aligned with demand, intent, and messaging.',
      'SEO, content, and page architecture worked together to improve visibility and communication quality.',
    ],
    decisions: [
      'Adjusted positioning and page structure to better align with commercial goals.',
      'Refined product messaging for clearer relevance to target buyers and export audiences.',
      'Improved content, website architecture, and commercial communication to support lead generation.',
    ],
    outcome: 'The strategy translated research into concrete improvements across the website and commercial communication approach.',
    tools: ['SEO', 'Market Research', 'Website Architecture', 'B2B Messaging', 'AI-assisted Workflows'],
    links: [
      { label: 'View Website', href: 'https://www.matintouch.com/' },
      { label: 'Case Study', href: '/projects/matintouch' },
    ],
    featured: true,
  },
  {
    slug: 'dibz',
    title: 'Dibz',
    subtitle: 'Food-Tech Startup / Early-Stage Consumer Product',
    role: 'Founder / CEO & Product Lead',
    year: 'Pre-launch',
    type: 'Early-Stage Consumer Product',
    tags: ['Market Research', 'Competitor Analysis', 'Target Audience', 'Product Positioning', 'GTM Planning', 'Customer Journey'],
    summary: 'Conducted market and customer research to define the target audience, identify product-market gaps, and shape pre-launch positioning and strategy for a food-tech consumer concept.',
    problem: 'The product was pre-launch, so the main challenge was to ground strategy in discovery and market-gap analysis rather than traction or user evidence.',
    research: [
      'Market research and competitor business-model analysis',
      'Customer and problem research',
      'Target audience definition and product positioning',
      'Customer journey and early GTM planning',
    ],
    insights: [
      'The right product direction depended on a sharper understanding of audience pain and unmet needs.',
      'Pre-launch work was strongest when centered on problem clarity rather than product assumptions.',
      'Product and launch choices needed to reflect the actual market landscape and behavior patterns.',
    ],
    decisions: [
      'Defined the target audience based on clear pain points and market needs.',
      'Used competitor and market-gap analysis to inform product direction and positioning.',
      'Prepared launch strategy around discovery-informed product and sequence decisions.',
    ],
    outcome: 'The early research created a credible pre-launch foundation without presenting unverified user, revenue, or traction metrics.',
    tools: ['Market Research', 'Competitor Analysis', 'Positioning', 'Launch Planning', 'Customer Journey'],
    links: [
      { label: 'Project Details', href: '/projects/dibz' },
      { label: 'Website', href: 'https://dibz-pwa.vercel.app/' },
    ],
    featured: true,
  },
  {
    slug: 'benoa',
    title: 'Benoa',
    subtitle: 'Digital Literacy Platform for Children',
    role: 'Product Research & Strategy',
    year: '2024',
    type: 'Startup Business Development / Product Strategy',
    tags: ['Competitive Analysis', 'Product Research', 'Customer Discovery', 'Market Research', 'Product Strategy', 'Lean Canvas', 'MVP', 'Positioning'],
    summary: 'Researched the family digital wellness space and translated customer needs into a stronger product direction and business model, shifting from restrictive controls to collaborative education and healthy self-regulation.',
    problem: 'Parents wanted a way to reduce digital conflict and build healthier habits with children, not simply monitor or restrict device usage.',
    research: [
      'Structured parent interviews using The Mom Test principles',
      'Competitive review of local and international alternatives such as Kanoon, Pinardin, Kidzy, Common Sense Media, Be Internet Awesome, and UK Safer Internet',
      'Value proposition and customer segmentation analysis',
      'Market and environment assessment',
      'Lean Canvas and SWOT development',
    ],
    insights: [
      'Parents were more motivated by reducing family conflict and encouraging healthy behavior than direct digital restriction.',
      'The emotional cost of conflict was a major part of the problem experience.',
      'A collaborative education model resonated more strongly than a control-focused product.',
    ],
    decisions: [
      'Shifted positioning from “control children’s digital usage” to “collaborative digital education and healthy self-regulation.”',
      'Defined a value proposition around rewards, learning, and family communication.',
      'Built a lean business model around education and habit support rather than pure restriction tools.',
      'Used business model assumptions and projected scenario modeling without presenting them as actual revenue or traction.',
    ],
    outcome: 'The research clarified a more credible product strategy and business model direction for the startup while highlighting the strongest opportunity in the market.',
    tools: ['Customer Discovery', 'Competitive Analysis', 'Lean Canvas', 'SWOT', 'Value Proposition Design', 'Business Modeling'],
    links: [
      { label: 'Project Overview', href: '/projects/benoa' },
      { label: 'Competitor Analysis', href: 'https://docs.google.com/spreadsheets/d/1ewzLqIzLMIA_IT9MUK5BNrxLX9ME5IuvsQS4qpY9wH8/edit?usp=sharing' },
      { label: 'English Documentation', href: 'https://drive.google.com/file/d/1yHm9U6qA_r07ZNXg8wykW906aAr3IJ7R/view?usp=sharing' },
      { label: 'English Documentation (PDF)', href: '/documents/benoa-english-documentation.pdf' },
      { label: 'Persian Documentation — Phase 0', href: '/documents/benoa-persian-phase-0.pdf' },
      { label: 'Persian Documentation — Phase 1', href: '/documents/benoa-persian-phase-1.docx' },
      { label: 'Persian Documentation — Phase 2', href: '/documents/benoa-persian-phase-2.pdf' },
    ],
    featured: true,
  },
  {
    slug: 'habit-creator',
    title: 'Habit Creator',
    subtitle: 'HCI Product Research',
    role: 'Product Research / HCI',
    year: '2024',
    type: 'Product Research / HCI / UX Research',
    tags: ['User Research', 'Survey Design', 'Competitor Audit', 'HCI', 'Problem Framing', 'Ideation', 'Prototype Evaluation', 'Information Architecture'],
    summary: 'Explored what actually keeps people motivated to sustain habits over time and translated qualitative and quantitative findings into a more useful product direction. The work focused on motivation continuity, progress visibility, and friction reduction rather than habit initiation alone.',
    problem: 'Users often did not struggle with starting a habit; they struggled with maintaining motivation and continuity over time.',
    research: [
      'User interviews and survey research',
      'Thematic analysis and problem statement synthesis',
      'Competitor analysis across Habitica, Fabulous, Streaks, Routino, Way of Life, Todoist, Notion, and Google Calendar',
      'Prototype evaluation and feature prioritization',
      'Information architecture, user flows, and low-fidelity prototype design',
    ],
    insights: [
      'Progress visibility, social influence, and low-friction experiences were key levers.',
      'Excessive comparison reduced motivation and made the experience feel discouraging.',
      'A sustainable habit product needed to reduce friction while preserving momentum and continuity.',
    ],
    decisions: [
      'Prioritized visible personal progress and continuation over aggressive gamification.',
      'Mapped the product around motivation continuity rather than habit initiation alone.',
      'Built an information architecture and prototype around friction reduction, habit sustainment, and motivation support.',
    ],
    outcome: 'The research defined a clearer product direction and a more evidence-based prioritization model for future product development.',
    tools: ['User Interviews', 'Survey Research', 'Personas', 'Wireframes', 'Low-Fidelity Prototype', 'Thematic Analysis'],
    links: [
      { label: 'Case Study', href: '/projects/habit-creator' },
      { label: 'Competitor Analysis', href: 'https://docs.google.com/spreadsheets/d/1uJx8Kc19qK_dNFm7IWsYvBbqtGTaUSARv_X4zL92FKA/edit?usp=sharing' },
      { label: 'English Documentation', href: '/documents/habit-creator-english-documentation.pdf' },
      { label: 'Persian Documentation — Phase 1', href: '/documents/habit-creator-persian-phase-1.pdf' },
      { label: 'Persian Documentation — Phase 2', href: '/documents/habit-creator-persian-phase-2.pdf' },
    ],
    featured: true,
  },
  {
    slug: 'cdn-strategy',
    title: 'Early-Stage CDN Product Strategy',
    subtitle: 'Product Evaluation / Competitive Research',
    role: 'Research & Strategy Contributor',
    year: '2024',
    type: 'Product Evaluation / Competitive Research',
    tags: ['Competitive Research', 'Market Evaluation', 'Positioning', 'Landing Page Strategy', 'Product Messaging', 'Concept Feedback'],
    summary: 'Collaborated with a network developer to evaluate and shape an early-stage CDN product concept, using competitor research and positioning analysis to improve clarity across market framing and landing-page messaging.',
    problem: 'The concept needed clearer positioning and stronger messaging so it could be understood by early customers and partners before deeper product buildout.',
    research: [
      'Competitor landscape review',
      'Market evaluation and positioning analysis',
      'Landing-page and messaging strategy review',
      'Concept feedback synthesis and strategic recommendations',
    ],
    insights: [
      'Message clarity mattered as much as technical differentiation.',
      'Early positioning needed to speak directly to value and audience fit rather than product complexity.',
      'The concept required sharper evaluation before deeper product buildout or go-to-market investment.',
    ],
    decisions: [
      'Recommended a clearer positioning narrative for the product concept.',
      'Outlined strategic recommendations around audience targeting and landing-page messaging.',
      'Used concept feedback to improve clarity and early product framing without overstating technical or commercial readiness.',
    ],
    outcome: 'The engagement produced a more structured evaluation of the market and a stronger strategic foundation for future concept development.',
    tools: ['Competitor Research', 'Market Evaluation', 'Positioning', 'Landing Page Strategy', 'Messaging Strategy'],
    links: [
      { label: 'Case Study', href: '/projects/cdn-strategy' },
      { label: 'Landing Page', href: 'https://whatiscdn.org/' },
      { label: 'Competitor Analysis', href: 'https://docs.google.com/spreadsheets/d/1iVstfgW0xq-KOilzUZMcsYZBr7bMp1yGt5b3firBTFA/edit?usp=sharing' },
    ],
    featured: true,
  },
];

export const skills = {
  strategy: [
    'Product Discovery',
    'Product Strategy',
    'Competitive Analysis',
    'Market Research',
    'Product Positioning',
    'Feature Prioritization',
    'MVP Definition',
    'Lean Canvas',
    'Value Proposition Design',
    'Go-to-Market Strategy',
  ],
  research: [
    'User Interviews',
    'The Mom Test',
    'Survey Design',
    'Customer Discovery',
    'Competitor Benchmarking',
    'KPI Analysis',
    'Retention Analysis',
    'Thematic Analysis',
    'Persona Development',
    'User Journey Mapping',
  ],
  tools: ['Notion', 'ClickUp', 'HubSpot', 'Google Sheets', 'Google Docs', 'Figma', 'n8n', 'Git/GitHub', 'Jira', 'PostgreSQL'],
  technical: ['AI & AI Agents', 'HCI', 'Database Fundamentals', 'SEO', 'Web Technologies', 'Automation', 'Basic Networking'],
};
