import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">NeuroLearn AI</Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/research">Research</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/login" className="secondary-btn">Login</Link>
        </nav>
      </div>
    </header>
  );
}
