import { researchProjects } from '@/lib/data';

export default function ResearchPage() {
  return (
    <div className="page-shell">
      <h2>Research workspace</h2>
      <p>Track papers, literature summaries, experiments, and collaborative insights in one place.</p>

      <div className="research-grid">
        {researchProjects.map((project) => (
          <div key={project.id} className="card">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <div className="meta-row">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="course-meta" style={{ marginTop: '14px' }}>
              <span>{project.papers} papers</span>
              <span>{project.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
