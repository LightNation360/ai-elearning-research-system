import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="page-shell">
      <div className="login-panel">
        <h2>Welcome back</h2>
        <p>Access your learning dashboard and research workspace.</p>

        <form action="/dashboard">
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" defaultValue="student@neurolearn.ai" />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" defaultValue="Demo123!" />
          </div>

          <div className="cta-row" style={{ marginTop: '20px' }}>
            <Link href="/dashboard" className="primary-btn">Sign in</Link>
            <Link href="/" className="secondary-btn">Back home</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
