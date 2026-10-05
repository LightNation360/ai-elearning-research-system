import { NextResponse } from 'next/server';
import { adminMetrics, dashboardMetrics, studentProfile } from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    studentProfile,
    dashboardMetrics,
    adminMetrics,
  });
}
