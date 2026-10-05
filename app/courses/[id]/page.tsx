import Link from 'next/link';
import { courses, getCourseById } from '@/lib/data';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = getCourseById(params.id) ?? courses[0];

  return (
    <div className="page-shell">
      <div className="detail-panel">
        <div className="meta-row">
          {course.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <h2 style={{ marginTop: '16px' }}>{course.title}</h2>
        <p>{course.description}</p>

        <div className="course-meta" style={{ marginTop: '18px' }}>
          <span>Instructor: {course.instructor}</span>
          <span>{course.level}</span>
          <span>{course.lessons} lessons</span>
        </div>

        <div className="cta-row" style={{ marginTop: '18px' }}>
          <Link href="/dashboard" className="primary-btn">Enroll Now</Link>
          <Link href="/courses" className="secondary-btn">Back to catalog</Link>
        </div>

        <div className="lesson-list">
          {course.modules.map((module) => (
            <div key={module.title} className="card">
              <h3>{module.title}</h3>
              {module.lessons.map((lesson) => (
                <div key={lesson.title} className="lesson-item">
                  <span>{lesson.title}</span>
                  <span>{lesson.duration}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
