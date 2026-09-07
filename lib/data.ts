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
  // { label: "Portfolio", href: "/portfolio" },

  { label: "Contact", href: "/contact" },
];



export const SERVICES: Service[] = [
  {
    id: "beginners",
    code: "DA-01",
    name: "Data Analysis for Beginners",
    duration: "3 weeks",
    priceFrom: "₦50,000",
    kicker: "A practical 3-week foundation in data analysis for absolute beginners.",
    blurb:
      "Data literacy, Excel, Power Query, databases and SQL, capped off with a real capstone project.",
    tools: ["Excel", "Power Query", "SQL", "Databases"],
    hero: "Three weeks from zero to a working capstone.",
    sub: "A practical, beginner-friendly path through data literacy, Excel and SQL, with a real capstone project to show for it.",
    overview:
      "Built for absolute beginners who want a solid, practical foundation in data analysis, not a wall of theory.",
    overviewLong:
      "You will start with how to think about data through data literacy and basic statistics, move into Excel for cleaning and analysing data, then take your first real steps into relational databases and SQL. Every week builds directly on the last, and the programme closes with a capstone project that puts everything together.",
    outcomes: [
      "Understand data and its sources, population and samples, and sampling techniques",
      "Recognise sampling distributions, outliers, and measures of central tendency",
      "Clean and analyse data in Excel using formulas, lookup functions and PivotTables",
      "Build a simple ETL flow with Power Query and assemble a dashboard in Excel",
      "Understand relational databases and database normalisation",
      "Write SQL using SELECT, FROM, WHERE, JOIN, ORDER BY and GROUP BY, aggregate functions, and CASE statements",
    ],
    structureKicker: "CURRICULUM",
    structureTitle: "Three weeks, module by module.",
    modules: [
      {
        meta: "WEEK 1",
        title: "Data Literacy & Basic Statistics",
        detail:
          "Understanding data and sources of data, population and samples, sampling and sampling techniques, sampling distributions and outliers, and measures of central tendency.",
      },
      {
        meta: "WEEK 2",
        title: "Excel for Data Analysis",
        detail:
          "Introduction to Excel, Excel formulas and data cleaning, data mining with lookup formulas, ETL with Power Query, Pivot Tables, and building dashboards with Excel.",
      },
      {
        meta: "WEEK 3",
        title: "Introduction to Databases & SQL",
        detail:
          "Relational databases, database normalisation, basic SQL syntax, SELECT, FROM, WHERE, JOIN, ORDER BY and GROUP BY, aggregate functions, and CASE statements.",
      },
      {
        meta: "CAPSTONE",
        title: "Capstone Project",
        detail:
          "An end-to-end beginner project applying data cleaning, Excel and SQL to a real dataset, from question to a documented result.",
      },
    ],
    audience: [
      {
        who: "Absolute beginners",
        why: "No prior experience with data or spreadsheets needed, just the willingness to practise every week.",
      },
      {
        who: "Career switchers exploring data",
        why: "A low-risk way to find out whether data analysis is the right direction before committing to a longer programme.",
      },
      {
        who: "Students and early-career professionals",
        why: "A practical foundation that reads well on a CV and prepares you for the Advanced course.",
      },
    ],
    pricingTitle: "One price, everything included.",
    pricing: [
      {
        tier: "FULL PROGRAMME",
        price: "₦50,000",
        note: "3 weeks · live online",
        features: [
          "3 weeks of live sessions",
          "All course materials",
          "Capstone project",
          "Certificate of completion",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need any experience to start?",
        a: "No. This programme is designed for absolute beginners, no prior data or spreadsheet experience is assumed.",
      },
      {
        q: "What software do I need?",
        a: "Microsoft Excel and a free database tool for the SQL week, both of which we will help you set up.",
      },
      {
        q: "Are the classes live?",
        a: "Yes, all classes are live and not prerecorded, so you can ask questions and get clarification in real time.",
      },
      {
        q: "Is there a certificate?",
        a: "Yes, you receive a certificate of completion after finishing the programme and capstone project.",
      },
    ],
    finalCta: "Build your data foundation in three weeks.",
    finalCtaSub: "Data literacy, Excel, and SQL, with a capstone project to show for it.",
    ctaLabel: "Enroll Now",
  },
  {
    id: "advanced",
    code: "DA-02",
    name: "Advanced Data Analysis Course",
    duration: "6 weeks",
    priceFrom: "₦150,000",
    kicker: "Intermediate to advanced SQL, Power BI dashboards, and Python for analysis.",
    blurb:
      "For learners ready to move beyond the fundamentals: advanced SQL, Power BI dashboards, and Python for data analysis and visualisation.",
    tools: ["SQL", "Power BI", "DAX", "Python", "Pandas"],
    hero: "Six weeks from the fundamentals to real analyst tooling.",
    sub: "Progress from intermediate to advanced SQL, build interactive Power BI dashboards, and learn to analyse and visualise data with Python.",
    overview:
      "For learners who already have the basics and are ready to work with the tools and techniques used in real-world data analysis.",
    overviewLong:
      "Across six weeks you will deepen your SQL with subqueries, CTEs, window functions and views, build interactive dashboards in Power BI including data modelling, transformation and DAX, then move into Python for analysis with NumPy, pandas, and visualisation using Matplotlib and Seaborn. The course closes with a capstone project.",
    outcomes: [
      "Write advanced SQL using subqueries, CTEs, window functions and views",
      "Model, transform and visualise data in Power BI, and write DAX measures",
      "Use Python data structures and algorithms for data analysis",
      "Work with NumPy for numerical computing and pandas for data manipulation and cleaning",
      "Visualise data with Matplotlib and Seaborn",
      "Bring SQL, Power BI and Python together in a capstone project",
    ],
    structureKicker: "CURRICULUM",
    structureTitle: "Six weeks, module by module.",
    modules: [
      {
        meta: "WEEKS 1-2",
        title: "Intermediate & Advanced SQL",
        detail: "Subqueries, CTEs, window functions, and SQL views.",
      },
      {
        meta: "WEEKS 3-4",
        title: "Power BI for Data Analysis",
        detail: "Data modelling, data transformation, data visualisation, and DAX.",
      },
      {
        meta: "WEEKS 5-6",
        title: "Data Analysis with Python",
        detail:
          "Introduction to Python, data structures and algorithms, introduction to NumPy, pandas for data manipulation and cleaning, and Matplotlib and Seaborn for data visualisation.",
      },
      {
        meta: "CAPSTONE",
        title: "Capstone Project",
        detail:
          "An end-to-end advanced project bringing SQL, Power BI and Python together into one analysis, from raw data to a visual, defensible result.",
      },
    ],
    audience: [
      {
        who: "Graduates of Data Analysis for Beginners",
        why: "The natural next step once you are comfortable with Excel and basic SQL.",
      },
      {
        who: "Analysts who want to go beyond spreadsheets",
        why: "You can already query and report, and want the deeper SQL, BI and Python skills real analyst roles ask for.",
      },
      {
        who: "Self-taught learners with gaps",
        why: "You have picked up tools here and there and want a structured six weeks that connects SQL, Power BI and Python properly.",
      },
    ],
    pricingTitle: "One price, everything included.",
    pricing: [
      {
        tier: "FULL PROGRAMME",
        price: "₦150,000",
        note: "6 weeks · live online",
        features: [
          "6 weeks of live sessions",
          "All course materials",
          "Capstone project",
          "Certificate of completion",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to take the Beginners course first?",
        a: "It is recommended but not required. You should already be comfortable with basic Excel and SQL, SELECT, WHERE, JOIN, GROUP BY, before starting.",
      },
      {
        q: "What software do I need?",
        a: "A computer that can run Power BI Desktop (Windows, or Windows via a virtual machine), plus Excel and a code editor for Python.",
      },
      {
        q: "Are sessions live?",
        a: "Yes, all classes are live, so you can ask questions and get clarification in real time.",
      },
      {
        q: "Is there a capstone project?",
        a: "Yes, the course closes with a capstone project that brings SQL, Power BI and Python together.",
      },
    ],
    finalCta: "Take your data skills from intermediate to advanced.",
    finalCtaSub: "Six weeks of SQL, Power BI and Python, with a capstone project to show for it.",
    ctaLabel: "Enroll Now",
  },
  {
    id: "stem",
    code: "ST-01",
    name: "STEM Tutoring",
    duration: "Flexible, ongoing",
    priceFrom: "Custom quote",
    kicker: "Personalised one-on-one tutoring in Mathematics, Physics, Chemistry, Biology, Statistics and Calculus.",
    blurb:
      "Give your child more than lessons. Give them confidence, with personalised one-on-one STEM tutoring.",
    tools: ["Mathematics", "Physics", "Chemistry", "Biology", "Statistics", "Calculus"],
    hero: "Give your child more than lessons. Give them confidence.",
    sub: "STEM becomes much easier with the right teacher, the right guidance, and enough room to ask questions.",
    overview:
      "Our qualified STEM tutors provide personalised learning support designed to help your ward understand difficult concepts, improve academically, and develop genuine confidence in STEM subjects.",
    overviewLong:
      "Every learner is different, and a classroom pace does not always fit. Our tutors work one-on-one with your child, adjusting explanations and pace to how they actually learn, across Mathematics, Physics, Chemistry, Biology, Statistics and Calculus.",
    outcomes: [
      "Understand difficult STEM concepts through explanations paced to your child",
      "Build genuine confidence in Mathematics, not just short-term exam recall",
      "Strengthen foundations in Physics, Chemistry and Biology",
      "Develop a working understanding of Statistics and Calculus",
      "Improve academic performance through consistent, personalised support",
    ],
    structureKicker: "SUBJECTS",
    structureTitle: "Every core STEM subject, one-on-one.",
    modules: [
      {
        meta: "SUBJECT",
        title: "Mathematics",
        detail: "Personalised support building fluency and confidence in core mathematics topics.",
      },
      {
        meta: "SUBJECT",
        title: "Physics",
        detail: "One-on-one guidance through mechanics, energy, and the core physics curriculum.",
      },
      {
        meta: "SUBJECT",
        title: "Chemistry",
        detail: "Support working through chemical concepts, equations and problem-solving.",
      },
      {
        meta: "SUBJECT",
        title: "Biology",
        detail: "Clear, patient explanations of biological systems and processes.",
      },
      {
        meta: "SUBJECT",
        title: "Statistics",
        detail: "Building a genuine understanding of statistical concepts, not just formulas.",
      },
      {
        meta: "SUBJECT",
        title: "Calculus",
        detail: "Working through calculus at a pace that builds real understanding.",
      },
    ],
    audience: [
      {
        who: "Parents of school-age children",
        why: "You want your child to understand STEM subjects deeply, not just memorise for the next test.",
      },
      {
        who: "Students preparing for exams",
        why: "Focused, one-on-one support on the specific topics standing between you and the grade you want.",
      },
      {
        who: "Learners who need a different explanation",
        why: "Sometimes the classroom pace does not fit. A patient, qualified tutor working one-on-one often does.",
      },
    ],
    pricingTitle: "Personalised pricing, based on your child's needs.",
    pricing: [
      {
        tier: "1-ON-1 TUTORING",
        price: "Custom quote",
        note: "Based on subject, level and session frequency",
        features: [
          "Qualified, subject-specialist tutors",
          "Personalised learning plan",
          "Flexible scheduling",
          "Regular progress feedback for parents",
        ],
      },
    ],
    faqs: [
      {
        q: "Which subjects do you cover?",
        a: "Mathematics, Physics, Chemistry, Biology, Statistics and Calculus, from foundational to advanced levels.",
      },
      {
        q: "Is tutoring one-on-one or group-based?",
        a: "Sessions are personalised and typically one-on-one, so pacing and explanations match your child's specific needs.",
      },
      {
        q: "How is pricing determined?",
        a: "Pricing depends on the subject, level, and how many sessions per week you need. Contact us for a quote tailored to your child.",
      },
      {
        q: "Can sessions be scheduled around school hours?",
        a: "Yes, scheduling is flexible and arranged directly with your tutor around school and family commitments.",
      },
    ],
    finalCta: "Give your child the confidence to succeed in STEM.",
    finalCtaSub: "Tell us the subject and level, and we will match a qualified tutor and share a personalised quote.",
    ctaLabel: "Request a Quote",
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

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "UO",
    name: "Ugo Confidence Odinaka",
    role: "Operations Executive & Digital Technology Teacher",
    program: "Data Analysis for Beginners, Cohort IV",
    image: "/ugo-confidence.jpeg",
    quote:
      "The Data Analysis for Beginners course has been a valuable and transformative learning experience for me. As a Digital Technology Teacher, acquiring practical SQL skills has strengthened my ability to teach students database concepts more effectively and confidently.\n\nIn my role as an Operations Executive, the knowledge and skills I gained have enhanced my ability to collect, organize, store, and query data using SQL. I can now analyze and interpret data more effectively, make better-informed decisions, and communicate data-driven insights with greater confidence.\n\nOverall, this course has significantly improved my technical and analytical capabilities and contributed meaningfully to my professional growth. I am grateful for the practical knowledge and experience gained throughout the programme, and I look forward to applying these skills to create greater impact in my professional roles.",
  },
  {
    initials: "CO",
    name: "Chukwuemeka Innocent Obidike",
    role: "CEO, Kairos",
    program: "Data Analysis for Beginners, Cohort IV",
    image: "/chukwuemeka.jpeg",
    quote:
      "Taking the Beginners class with Learn with Ikay was one of the best decisions I made this year. The course really helped me understand how data can be collected, analyzed, and interpreted to support better decision-making.\n\nI particularly enjoyed the part where SQL was used for data analysis, as it gave me practical knowledge of how to query, filter, organize, and extract useful information from a dataset.\n\nTo cap it all off, all the classes were live and not prerecorded. This meant that we could always ask questions and get clarification in real time.\n\nOverall, it was a great experience.",
  },
  {
    initials: "UE",
    name: "Ugo Sandra Ejimnkeonye",
    role: "Mathematics Teacher & Data Analysis Facilitator",
    program: "Data Analysis for Beginners, Cohort IV",
    image: "/ugo-sandra.jpeg",
    quote:
      "Taking the Data Analysis class has been a very valuable experience for me. Before the class, I had a basic understanding of data analysis, but the training gave me a much clearer and more practical understanding of how to work with data and turn it into meaningful insights.\n\nI particularly enjoyed the hands-on approach to learning tools such as Excel, Power Query, SQL, and data visualization. The classes were well-structured, engaging, and easy to follow, even when dealing with concepts that initially seemed challenging.\n\nThe knowledge I gained has not only improved my technical skills but has also opened me up to new opportunities in the data field. I have been able to apply what I learned to practical projects and even take on a role as a Data Analysis Facilitator, which is something I'm genuinely proud of.\n\nOverall, the class was a great investment in my personal and professional development. I'm grateful for the knowledge, guidance, and practical experience I gained throughout the training, and I would highly recommend the class to anyone looking to start or strengthen their journey in data analysis.",
  },
  {
    initials: "OC",
    name: "Ogochukwu Clavia",
    role: "Mom & Freelance Writer",
    program: "Data Analysis for Beginners, Cohort I",
    image: "/ogochukwu.jpeg",
    quote:
      "The platform helped me transition into data analysis when I was looking to return to my professional career after a hiatus due to motherhood. The structure and teaching style made learning easy and enjoyable.",
  },
  {
    initials: "AA",
    name: "Amaka Awaogu",
    role: "Data Quality Analyst, Citizen Housing (UK)",
    program: "Private 1-on-1 Classes and Mentorship",
    image: "/amaka.jpeg",
    quote:
      "My experience with Learn With iKay played an important role in developing the practical data skills that have supported my career. Before the training, SQL and Power BI felt quite technical and intimidating, but iKay explained them in a clear, patient, and practical way that made the concepts much easier to understand.\n\nThe sessions were not just about learning commands or creating visuals; they helped me understand how to interrogate data, identify patterns, and communicate findings clearly. Learning SQL gave me the confidence to query and investigate data, while Power BI helped me see how raw data could be transformed into meaningful insights for decision-making.\n\nToday, I work as a Data Quality Analyst, where understanding data, investigating quality issues, and communicating findings to stakeholders are central to my role. The foundation I gained through Learn With iKay has therefore had a genuine impact on my confidence, career development, and how I approach data in my day-to-day work.\n\nI would recommend Learn With iKay to anyone who wants practical, supportive training and a strong foundation for building a career in data.",
  },
];

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
