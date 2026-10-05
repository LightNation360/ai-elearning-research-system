import { dashboardMetrics, studentProfile } from '@/lib/data';

export default function DashboardPage() {
  return (
    <div className="page-shell">
      <h2>Learning dashboard</h2>
      <p>Track progress, skill growth, and AI-guided recommendations.</p>

      <div className="kh-grid">
        {dashboardMetrics.map((metric) => (
          <div key={metric.label} className="kpi">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="dash-layout">
        <aside className="sidebar">
          <h3>Student profile</h3>
          <div style={{ marginTop: '12px' }}>
            <strong>{studentProfile.name}</strong>
            <p>{studentProfile.role}</p>
            <p>{studentProfile.goal}</p>
          </div>

          <nav>
            <a href="#dashboard">Overview</a>
            <a href="#learning">Learning path</a>
            <a href="#research">Research board</a>
            <a href="#progress">Progress</a>
          </nav>
        </aside>

        <div className="main-content">
          <div className="tutor-box" id="dashboard">
            <h3>AI tutor</h3>
            <div className="chat-log">
              <div className="message ai">Your mastery in machine learning is strong. Focus on practical evaluation metrics and model interpretation next.</div>
              <div className="message user">What should I revise before my capstone?</div>
              <div className="message ai">Review experiment design, baseline comparison, and uncertainty estimation. I can generate a personalized study plan for you.</div>
            </div>
          </div>

          <div className="tutor-box" id="learning">
            <h3>Recommended next steps</h3>
            <div className="meta-row">
              <span className="tag">Deep learning fundamentals</span>
              <span className="tag">Evaluation metrics</span>
              <span className="tag">Research synthesis</span>
            </div>
          </div>

          <div className="tutor-box" id="progress">
            <h3>Skill radar</h3>
            <div className="mini-chart" style={{ height: '180px', marginTop: '10px' }}>
              <div className="bar bar-1" style={{ height: '52%' }} />
              <div className="bar bar-2" style={{ height: '60%' }} />
              <div className="bar bar-3" style={{ height: '72%' }} />
              <div className="bar bar-4" style={{ height: '88%' }} />
              <div className="bar bar-5" style={{ height: '78%' }} />
              <div className="bar bar-6" style={{ height: '92%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
