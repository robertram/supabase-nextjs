import { NextResponse } from 'next/server'
import { addCohort } from '@/utils/supabase/addCohort'

export async function POST(req: Request) {
  try {
    const { title, topic, members } = await req.json()
    const newCohort = await addCohort({ title, topic, members })
    return NextResponse.json({ success: true, cohort: newCohort })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
