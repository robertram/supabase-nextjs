import { NextResponse } from 'next/server'
import { deleteCohort } from '@/utils/supabase/deleteCohort'

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    console.log('Received ID for deletion:', id);
    await deleteCohort(id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting cohort:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
} 