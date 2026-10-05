import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">AI LEARNING + RESEARCH PLATFORM</span>
          <h1>Build smarter learning journeys with adaptive AI.</h1>
          <p>
            NeuroLearn AI helps students master skills faster, gives instructors real-time insight,
            and supports research teams with summaries, citations, and collaborative reasoning.
          </p>

          <div className="cta-row">
            <Link href="/courses" className="primary-btn">Explore Courses</Link>
            <Link href="/login" className="secondary-btn">Sign In</Link>
          </div>

          <ul className="feature-pills">
            <li>Adaptive path</li>
            <li>AI tutor</li>
            <li>Research workspace</li>
            <li>Progress analytics</li>
          </ul>
        </div>

        <div className="hero-panel">
          <div className="stat-box large">
            <span>Completion uplift</span>
            <strong>+38%</strong>
            <small>after AI-personalized coaching</small>
          </div>
          <div className="stat-grid">
            <div className="stat-box">
              <span>Active learners</span>
              <strong>24.8K</strong>
            </div>
            <div className="stat-box">
              <span>Avg. score</span>
              <strong>91%</strong>
            </div>
          </div>
          <div className="mini-chart">
            <div className="bar bar-1" />
            <div className="bar bar-2" />
            <div className="bar bar-3" />
            <div className="bar bar-4" />
            <div className="bar bar-5" />
            <div className="bar bar-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
