import type {
  NavItem,
  Service,
  CurriculumModule,
  Post,
  Testimonial,
  Article,
  CaseStudy,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
    { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "cohort",
    code: "CO-01",
    name: "Data Analytics Cohort Program",
    duration: "16 weeks",
    priceFrom: "from ₦450,000",
    kicker: "Mentor-led, project-based, capped at 25 learners.",
    blurb:
      "Our flagship 16-week track: data literacy and statistics through to Power BI dashboards and a defended capstone.",
    tools: ["Excel", "SQL", "Power Query", "Power BI", "Python"],
    hero: "Sixteen weeks from data literacy to a defended capstone.",
    sub: "Live mentor-led sessions twice weekly, graded weekly deliverables, and a capstone reviewed against a real analyst hiring rubric.",
    overview:
      "A full analyst apprenticeship compressed into sixteen weeks, descriptive through predictive analytics, taught on datasets that arrive broken.",
    overviewLong:
      "You will work the entire pipeline: profiling raw extracts, resolving grain and duplication, writing joins and window functions against a relational database, shaping an ETL flow in Power Query, modelling to a star schema, then building and narrating a Power BI report. Every week ends with a graded artefact and written feedback; every fortnight there is a live critique session where you defend your numbers out loud.",
    outcomes: [
      "Profile and clean a dirty extract, types, nulls, duplicates, referential gaps, and document every assumption you made",
      "Write multi-table SQL with joins, subqueries, CTEs and window functions, and reason about query grain",
      "Build repeatable ETL/ELT flows in Power Query and model to a star schema with conformed dimensions",
      "Write DAX measures that survive filter context, including time intelligence and ratio-to-parent patterns",
      "Apply descriptive statistics, correlation, and hypothesis testing correctly, and refuse causal claims the data cannot support",
      "Design a KPI framework and tell the story it supports in a five-minute stakeholder readout",
    ],
    structureKicker: "CURRICULUM",
    structureTitle: "Module by module, week by week.",
    modules: [
      {
        meta: "WEEKS 1–2",
        title: "Data Literacy & Statistics",
        detail:
          "Levels of measurement, mean/median/variance, distributions and outliers, correlation vs. causation, sampling error, and framing an analytical question before touching a tool.",
      },
      {
        meta: "WEEKS 3–5",
        title: "Excel for Analysts",
        detail:
          "Structured tables, XLOOKUP and INDEX/MATCH, PivotTables and PivotCharts, Power Pivot and the data model, What-If analysis, and building an auditable workbook.",
      },
      {
        meta: "WEEKS 6–8",
        title: "SQL & Relational Databases",
        detail:
          "Schema design, all four join types, aggregation and HAVING, subqueries and CTEs, window functions, indexing basics, and query performance intuition.",
      },
      {
        meta: "WEEKS 9–10",
        title: "Power Query & ETL/ELT",
        detail:
          "Connectors, applied-step discipline, unpivot and merge patterns, incremental refresh, parameterised queries, and where transformation should actually live.",
      },
      {
        meta: "WEEKS 11–13",
        title: "Visualisation & Dashboards",
        detail:
          "Star-schema modelling, DAX measures and filter context, encoding choices and pre-attentive attributes, dashboard IA, and Tableau as a comparative build.",
      },
      {
        meta: "WEEKS 14–15",
        title: "Intro to Python for Analysis",
        detail:
          "pandas dataframes, groupby and merge, NumPy vectorisation, EDA workflow in Jupyter, and a first look at regression and classification framing.",
      },
      {
        meta: "WEEK 16",
        title: "Capstone & Defence",
        detail:
          "An end-to-end project on a real dataset: brief, clean, model, visualise, recommend, then defend it in a live panel review with written feedback.",
      },
    ],
    audience: [
      {
        who: "Career switchers",
        why: "Teachers, accountants, ops coordinators, anyone with strong reasoning who needs a portfolio and a vocabulary to enter analytics.",
      },
      {
        who: "Junior analysts stuck in Excel",
        why: "You already produce reports but cannot yet model, query, or defend the numbers when a stakeholder pushes back.",
      },
      {
        who: "Graduates with no data experience",
        why: "A structured, graded route from zero to interview-ready with genuine artefacts rather than certificates.",
      },
    ],
    pricingTitle: "Three ways to pay for Cohort 12.",
    pricing: [
      {
        tier: "EARLY BIRD",
        price: "₦396,000",
        note: "12% off · closes 24 August 2026",
        features: [
          "Full 16-week curriculum",
          "Twice-weekly live sessions",
          "Capstone panel defence",
          "Lifetime recording access",
        ],
      },
      {
        tier: "STANDARD",
        price: "₦450,000",
        note: "Paid in full at offer stage",
        features: [
          "Everything in Early Bird",
          "Portfolio review session",
          "Alumni Slack access",
          "Certificate of completion",
        ],
      },
      {
        tier: "INSTALMENT",
        price: "3 × ₦160,000",
        note: "Monthly, first payment before week 1",
        features: [
          "Everything in Standard",
          "No interest or fees",
          "Pause option once per cohort",
          "Payment plan agreement",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need any prior experience?",
        a: "No. Weeks 1–2 assume nothing beyond comfort with a computer. What we do assume is 10–12 hours a week, sessions plus deliverables, for sixteen weeks.",
      },
      {
        q: "What software do I need?",
        a: "A Windows machine (or Windows via Parallels/VM) for Power BI Desktop and Power Pivot, Microsoft 365, and a free PostgreSQL instance we help you set up in week 6.",
      },
      {
        q: "Are sessions recorded?",
        a: "Yes, every live session is recorded and available for the lifetime of your account. Attendance still matters: critique sessions are graded on participation.",
      },
      {
        q: "Is there job support?",
        a: "Cohort fees include one portfolio review and one mock interview. Deeper support lives in the Mentorship & Career Coaching track.",
      },
      {
        q: "What if I fall behind?",
        a: "You may defer once to the next cohort at no cost, provided you notify us before week 8. After that, a 40% re-entry fee applies.",
      },
    ],
    finalCta: "Cohort 12 starts 14 September. 25 seats.",
    finalCtaSub:
      "Apply now, screening call within three working days, offer within five.",
    ctaLabel: "Enroll Now",
  },
  {
    id: "private",
    code: "PR-02",
    name: "Private 1-on-1 Classes",
    duration: "Flexible",
    priceFrom: "from ₦45,000/session",
    kicker: "A curriculum built around your role, your data, your calendar.",
    blurb:
      "One instructor, one learner, one syllabus written for the job you actually do.",
    tools: ["Excel", "SQL", "Power BI", "DAX", "pandas"],
    hero: "Your syllabus. Your dataset. Your schedule.",
    sub: "A diagnostic session establishes what you already know, then we write a learning path against the analyses your role genuinely requires.",
    overview:
      "Cohorts move at cohort pace. Private classes move at yours, and can be taught entirely on your own data.",
    overviewLong:
      "We start with a 45-minute diagnostic covering data literacy, spreadsheet fluency, SQL reasoning and visualisation judgement. From that we produce a written learning path with module order, target artefacts and a session count. Sessions are 90 minutes, live, and each ends with a hands-on task graded before the next one. Working professionals frequently bring their own extracts under NDA and leave with a working report instead of a toy exercise.",
    outcomes: [
      "A written, personalised learning path with modules sequenced to your role and current gaps",
      "Session-by-session artefacts built on your own data where confidentiality allows",
      "Deep-dive coverage on the specific areas you choose, DAX filter context, window functions, statistical testing",
      "Async review of homework and work-in-progress between sessions",
      "A final portfolio piece and a written skills assessment you can share with a manager",
    ],
    structureKicker: "HOW IT WORKS",
    structureTitle: "Four steps, then repeat.",
    modules: [
      {
        meta: "STEP 01",
        title: "Diagnostic session",
        detail:
          "A 45-minute skills audit across data literacy, Excel, SQL reasoning and visualisation judgement. Free, no obligation.",
      },
      {
        meta: "STEP 02",
        title: "Learning path design",
        detail:
          "A written plan: modules, order, target artefacts, estimated session count and the datasets we will use.",
      },
      {
        meta: "STEP 03",
        title: "90-minute live sessions",
        detail:
          "Screen-shared, hands-on, recorded. Concept, worked example, then you drive while the instructor watches and corrects.",
      },
      {
        meta: "STEP 04",
        title: "Graded task + async review",
        detail:
          "Every session ends with a task. It is reviewed in writing before the next session, so nothing compounds silently.",
      },
      {
        meta: "STEP 05",
        title: "Checkpoint every 6 sessions",
        detail:
          "A short assessment and a re-plan, accelerate, slow down, or change direction based on evidence rather than feel.",
      },
    ],
    audience: [
      {
        who: "Working professionals",
        why: "You need SQL and Power BI for the job you already have, and you need it around a full calendar.",
      },
      {
        who: "Career switchers on a deadline",
        why: "A cohort intake is months away; a private path can start next week and move twice as fast.",
      },
      {
        who: "Analysts with specific gaps",
        why: "You can build a dashboard but DAX filter context still bites. Buy six sessions, fix the gap, leave.",
      },
    ],
    pricingTitle: "Buy sessions, not subscriptions.",
    pricing: [
      {
        tier: "SINGLE SESSION",
        price: "₦55,000",
        note: "90 minutes · pay as you go",
        features: [
          "One 90-minute live session",
          "Session recording",
          "Written task and review",
          "Rescheduling with 24h notice",
        ],
      },
      {
        tier: "SIX-PACK",
        price: "₦285,000",
        note: "₦47,500 per session · most popular",
        features: [
          "Six 90-minute sessions",
          "Free diagnostic and learning path",
          "Async review between sessions",
          "Mid-point checkpoint assessment",
        ],
      },
      {
        tier: "TWELVE-PACK",
        price: "₦540,000",
        note: "₦45,000 per session · full track",
        features: [
          "Twelve sessions, full analyst path",
          "Portfolio piece and skills report",
          "Two checkpoint assessments",
          "Priority scheduling",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we use my company data?",
        a: "Yes, where your employer permits it. We sign an NDA on request and can work on anonymised or synthetic copies that preserve structure.",
      },
      {
        q: "How quickly can I start?",
        a: "Diagnostics are usually available within 48 hours, with first teaching sessions the same week subject to instructor availability.",
      },
      {
        q: "What is the rescheduling policy?",
        a: "Free with 24 hours notice. Inside 24 hours, the session is counted as delivered unless it is a first-time occurrence.",
      },
      {
        q: "Do sessions expire?",
        a: "Six-packs expire after four months, twelve-packs after eight. Extensions are granted for documented medical or work reasons.",
      },
    ],
    finalCta: "Book a free 45-minute diagnostic.",
    finalCtaSub:
      "No obligation, you leave with a written learning path either way.",
    ctaLabel: "Enroll Now",
  },
  {
    id: "corporate",
    code: "CT-03",
    name: "Corporate Training",
    duration: "2–8 weeks",
    priceFrom: "custom quote",
    kicker: "Team upskilling built around your reporting stack.",
    blurb:
      "Curriculum designed against your actual data model, delivered on-site or remote to teams of 6–40.",
    tools: ["Excel", "Power BI", "SQL", "Governance", "DAX"],
    hero: "Your reporting team, measurably faster.",
    sub: "We audit how your team currently produces numbers, then design a training programme against your real schema, tools and reporting calendar.",
    overview:
      "Generic training produces generic results. We build the curriculum from your extracts, your KPI definitions and your reporting bottlenecks.",
    overviewLong:
      "Engagements open with a discovery workshop: which reports exist, who builds them, how long they take, and where the numbers stop reconciling. From there we design modules with your own tables and metric definitions as teaching material. Delivery is on-site or remote, in half-day or two-hour blocks that fit around month-end. Every engagement closes with a capability report, pre/post assessment scores, artefacts produced, and a prioritised list of what to fix next.",
    outcomes: [
      "A documented baseline of current team capability, per person and per skill area",
      "Shared KPI definitions and a metric dictionary the whole team agrees on",
      "Standardised Power Query and modelling patterns so reports stop being one-person dependencies",
      "Measurably reduced manual reporting hours, typically 30–60% on recurring reports",
      "A closing capability report with pre/post scores and a prioritised improvement roadmap",
    ],
    structureKicker: "SAMPLE MODULES",
    structureTitle: "Modules we most often deliver.",
    modules: [
      {
        meta: "MODULE A",
        title: "Excel for Business Analysts",
        detail:
          "Power Pivot, structured references, XLOOKUP, auditable workbook design, and eliminating the copy-paste refresh ritual.",
      },
      {
        meta: "MODULE B",
        title: "SQL for Reporting Teams",
        detail:
          "Joins, CTEs and window functions against your own schema, plus query hygiene and grain discipline for reconcilable reports.",
      },
      {
        meta: "MODULE C",
        title: "Dashboard Design for Decision-Makers",
        detail:
          "Encoding choices, chart selection, cognitive load, and designing for the decision rather than for the data available.",
      },
      {
        meta: "MODULE D",
        title: "Data-Driven Decision Making",
        detail:
          "For managers: reading variance honestly, correlation vs. causation, A/B test interpretation, and interrogating an analyst well.",
      },
      {
        meta: "MODULE E",
        title: "Power BI Semantic Modelling",
        detail:
          "Star schema, relationship cardinality, DAX filter context, row-level security and refresh governance.",
      },
      {
        meta: "MODULE F",
        title: "Data Quality & Governance",
        detail:
          "Profiling, validation rules, metric dictionaries, ownership models and lightweight documentation practice.",
      },
    ],
    audience: [
      {
        who: "Finance & FP&A teams",
        why: "Month-end takes four days because the workbook is a hand-built artefact. We industrialise it.",
      },
      {
        who: "Operations & supply chain",
        why: 'Multiple systems, no conformed dimensions, three versions of "on-time delivery". We reconcile the definitions.',
      },
      {
        who: "Leadership teams",
        why: "Executives who want to interrogate a dashboard properly rather than accept the first number shown.",
      },
    ],
    pricingTitle: "Priced per engagement, not per seat.",
    pricing: [
      {
        tier: "FOCUSED",
        price: "from ₦1.8M",
        note: "2 modules · up to 12 people · 2 weeks",
        features: [
          "Discovery workshop",
          "Two tailored modules",
          "Pre/post assessment",
          "Session recordings",
        ],
      },
      {
        tier: "PROGRAMME",
        price: "from ₦4.2M",
        note: "4–6 modules · up to 25 people · 6 weeks",
        features: [
          "Everything in Focused",
          "Curriculum built on your schema",
          "Metric dictionary workshop",
          "Capability report",
        ],
      },
      {
        tier: "PARTNERSHIP",
        price: "custom",
        note: "Multi-cohort, multi-quarter rollout",
        features: [
          "Everything in Programme",
          "Train-the-trainer track",
          "Quarterly capability reviews",
          "Named account lead",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you deliver on-site?",
        a: "Yes, on-site across Lagos and Abuja, and remote anywhere. Most clients mix: on-site for kickoff and critique, remote for the teaching blocks.",
      },
      {
        q: "Can you use our internal data?",
        a: "That is the point. We sign your NDA, work on anonymised extracts where required, and build every exercise on your real schema.",
      },
      {
        q: "How do you measure impact?",
        a: "A pre-assessment before module one, the same instrument after the final module, plus time-to-produce measurements on two nominated recurring reports.",
      },
      {
        q: "What team size works best?",
        a: "Twelve to twenty per cohort. Above twenty-five we split into parallel groups so hands-on time per person stays meaningful.",
      },
    ],
    finalCta: "Tell us what your reporting week looks like.",
    finalCtaSub:
      "We will send a scoped proposal with modules, timeline and pricing within five working days.",
    ctaLabel: "Request a Proposal",
  },
  {
    id: "kids",
    code: "KD-04",
    name: "Data Analytics for Kids",
    duration: "8 weeks",
    priceFrom: "from ₦85,000",
    kicker: "Ages 9–15. Charts, patterns and logical thinking.",
    blurb:
      "A playful, screen-light introduction to asking questions with data, spreadsheets, charts and pattern-spotting.",
    tools: ["Google Sheets", "Charts", "Logic", "Surveys"],
    hero: "Curiosity is already a data skill. We give it tools.",
    sub: "Eight weeks of surveys, tally charts, spreadsheets and pattern-hunting for ages 9–15 · taught by the same instructors, at the right altitude.",
    overview:
      "Kids already argue about which football team is better. We teach them to settle it with evidence.",
    overviewLong:
      "Sessions are 60 minutes, twice weekly, capped at twelve learners so every child gets called on. We run age-banded groups (9–11 and 12–15) with the same arc at different depths: collect data, organise it, chart it, notice something, say what you noticed and why you believe it. Every child finishes with a small data story of their own, favourite snacks in the class, rainfall in their city, screen time across a week, presented to parents in a final showcase.",
    outcomes: [
      "Design a simple survey and collect clean, usable responses",
      "Organise data in a spreadsheet, headers, rows, sorting, filtering and simple formulas",
      "Choose the right chart for a question and read one critically",
      'Spot patterns, outliers and "that looks wrong" moments in real numbers',
      "Present a short data story to an audience with a claim and evidence",
    ],
    structureKicker: "CURRICULUM",
    structureTitle: "Eight weeks, one data story.",
    modules: [
      {
        meta: "WEEK 1",
        title: "What is data, really?",
        detail:
          "Counting things around us, tally charts, and the difference between a fact, a guess and an opinion.",
      },
      {
        meta: "WEEK 2",
        title: "Asking a good question",
        detail:
          "Turning curiosity into something answerable, and designing a short survey that people will actually finish.",
      },
      {
        meta: "WEEK 3",
        title: "Spreadsheets are grids of facts",
        detail:
          "Rows, columns, headers, typing tidy data, sorting and filtering in Google Sheets.",
      },
      {
        meta: "WEEK 4",
        title: "Formulas that do the work",
        detail:
          "SUM, AVERAGE, COUNT and MAX, and why a computer never gets bored of adding.",
      },
      {
        meta: "WEEK 5",
        title: "Pictures of numbers",
        detail:
          "Bar, line and pie charts, when each one helps and when it lies to you.",
      },
      {
        meta: "WEEK 6",
        title: "Finding the odd one out",
        detail:
          "Patterns, outliers and the useful question: does that number look believable?",
      },
      {
        meta: "WEEK 7",
        title: "Telling the story",
        detail: "Claim, evidence, reasoning, building the slides for their own data story.",
      },
      {
        meta: "WEEK 8",
        title: "Showcase day",
        detail:
          "Each learner presents their data story to parents and peers, with certificates for completion.",
      },
    ],
    audience: [
      {
        who: "Ages 9–11",
        why: "Curious counters. Heavy on physical activities, tally charts and colour, light on typing.",
      },
      {
        who: "Ages 12–15",
        why: "Ready for real spreadsheets, formulas and chart critique, and often their first taste of a career interest.",
      },
      {
        who: "Parents who want substance",
        why: "Not a coding-camp badge. A genuine thinking skill their child will use in every school subject.",
      },
    ],
    pricingTitle: "Per child, per 8-week term.",
    pricing: [
      {
        tier: "WEEKEND CLUB",
        price: "₦85,000",
        note: "Saturdays · 8 weeks · online",
        features: [
          "8 × 60-minute live sessions",
          "Workbook and activity pack",
          "Showcase day",
          "Completion certificate",
        ],
      },
      {
        tier: "HOLIDAY INTENSIVE",
        price: "₦110,000",
        note: "2 weeks · 4 sessions weekly",
        features: [
          "Same curriculum, condensed",
          "Small groups of 10",
          "Daily activity pack",
          "Showcase day",
        ],
      },
      {
        tier: "SIBLING PLACE",
        price: "₦68,000",
        note: "20% off second child",
        features: [
          "Full term for the second child",
          "Same group or age-matched",
          "Shared parent progress report",
          "Showcase day",
        ],
      },
    ],
    faqs: [
      {
        q: "How much screen time is involved?",
        a: "Roughly half. Weeks 1–2 are almost entirely off-screen, counting, tallying, drawing. Spreadsheet work builds up gradually from week 3.",
      },
      {
        q: "Is the class supervised and safe?",
        a: "All sessions are recorded, hosted in a locked room with waiting-room admission, and every instructor holds a current background check. Parents may observe any session.",
      },
      {
        q: "What does my child need?",
        a: "A laptop or tablet with a keyboard, stable internet, and a free Google account. We provide all datasets and worksheets.",
      },
      {
        q: "Will this help with school?",
        a: "Directly, the reasoning transfers to maths, science fair projects and geography. Parents most often report improved confidence reading charts in class.",
      },
    ],
    finalCta: "The next kids term starts 5 October.",
    finalCtaSub:
      "Twelve places per group. Sibling discount applies automatically at offer stage.",
    isKids: true,
    ctaLabel: "Enroll Now",
  },
  {
    id: "mentorship",
    code: "MC-05",
    name: "Mentorship & Career Coaching",
    duration: "4–12 weeks",
    priceFrom: "from ₦75,000",
    kicker: "Portfolio review, mock interviews, career pathing.",
    blurb:
      "For people who can already analyse but are not converting applications into offers.",
    tools: ["Portfolio", "SQL interviews", "Case studies", "Positioning"],
    hero: "You can do the work. Now get hired for it.",
    sub: "Portfolio teardowns, live SQL and case interviews, and honest positioning advice for data analyst and data scientist roles.",
    overview:
      "Most rejected candidates are not underskilled. They are unevidenced, mispositioned, or unrehearsed under pressure.",
    overviewLong:
      "We start by auditing what a hiring manager actually sees: your CV, your portfolio, your GitHub, your LinkedIn. Then we rebuild the evidence, projects reframed around business outcomes rather than tools used. From there it is repetition: live SQL screens under time pressure, take-home case debriefs, and behavioural rounds where you have to explain a decision you got wrong. Sessions are recorded so you can watch yourself and see what the interviewer sees.",
    outcomes: [
      "A CV and LinkedIn rewritten around outcomes and metrics rather than tool lists",
      "Two portfolio projects restructured into defensible business cases with clear recommendations",
      "Timed practice on live SQL screens, take-home cases and dashboard critiques",
      'A rehearsed, honest answer to every standard behavioural and "tell me about a mistake" prompt',
      "A target role map, analyst vs. BI developer vs. analytics engineer, with a realistic salary band",
    ],
    structureKicker: "THE PROGRAMME",
    structureTitle: "What each block covers.",
    modules: [
      {
        meta: "BLOCK 01",
        title: "Career diagnostic & role mapping",
        detail:
          "Where you actually fit, data analyst, BI developer, analytics engineer, product analyst, and what each one screens for.",
      },
      {
        meta: "BLOCK 02",
        title: "CV, LinkedIn & portfolio audit",
        detail:
          "Line-by-line rewrite around outcomes, metrics and scope. Screening filters explained honestly.",
      },
      {
        meta: "BLOCK 03",
        title: "Project teardown & rebuild",
        detail:
          "Two portfolio projects reframed: business question, method, limitation, recommendation. README and dashboard polish included.",
      },
      {
        meta: "BLOCK 04",
        title: "Technical interview drills",
        detail:
          "Timed SQL screens, Excel tasks, and a take-home case with written feedback against a real rubric.",
      },
      {
        meta: "BLOCK 05",
        title: "Behavioural & stakeholder rounds",
        detail:
          "STAR structure, explaining a wrong analysis, pushing back on a bad request, and salary conversations.",
      },
      {
        meta: "BLOCK 06",
        title: "Offer strategy & 90-day plan",
        detail:
          "Evaluating offers, negotiating bands, and what to deliver in the first ninety days so probation is uneventful.",
      },
    ],
    audience: [
      {
        who: "Bootcamp graduates",
        why: "You have projects but they read as coursework. We turn them into evidence.",
      },
      {
        who: "Internal movers",
        why: "You do analysis inside a non-analyst role and need to make it legible to a hiring panel.",
      },
      {
        who: "Stalled applicants",
        why: "Forty applications, three screens, no offers. Usually a positioning or rehearsal problem, not a skill one.",
      },
    ],
    pricingTitle: "Pick the depth you need.",
    pricing: [
      {
        tier: "PORTFOLIO REVIEW",
        price: "₦75,000",
        note: "One-off · 2 hours + written report",
        features: [
          "CV and LinkedIn audit",
          "One project teardown",
          "Written report with priorities",
          "Two-week follow-up email",
        ],
      },
      {
        tier: "INTERVIEW SPRINT",
        price: "₦195,000",
        note: "4 weeks · 6 sessions",
        features: [
          "Everything in Portfolio Review",
          "Three mock interviews recorded",
          "Timed SQL and case drills",
          "Rubric-scored feedback",
        ],
      },
      {
        tier: "FULL COACHING",
        price: "₦380,000",
        note: "12 weeks · 12 sessions",
        features: [
          "Everything in Interview Sprint",
          "Two projects rebuilt end-to-end",
          "Offer negotiation support",
          "90-day onboarding plan",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you guarantee a job?",
        a: "No, and be sceptical of anyone who does. We guarantee honest feedback, rubric-scored practice and a materially stronger application, the market decides the rest.",
      },
      {
        q: "Can you help with international roles?",
        a: "Yes. We coach for remote-first and relocation applications, including CV format differences and visa-sponsorship realities.",
      },
      {
        q: "Do I need to be an LWi graduate?",
        a: "No. Roughly half of coaching clients trained elsewhere or are self-taught.",
      },
      {
        q: "Are mock interviews recorded?",
        a: "Yes, and watching yourself back is usually the single most useful hour of the programme.",
      },
    ],
    finalCta: "Get your portfolio torn down properly.",
    finalCtaSub:
      "Book a review and receive a written report within three working days of the session.",
    ctaLabel: "Enroll Now",
  },
  {
    id: "workshops",
    code: "WM-06",
    name: "Workshops & Masterclasses",
    duration: "1–2 days",
    priceFrom: "from ₦25,000",
    kicker: "Single-topic intensives. One skill, one sitting.",
    blurb:
      "Short, sharp sessions on one subject, from a Power BI dashboard in a day to a weekend SQL bootcamp.",
    tools: ["Power BI", "SQL", "DAX", "Storytelling", "pandas"],
    hero: "One topic. One sitting. Something built by the end.",
    sub: "Live, hands-on intensives for people who need a specific skill now, not a sixteen-week commitment.",
    overview:
      "Every workshop is build-along. You leave with a finished artefact, the dataset, and the file you made it in.",
    overviewLong:
      "Workshops run live on Saturdays or weekday evenings, capped at forty participants with a teaching assistant monitoring the chat for anyone stuck. Format is consistent: fifteen minutes of concept, then build alongside the instructor with checkpoints every twenty minutes. Recordings and all working files are yours permanently, and workshop fees are creditable against a cohort seat within ninety days.",
    outcomes: [
      "A completed, working artefact by the end of the session, not notes to act on later",
      "The dataset and finished file to reuse, adapt and show",
      "A recording you can rewatch while rebuilding it independently",
      "A clear map of what to learn next, and where it fits in the full analyst path",
      "Fee credit toward a cohort seat if you enrol within ninety days",
    ],
    structureKicker: "UPCOMING SCHEDULE",
    structureTitle: "What is running next.",
    modules: [
      {
        meta: "30 AUG",
        title: "Power BI Dashboard in a Day",
        detail:
          "Load, model to a star schema, write core DAX measures, and ship a three-page sales report. 09:00–16:00 WAT. ₦45,000.",
      },
      {
        meta: "6–7 SEP",
        title: "SQL for Beginners: Bootcamp Weekend",
        detail:
          "From SELECT to window functions across two days on a live PostgreSQL database. 10:00–15:00 both days. ₦55,000.",
      },
      {
        meta: "13 SEP",
        title: "Excel Power Query Deep Dive",
        detail:
          "Unpivot, merge, parameterise and schedule refreshes. Kill the monthly copy-paste ritual. 10:00–14:00. ₦35,000.",
      },
      {
        meta: "20 SEP",
        title: "Data Storytelling for Analysts",
        detail:
          "Structure a five-minute readout, choose encodings that survive scrutiny, and handle the hostile question. 10:00–14:00. ₦30,000.",
      },
      {
        meta: "27 SEP",
        title: "Statistics Without the Fear",
        detail:
          "Distributions, variance, hypothesis testing and A/B test reading, worked in Excel, no formulas memorised. 10:00–14:00. ₦30,000.",
      },
      {
        meta: "4 OCT",
        title: "Python & pandas for Excel Users",
        detail:
          "Every PivotTable move, rewritten as groupby. A gentle first day in Jupyter. 10:00–15:00. ₦40,000.",
      },
    ],
    audience: [
      {
        who: "Busy professionals",
        why: "A specific gap to close before Monday, and no capacity for a multi-month programme.",
      },
      {
        who: "Cohort-curious learners",
        why: "Try our teaching for a day. Fees credit toward a cohort seat within ninety days.",
      },
      {
        who: "Small teams",
        why: "Book three or more seats and we will tailor the sample dataset to your industry at no extra cost.",
      },
    ],
    pricingTitle: "Per session, or bundled.",
    pricing: [
      {
        tier: "SINGLE WORKSHOP",
        price: "from ₦25,000",
        note: "Half-day and full-day rates vary",
        features: [
          "Live hands-on session",
          "All datasets and files",
          "Permanent recording access",
          "Certificate of attendance",
        ],
      },
      {
        tier: "THREE-PACK",
        price: "₦95,000",
        note: "Any three sessions · 15% off",
        features: [
          "Three workshops of your choice",
          "Valid twelve months",
          "Transferable to a colleague",
          "Permanent recordings",
        ],
      },
      {
        tier: "TEAM SEATS",
        price: "from ₦20,000/seat",
        note: "Five seats or more",
        features: [
          "Volume rate per seat",
          "Industry-matched dataset",
          "Private Q&A block",
          "Consolidated invoicing",
        ],
      },
    ],
    faqs: [
      {
        q: "Are workshops beginner-friendly?",
        a: 'Each listing states its prerequisite. "Dashboard in a Day" assumes basic Excel; the SQL weekend assumes nothing at all.',
      },
      {
        q: "Can I get a recording if I miss it?",
        a: "Yes, every registrant receives the recording and files regardless of attendance, available permanently.",
      },
      {
        q: "Does the fee count toward a cohort?",
        a: "Yes. One hundred percent of workshop fees paid within ninety days of enrolling are credited against your cohort seat.",
      },
      {
        q: "Do you run private team workshops?",
        a: "Regularly. Five seats or more unlocks a private run with your industry dataset, request it through the contact page.",
      },
    ],
    finalCta: "Next up: Power BI Dashboard in a Day, 30 August.",
    finalCtaSub: "Forty seats, live, with all files and the recording yours to keep.",
    ctaLabel: "Enroll Now",
  },
];

export const CURRICULUM: CurriculumModule[] = [
  {
    key: "literacy",
    label: "Data Literacy & Statistics",
    weeks: "WEEKS 1–2",
    title: "Data Literacy & Statistics",
    detail:
      "Before any tool: what a variable is, how distributions behave, why the mean lies when the data is skewed, and how to frame a question that data can actually answer.",
    tools: ["Descriptive stats", "Hypothesis testing", "Sampling", "Correlation"],
    outcomes: [
      "Choose mean, median or mode defensibly for a given distribution",
      "Read variance and standard deviation as decision information",
      "Distinguish correlation from causation in a stakeholder conversation",
      "Frame a vague business question as a testable analytical one",
    ],
  },
  {
    key: "excel",
    label: "Excel",
    weeks: "WEEKS 3–5",
    title: "Excel for Analysts",
    detail:
      "Excel treated as a modelling tool, not a notepad: structured tables, lookup logic that does not break, PivotTables, and Power Pivot for datasets past a million rows.",
    tools: ["PivotTables", "XLOOKUP", "Power Pivot", "What-If"],
    outcomes: [
      "Build auditable workbooks with structured tables and named ranges",
      "Replace fragile VLOOKUP chains with XLOOKUP and INDEX/MATCH",
      "Summarise millions of rows through the Power Pivot data model",
      "Design a KPI sheet a finance lead can review without asking you",
    ],
  },
  {
    key: "sql",
    label: "SQL",
    weeks: "WEEKS 6–8",
    title: "SQL & Relational Databases",
    detail:
      "The core analyst language. Schema reading, joins that preserve grain, aggregation, subqueries and CTEs, and window functions for ranking and running totals.",
    tools: ["Joins", "CTEs", "Window functions", "PostgreSQL"],
    outcomes: [
      "Read an unfamiliar schema and identify the grain of every table",
      "Write inner, left, right and full joins knowing what each will duplicate",
      "Compose CTEs and subqueries into readable multi-step logic",
      "Use window functions for ranking, running totals and period comparison",
    ],
  },
  {
    key: "etl",
    label: "Power Query / ETL",
    weeks: "WEEKS 9–10",
    title: "Power Query & ETL/ELT",
    detail:
      "Turning a manual monthly ritual into a refreshable pipeline: connectors, applied steps, unpivot and merge patterns, parameters and incremental refresh.",
    tools: ["Power Query", "M", "Unpivot", "Incremental refresh"],
    outcomes: [
      "Build a refreshable pipeline from messy multi-sheet source files",
      "Apply unpivot, merge and append patterns to normalise shapes",
      "Parameterise queries for environment and date-range changes",
      "Decide correctly whether logic belongs in ETL, the model, or the report",
    ],
  },
  {
    key: "viz",
    label: "Visualisation & Dashboards",
    weeks: "WEEKS 11–13",
    title: "Data Visualisation & Dashboards",
    detail:
      "Star-schema modelling, DAX that survives filter context, and the visual grammar that decides whether a dashboard gets used or ignored.",
    tools: ["Power BI", "DAX", "Tableau", "Star schema"],
    outcomes: [
      "Model to a star schema with correct relationship cardinality",
      "Write DAX measures using CALCULATE and time intelligence correctly",
      "Choose encodings on perceptual grounds, not aesthetic preference",
      "Structure a dashboard around the decision it serves",
    ],
  },
  {
    key: "python",
    label: "Python & Intro ML",
    weeks: "WEEKS 14–16",
    title: "Python for Analysis & Intro ML",
    detail:
      "pandas as the analyst escape hatch, a disciplined EDA workflow, and enough machine learning framing to talk about classification, regression and clustering honestly.",
    tools: ["pandas", "NumPy", "Jupyter", "scikit-learn"],
    outcomes: [
      "Load, reshape and merge dataframes with pandas",
      "Run a structured EDA, distributions, missingness, relationships",
      "Frame a problem as regression, classification or clustering",
      "Read a model evaluation metric without overclaiming",
    ],
  },
];

export const POSTS: Post[] = [
  {
    id: "p1",
    category: "SQL Tutorials",
    title: "Window functions are the SQL skill that gets you promoted",
    excerpt:
      "RANK, LAG and running totals, and the moment a GROUP BY stops being enough for the question you were asked.",
    author: "Ikechukwu Emeka",
    date: "18 Aug 2026",
    readTime: "9 min read",
    imageNote: "COVER · SQL WINDOW FN",
  },
  {
    id: "p2",
    category: "Power BI",
    title: "Your DAX measure is wrong because you misread filter context",
    excerpt:
      "CALCULATE does not filter your table. It modifies the filter context of the evaluation, a distinction that explains most broken measures.",
    author: "Ikechukwu Emeka",
    date: "11 Aug 2026",
    readTime: "12 min read",
    imageNote: "COVER · DAX CONTEXT",
  },
  {
    id: "p3",
    category: "Excel Tips",
    title: "Stop using VLOOKUP. Here is the migration path.",
    excerpt:
      "XLOOKUP, INDEX/MATCH and the Power Pivot data model, when each is right, and how to convert a fragile workbook without breaking month-end.",
    author: "Adaeze Nwosu",
    date: "4 Aug 2026",
    readTime: "7 min read",
    imageNote: "COVER · XLOOKUP",
  },
  {
    id: "p4",
    category: "Statistics",
    title: "Correlation vs. causation, explained with a real sales dataset",
    excerpt:
      "Ice cream and drowning is a tired example. Here is a confounded marketing spend analysis that nearly shipped.",
    author: "Ikechukwu Emeka",
    date: "28 Jul 2026",
    readTime: "10 min read",
    imageNote: "COVER · CONFOUNDING",
  },
  {
    id: "p5",
    category: "Data Storytelling",
    title: "The five-minute readout: a structure that survives executives",
    excerpt:
      "Lead with the decision, not the methodology. A repeatable outline for presenting analysis to people with no patience.",
    author: "Adaeze Nwosu",
    date: "21 Jul 2026",
    readTime: "6 min read",
    imageNote: "COVER · READOUT",
  },
  {
    id: "p6",
    category: "Career Advice",
    title: "What a hiring manager actually looks for in a portfolio",
    excerpt:
      "Not eight Titanic notebooks. Two projects with a business question, a documented limitation and a recommendation.",
    author: "Ikechukwu Emeka",
    date: "14 Jul 2026",
    readTime: "8 min read",
    imageNote: "COVER · PORTFOLIO",
  },
  {
    id: "p7",
    category: "Python",
    title: "Every PivotTable move, rewritten as pandas groupby",
    excerpt:
      "A side-by-side translation table for Excel users making their first move into pandas, plus the three gotchas that cause panic.",
    author: "Chidi Balogun",
    date: "7 Jul 2026",
    readTime: "11 min read",
    imageNote: "COVER · PANDAS",
  },
  {
    id: "p8",
    category: "Student Spotlights",
    title: "From secondary school teacher to BI analyst in eleven months",
    excerpt:
      "Ngozi took Cohort 8 while teaching full-time. Her capstone on school attendance data got her the interview.",
    author: "LWi Team",
    date: "30 Jun 2026",
    readTime: "5 min read",
    imageNote: "COVER · SPOTLIGHT",
  },
  {
    id: "p9",
    category: "Industry Trends",
    title: "Do analysts need dbt in 2026? An honest answer.",
    excerpt:
      "The analytics engineering stack keeps expanding. What is genuinely load-bearing for a junior analyst, and what is resume theatre.",
    author: "Chidi Balogun",
    date: "23 Jun 2026",
    readTime: "9 min read",
    imageNote: "COVER · MODERN STACK",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "NA",
    name: "Ngozi Adeleke",
    role: "BI Analyst, HealthTrack",
    program: "Cohort Program",
    before: "Secondary school teacher",
    after: "BI Analyst",
    quote:
      "The capstone was the interview. I walked in with a school attendance dashboard, explained the grain problem I hit in week nine, and the hiring manager stopped asking screening questions.",
  },
  {
    initials: "TO",
    name: "Tunde Oyelaran",
    role: "Data Analyst, Paystack-adjacent fintech",
    program: "Cohort Program",
    before: "Bank operations officer",
    after: "Data Analyst",
    quote:
      "I had used Excel for six years and thought I was good. Week three broke that comfortably. By week eight I was writing CTEs against production replicas at work.",
  },
  {
    initials: "AM",
    name: "Amaka Mbeki",
    role: "Reporting Lead, LogiFleet",
    program: "Private 1-on-1",
    before: "Manual monthly reports",
    after: "Automated pipeline",
    quote:
      "Six private sessions on Power Query. Month-end went from three days of copy-paste to a refresh button. That alone paid for the whole thing.",
  },
  {
    initials: "SK",
    name: "Samuel Kalu",
    role: "Analytics Engineer, Sabi",
    program: "Mentorship",
    before: "40 applications, 0 offers",
    after: "Two competing offers",
    quote:
      "My skills were fine. My portfolio read like coursework. The teardown session rebuilt both projects around business outcomes and the callbacks started within two weeks.",
  },
  {
    initials: "FO",
    name: "Funmi Okonjo",
    role: "FP&A Manager, Ardova",
    program: "Corporate Training",
    before: "Four-day month-end",
    after: "Same-day close reporting",
    quote:
      'They trained on our actual schema, not a sample database. The metric dictionary workshop ended a two-year argument about what counts as an active account.',
  },
  {
    initials: "DE",
    name: "David Eze",
    role: "Product Analyst, Moniepoint-scale startup",
    program: "Workshops",
    before: "Dashboard-curious PM",
    after: "Ships own reports",
    quote:
      "Dashboard in a Day did exactly what it says. I left with a working three-page report and stopped filing tickets for numbers I could pull myself.",
  },
  {
    initials: "BA",
    name: "Blessing Aluko",
    role: "Junior Data Analyst, Renmoney",
    program: "Cohort Program",
    before: "Unemployed graduate",
    after: "Junior Data Analyst",
    quote:
      "The weekly graded deliverables were brutal and exactly what I needed. Nobody let me hand in an unlabelled chart twice.",
  },
  {
    initials: "KI",
    name: "Kemi Ige",
    role: "Parent of two LWi Kids graduates",
    program: "Kids Program",
    before: "Chart-shy 11-year-old",
    after: "Won her science fair",
    quote:
      "My daughter presented rainfall data at showcase day with a claim and evidence. Her science fair project the next term used the same structure and won.",
  },
];

export const ARTICLE: Article = {
  id: "p1",
  category: "SQL Tutorials",
  title: "Window functions are the SQL skill that gets you promoted",
  author: "Ikechukwu Emeka",
  date: "18 August 2026",
  readTime: "9 min read",
  body: [
    {
      isParagraph: true,
      text: "Most analysts stop learning SQL the moment GROUP BY stops throwing errors. That is exactly the point where the interesting questions start, running totals, rankings within a category, comparisons against the previous period, and GROUP BY quietly cannot answer any of them without collapsing rows you still need.",
    },
    {
      isHeading: true,
      text: "The problem GROUP BY cannot solve",
    },
    {
      isParagraph: true,
      text: "Say a sales manager asks for each region's top three products by revenue, alongside every individual transaction. A GROUP BY aggregates the rows away, you lose the transaction grain the moment you collapse to region and product. A window function keeps every row and adds a calculation computed across a related set of rows, which is precisely the shape most real requests take.",
    },
    {
      isQuote: true,
      text: "A window function does not reduce your rows. It adds a lens over them.",
    },
    {
      isHeading: true,
      text: "RANK, LAG and running totals",
    },
    {
      isParagraph: true,
      text: "Three patterns cover most of what shows up in a reporting job: ranking within a partition, comparing a row to the one before it, and accumulating a total as you move through ordered rows. Once these are automatic, most 'clever' analytics requests turn out to be a five-line query.",
    },
    {
      isCode: true,
      text: "SELECT\n  region,\n  product,\n  revenue,\n  RANK() OVER (\n    PARTITION BY region\n    ORDER BY revenue DESC\n  ) AS revenue_rank\nFROM sales;",
    },
    {
      isParagraph: true,
      text: "RANK() PARTITION BY region resets the ranking for every region, so you get a clean top-N per region without a self-join or a subquery per group. Swap RANK for ROW_NUMBER when ties should not share a rank, or DENSE_RANK when a tie should not skip the next number.",
    },
    {
      isHeading: true,
      text: "Comparing a row to the one before it",
    },
    {
      isParagraph: true,
      text: "LAG and LEAD let you reach into an adjacent row without a self-join. Month-over-month change, day-over-day churn, or the gap between a customer's consecutive orders are all one LAG call ordered correctly within a partition.",
    },
    {
      isCode: true,
      text: "SELECT\n  month,\n  revenue,\n  revenue - LAG(revenue) OVER (ORDER BY month) AS mom_change\nFROM monthly_revenue;",
    },
    {
      isHeading: true,
      text: "Why this gets you promoted",
    },
    {
      isParagraph: true,
      text: "The analysts who get pulled into harder problems are the ones whose queries do not need three CTEs and a spreadsheet pivot to answer a ranking or trend question. Window functions collapse that entire workflow into the query itself, and a query that answers the question directly, in one read, is the kind of work that gets noticed in a code review.",
    },
  ],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "healthtrack-attendance",
    category: "Cohort Capstone",
    title: "A school attendance dashboard that became a job offer",
    client: "Ngozi Adeleke, Cohort 8 graduate",
    program: "Data Analytics Cohort Program",
    summary:
      "A capstone project analysing three years of school attendance records, cleaned, modelled and shipped as a Power BI dashboard that ended up carrying the interview.",
    challenge:
      "Raw attendance registers arrived as inconsistent monthly spreadsheets, duplicated student IDs, and no shared definition of a chronic absence.",
    approach:
      "Profiled and reconciled the source files in Power Query, built a star schema with a clean student dimension, and defined a single chronic-absence metric the whole model could trust.",
    tools: ["Power Query", "Power BI", "DAX", "Star schema"],
    results: [
      { label: "Data sources reconciled", value: "14" },
      { label: "Dashboard build time", value: "3 weeks" },
      { label: "Outcome", value: "Hired as BI Analyst" },
    ],
    imageNote: "CASE STUDY - ATTENDANCE DASHBOARD",
  },
  {
    id: "logifleet-power-query",
    category: "Private 1-on-1",
    title: "Turning a three-day month-end into a refresh button",
    client: "Amaka Mbeki, Reporting Lead at LogiFleet",
    program: "Private 1-on-1 Classes",
    summary:
      "Six private sessions rebuilt a manual monthly reporting ritual into a single refreshable Power Query pipeline pulling from five source systems.",
    challenge:
      "Every month-end meant three full days of copy-pasting exports from five separate systems into one master workbook, with no audit trail.",
    approach:
      "Mapped every source file's shape, built parameterised queries per system, and merged them into one governed pipeline with documented transformation steps.",
    tools: ["Power Query", "M", "Excel", "Data modelling"],
    results: [
      { label: "Month-end time", value: "3 days to 20 min" },
      { label: "Source systems unified", value: "5" },
      { label: "Sessions delivered", value: "6" },
    ],
    imageNote: "CASE STUDY - REPORTING PIPELINE",
  },
  {
    id: "ardova-metric-dictionary",
    category: "Corporate Training",
    title: "Ending a two-year argument over what counts as active",
    client: "Funmi Okonjo, FP&A Manager at Ardova",
    program: "Corporate Training",
    summary:
      "A six-week engagement trained Ardova's reporting team on their own schema and produced a shared metric dictionary that finally settled a long-running definitional dispute.",
    challenge:
      "Finance and marketing had been reporting two different active-account numbers for two years, each defensible, neither reconcilable with the other.",
    approach:
      "Ran a discovery workshop to trace both definitions to their source tables, then facilitated a metric dictionary workshop that produced one documented, agreed definition.",
    tools: ["SQL", "Power BI", "Governance", "DAX"],
    results: [
      { label: "Reporting hours saved", value: "42% monthly" },
      { label: "Team members trained", value: "18" },
      { label: "Metric definitions agreed", value: "1 dictionary" },
    ],
    imageNote: "CASE STUDY - METRIC DICTIONARY",
  },
  {
    id: "sabi-portfolio-teardown",
    category: "Mentorship",
    title: "From forty rejections to two competing offers",
    client: "Samuel Kalu, Analytics Engineer at Sabi",
    program: "Mentorship & Career Coaching",
    summary:
      "A portfolio teardown rebuilt two coursework-style projects into defensible business cases, and the callbacks started within two weeks.",
    challenge:
      "Forty applications and zero offers despite genuinely solid SQL and modelling skills. The portfolio read like classroom exercises, not evidence.",
    approach:
      "Rewrote both projects around a business question, a documented limitation, and a clear recommendation, then rehearsed the story behind each decision.",
    tools: ["Portfolio strategy", "SQL interviews", "Positioning"],
    results: [
      { label: "Callback time", value: "2 weeks" },
      { label: "Competing offers", value: "2" },
      { label: "Projects rebuilt", value: "2" },
    ],
    imageNote: "CASE STUDY - PORTFOLIO REBUILD",
  },
];
