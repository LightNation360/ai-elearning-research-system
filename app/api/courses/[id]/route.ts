import { NextResponse } from 'next/server';
import { courses, getCourseById } from '@/lib/data';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const course = getCourseById(params.id);

  if (!course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  return NextResponse.json(course);
}
