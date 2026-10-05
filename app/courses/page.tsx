import Link from 'next/link';
import { courses } from '@/lib/data';

export default function CoursesPage() {
  return (
    <div className="page-shell">
      <h2>Course catalog</h2>
      <p>Explore pathways designed for adaptive learning and measurable outcomes.</p>

      <div className="topbar">
        <input className="search-box" placeholder="Search courses, topics, or skills" />
        <Link href="/dashboard" className="secondary-btn">Open dashboard</Link>
      </div>

      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="cover" />
            <div className="course-body">
              <div className="meta-row">
                {course.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>{course.level}</span>
                <span>{course.lessons} lessons</span>
              </div>
              <div className="cta-row" style={{ marginTop: '18px' }}>
                <Link href={`/courses/${course.id}`} className="primary-btn">View details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
