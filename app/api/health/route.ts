import { NextResponse } from 'next/server';
import { getTutorReply } from '@/lib/ai';

export async function GET() {
  return NextResponse.json({
    message: 'NeuroLearn AI API is online',
    version: '1.0.0',
    status: 'healthy',
  });
}
