import { createClient } from './server'; // Ensure this is a server-side function

export const addCohort = async (cohortData: { title: string; topic: string; members: number }) => {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('cohorts')
    .insert([cohortData]);

  if (error) {
    console.error('Error adding cohort:', error);
    throw new Error('Could not add cohort');
  }

  return data;
}; 