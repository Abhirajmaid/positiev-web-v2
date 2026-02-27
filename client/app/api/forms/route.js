import { submitForm } from '@/lib/api';

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, ...data } = body;
    const res = await submitForm(type || 'contact', data);
    if (!res.ok) throw new Error('Submit failed');
    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
