import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const email = body.email || '';
  const password = body.password || '';

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    user: {
      id: 'demo-user-1',
      name: 'Maya Chen',
      email,
      role: 'student',
    },
    redirect: '/dashboard',
  });
}
