import { NextResponse } from 'next/server';
import { researchProjects } from '@/lib/data';

export async function GET() {
  return NextResponse.json(researchProjects);
}
