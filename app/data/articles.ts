/**
 * Blog publishing in V1 is deliberately code-managed (no CMS, login or database).
 * To publish: duplicate an article object, choose a unique URL-safe slug, then
 * write its sections. It will automatically appear in the index and sitemap.
 */
export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // YYYY-MM-DD
  displayDate: string;
  readingTime: number;
  accent: "mint" | "peach" | "lavender";
  artNumber: string;
  intro: string[];
  sections: ArticleSection[];
  conclusion: string;
}

export const articles: Article[] = [
  {
    slug: "mba-vs-pgdm-how-to-compare",
    title: "MBA vs PGDM: how to compare the options thoughtfully",
    description:
      "Look beyond the label. A practical way to compare management programs based on your goals, the institution and the learning experience.",
    category: "Choosing a program",
    date: "2026-10-22",
    displayDate: "22 October 2026",
    readingTime: 5,
    accent: "mint",
    artNumber: "01",
    intro: [
      "MBA and PGDM are two familiar labels in Indian management education. The better question is not simply which label sounds stronger, but whether a particular program fits your career direction, learning needs and circumstances.",
      "Instead of treating every MBA as equivalent or every PGDM as equivalent, examine the specific program you may join.",
    ],
    sections: [
      {
        heading: "Start with the institution, not the abbreviation",
        paragraphs: [
          "Understand who awards the qualification, what academic and regulatory recognition applies, and which body operates the program. Verify the current status through the institution and relevant official authorities rather than relying on promotional wording.",
          "Two programs with the same label can offer very different teaching, career support, student experiences and industry exposure.",
        ],
      },
      {
        heading: "Compare the things that will shape your experience",
        paragraphs: [
          "Create a simple comparison sheet for each institution you are seriously considering. A shortlist becomes more useful when you compare like-for-like information.",
        ],
        bullets: [
          "Curriculum: core subjects, electives, projects and the depth of specialisation options.",
          "Learning environment: class size, faculty accessibility, cases, labs and practical assignments.",
          "Career relevance: internships, role profiles, recruiters and independently verifiable outcome information.",
          "Costs: tuition, accommodation, other expenses and the financial commitment involved.",
          "Fit: location, admission requirements, peer environment and your own strengths.",
        ],
      },
      {
        heading: "Be precise when reviewing outcomes",
        paragraphs: [
          "Published placement information may summarise different kinds of roles, student populations or salary measures. Ask what a number represents, which batch it covers and how the underlying information is defined.",
          "The most useful question is whether the school regularly provides opportunities related to the kind of work you hope to do—not merely whether a headline number looks impressive.",
        ],
      },
      {
        heading: "Check your intended use of the qualification",
        paragraphs: [
          "If you have a specific future plan such as further study, professional eligibility or a particular employer requirement, verify that the exact qualification meets it. Recognition and equivalence can depend on the issuing institution, program and purpose.",
        ],
      },
    ],
    conclusion:
      "The right choice is the program you can explain and defend on its merits. A useful comparison replaces vague labels with verified information and personal fit.",
  },
  {
    slug: "questions-before-shortlisting-mba-colleges",
    title: "Seven questions to ask before shortlisting an MBA college",
    description:
      "A clearer checklist for comparing colleges without getting lost in rankings, advertisements or overwhelming lists.",
    category: "College shortlisting",
    date: "2026-10-22",
    displayDate: "22 October 2026",
    readingTime: 5,
    accent: "peach",
    artNumber: "02",
    intro: [
      "When every college has a brochure, a ranking claim and a long list of features, shortlisting can feel more complicated than it needs to be.",
      "These seven questions help you turn general information into a shortlist that reflects your own situation.",
    ],
    sections: [
      {
        heading: "1. What is my real objective?",
        paragraphs: [
          "Do you want to enter a particular field, change careers, build foundational business skills or explore options? You do not need a perfect answer, but you do need an initial direction.",
        ],
      },
      {
        heading: "2. Which programs am I actually eligible for?",
        paragraphs: [
          "Check the current eligibility criteria and admission route for the specific intake. Consider accepted entrance tests, academic conditions, application stages and deadlines.",
        ],
      },
      {
        heading: "3. What is the total financial commitment?",
        paragraphs: [
          "Look beyond advertised tuition fees. Include accommodation, living costs, travel, deposits and potential borrowing costs. Decide on a realistic range before building a long list.",
        ],
      },
      {
        heading: "4. What will I be learning and doing?",
        paragraphs: [
          "Review the curriculum and evidence of projects, internships, presentations, business cases and exposure to contemporary tools. Match this experience to the skills you want to build.",
        ],
      },
      {
        heading: "5. What kinds of roles do graduates move into?",
        paragraphs: [
          "Look at job functions and profiles, not only averages. Ask for recent, clearly defined information and note whether it applies to the exact campus, program and cohort you are evaluating.",
        ],
      },
      {
        heading: "6. Will the environment work for me?",
        paragraphs: [
          "Think about geography, language, cohort diversity, campus resources, learning style and support systems. An appropriate environment is not the same for every student.",
        ],
      },
      {
        heading: "7. What still needs independent verification?",
        paragraphs: [
          "Maintain a list of open questions about approvals, degree status, fees, refunds, outcomes and admission conditions. Confirm material details with primary sources before making payments or commitments.",
        ],
      },
    ],
    conclusion:
      "A useful shortlist is not necessarily a long shortlist. Begin with a few programs that meet your non-negotiable conditions, then investigate the differences that genuinely matter to you.",
  },
  {
    slug: "prepare-for-mba-pgdm-applications",
    title: "Getting ready to apply: a simple MBA & PGDM checklist",
    description:
      "A practical preparation guide covering your priorities, documents, timelines, applications and interviews.",
    category: "Application planning",
    date: "2026-10-22",
    displayDate: "22 October 2026",
    readingTime: 4,
    accent: "lavender",
    artNumber: "03",
    intro: [
      "Application season gets easier when you have a clear process. Planning early helps you avoid missed dates, rushed decisions and repeated work.",
      "Use this checklist as a starting point. Always verify the latest requirements for each college and admission cycle.",
    ],
    sections: [
      {
        heading: "Build a simple decision sheet",
        paragraphs: [
          "For each program, record why it interests you, the admission route, required tests, estimated cost, relevant dates and anything you still need to confirm.",
        ],
      },
      {
        heading: "Organise the documents you may need",
        paragraphs: [
          "The exact list varies, but preparing clean copies of your academic and identification records can make applications less stressful. Keep originals secure and share documents only through channels you have checked.",
        ],
        bullets: [
          "Academic marksheets and qualification records, where applicable.",
          "Entrance-exam score information, if required.",
          "Identity details and a suitable photograph, if requested.",
          "Employment or internship records, if relevant.",
          "A working email address and phone number for application communication.",
        ],
      },
      {
        heading: "Keep one reliable application calendar",
        paragraphs: [
          "Track opening dates, deadlines, fee-payment steps, selection rounds and document verification. Build a small buffer into your own timeline rather than depending on the final day.",
        ],
      },
      {
        heading: "Prepare to explain your motivation",
        paragraphs: [
          "Think through why you want to study management, why this is the right time, what you have learned so far and how a specific program fits your plans. These ideas are useful for interviews and for making your own decision.",
        ],
      },
      {
        heading: "Review before you submit",
        paragraphs: [
          "Check spellings, dates, uploaded files, program selection and the latest official instructions. Save confirmation details securely after submission. Never assume an enquiry or counselling conversation is itself an official application.",
        ],
      },
    ],
    conclusion:
      "A good application plan is practical and easy to maintain. Keep your information organised, ask specific questions and verify the details that matter before you commit.",
  },
];

export function findArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
