import { NextResponse } from 'next/server';
import { getTutorReply } from '@/lib/ai';

export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message || 'Please help me plan my study session.';

  return NextResponse.json({
    reply: getTutorReply(message),
    timestamp: new Date().toISOString(),
  });
}
