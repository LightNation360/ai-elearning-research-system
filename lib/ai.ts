export function getTutorReply(message: string) {
  const normalized = message.toLowerCase();

  if (normalized.includes('quiz') || normalized.includes('assessment')) {
    return 'Focus on conceptual understanding first, then test with mixed-format questions. Review the high-yield topics and revisit one example from each module.';
  }

  if (normalized.includes('research') || normalized.includes('paper')) {
    return 'Use a structured search: identify the problem, summarize the methods, compare findings, and then note the limitations and future research gaps.';
  }

  if (normalized.includes('study') || normalized.includes('plan')) {
    return 'Create a 3-part weekly plan: 1) concept review, 2) active recall drills, 3) practice application. Keep one synthesis note at the end of each session.';
  }

  if (normalized.includes('capstone') || normalized.includes('project')) {
    return 'Your capstone should combine a clear problem statement, baseline comparison, and measurable outcomes. Emphasize why your approach is better and what trade-offs remain.';
  }

  return 'I can help you prioritize learning goals, explain difficult concepts, recommend a revision plan, or turn research into actionable insights.';
}
