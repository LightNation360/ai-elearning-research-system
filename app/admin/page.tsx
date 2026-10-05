import { adminMetrics } from '@/lib/data';

export default function AdminPage() {
  return (
    <div className="page-shell">
      <h2>Admin control center</h2>
      <p>Monitor platform health, engagement, revenue, and AI-system performance.</p>

      <div className="kh-grid">
        {adminMetrics.map((metric) => (
          <div key={metric.label} className="kpi">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="grid" style={{ marginTop: '28px' }}>
        <div className="card">
          <h3>Top-performing courses</h3>
          <p>AI for Productivity</p>
          <p>Human-Centered Design</p>
          <p>Data Storytelling</p>
        </div>
        <div className="card">
          <h3>AI recommendations</h3>
          <p>Increase retention by targeting at-risk learners in week 3.</p>
          <p>Prioritize content quality review for 3 courses.</p>
        </div>
        <div className="card">
          <h3>Platform alerts</h3>
          <p>2 instructor onboarding tasks pending</p>
          <p>1 payment issue resolved</p>
        </div>
      </div>
    </div>
  );
}
