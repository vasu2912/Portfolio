import { redis } from '@/lib/redis';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const views = await redis.incr('pageViews');
        return NextResponse.json({ views });
    } catch (error) {
        console.error('Error incrementing page views:', error);
        return NextResponse.json({ error: 'Failed to get page views' }, { status: 500 });
    }
} 