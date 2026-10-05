export const studentProfile = {
  name: 'Maya Chen',
  role: 'AI Research Student',
  goal: 'Master data science and research methods.',
};

export const courses = [
  {
    id: 'ai-fundamentals',
    title: 'AI Fundamentals for Product Teams',
    description: 'Understand machine learning workflows, model evaluation, and real-world business use cases.',
    level: 'Beginner',
    lessons: 12,
    instructor: 'Dr. Helena Morris',
    tags: ['AI', 'Product', 'Machine Learning'],
    modules: [
      {
        title: 'Foundation Models',
        lessons: [
          { title: 'What is AI?', duration: '8 min' },
          { title: 'Model life cycle', duration: '12 min' },
          { title: 'AI in business', duration: '14 min' },
        ],
      },
      {
        title: 'Evaluation',
        lessons: [
          { title: 'Metrics and loss', duration: '10 min' },
          { title: 'Debugging models', duration: '15 min' },
        ],
      },
    ],
  },
  {
    id: 'research-methods',
    title: 'Research Methods & Design Thinking',
    description: 'Learn how to structure experiments, collect evidence, and turn insight into action.',
    level: 'Intermediate',
    lessons: 15,
    instructor: 'Prof. Nia Baxter',
    tags: ['Research', 'Design', 'Experimentation'],
    modules: [
      {
        title: 'Research Planning',
        lessons: [
          { title: 'Research question design', duration: '11 min' },
          { title: 'Hypothesis framing', duration: '9 min' },
        ],
      },
      {
        title: 'Evidence',
        lessons: [
          { title: 'Data collection', duration: '13 min' },
          { title: 'Bias and validity', duration: '16 min' },
        ],
      },
    ],
  },
  {
    id: 'data-storytelling',
    title: 'Data Storytelling & Insights',
    description: 'Communicate complex ideas clearly with analytics, narrative, and measurable outcomes.',
    level: 'Intermediate',
    lessons: 10,
    instructor: 'Sarah Kim',
    tags: ['Analytics', 'Communication', 'Insights'],
    modules: [
      {
        title: 'Narrative',
        lessons: [
          { title: 'Story framing', duration: '7 min' },
          { title: 'Context and tension', duration: '10 min' },
        ],
      },
      {
        title: 'Visualization',
        lessons: [
          { title: 'Charts that explain', duration: '12 min' },
          { title: 'Presenting with clarity', duration: '15 min' },
        ],
      },
    ],
  },
];

export function getCourseById(id: string) {
  return courses.find((course) => course.id === id);
}

export const dashboardMetrics = [
  { label: 'Learning streak', value: '18 days' },
  { label: 'Progress', value: '83%' },
  { label: 'Quiz accuracy', value: '92%' },
  { label: 'Skill growth', value: '+26%' },
];

export const adminMetrics = [
  { label: 'Total learners', value: '24.8k' },
  { label: 'Avg. completion', value: '87%' },
  { label: 'Revenue', value: '$148k' },
  { label: 'AI engagement', value: '94%' },
];

export const researchProjects = [
  {
    id: 'ai-pedagogy',
    title: 'AI Pedagogy Research',
    summary: 'Applying adaptive prompting to improve skill acquisition and retention in blended learning.',
    status: 'Active',
    papers: 12,
    tags: ['Learning design', 'AI', 'Pedagogy'],
  },
  {
    id: 'human-feedback',
    title: 'Human Feedback Loops',
    summary: 'Studying how conversational feedback influences confidence and academic performance.',
    status: 'Reviewing',
    papers: 8,
    tags: ['Feedback', 'Behavior', 'UX'],
  },
  {
    id: 'knowledge-graphs',
    title: 'Knowledge Graph Learning',
    summary: 'Mapping conceptual relationships across modules to strengthen long-term memory.',
    status: 'Drafting',
    papers: 6,
    tags: ['Knowledge graph', 'Cognition', 'AI'],
  },
];
