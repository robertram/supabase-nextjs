import { createClient } from './server'; // Ensure this is a server-side function

export const deleteCohort = async (id: number) => {
  const supabase = await createClient();

  console.log('trying delete', id)
  
  const { data, error } = await supabase
    .from('cohorts')
    .delete()
    .eq('id', id);

console.log('error', error)

  if (error) {
    console.error('Error deleting cohort:', error);
    throw new Error('Could not delete cohort');
  }

  return data;
}; 