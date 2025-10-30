import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log CSP violation for monitoring (development only)
    if (process.env.NODE_ENV === 'development') {
      console.log('CSP Violation:', {
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get('user-agent'),
        violation: body,
      });
    }
    
    // Return success response
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('CSP Violation API Error:', error);
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
