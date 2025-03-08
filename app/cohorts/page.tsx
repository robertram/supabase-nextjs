import { createClient } from '@/utils/supabase/server'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"
import AddCohortButton from '@/components/ui/AddCohortButton'
// import { useState } from 'react';
import DeleteCohortButton from '@/components/ui/DeleteCohortButton';

export default async function Page() {
  const supabase = await createClient()
  const { data: cohorts } = await supabase.from('cohorts').select()
  // const [cohortList, setCohortList] = useState(cohorts);

  // const handleDeleteCohort = (id: number) => {
  //   setCohortList(cohortList.filter(cohort => cohort.id !== id));
  // };

  return (
    <div>
      <AddCohortButton />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cohorts?.map(cohort => (
          <Card
            key={cohort.id}
            className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${cohort.borderColor} border`}
          >
            <CardHeader className={`${cohort.color}`}>
              <CardTitle className="text-xl">{cohort.title}</CardTitle>
              <CardDescription>
                <Badge variant="outline" className={`mt-2 ${cohort.textColor}`}>
                  {cohort.topic}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Learn and collaborate with peers in this structured educational program.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t p-4">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-muted-foreground" />
                <span className="text-sm font-medium">{cohort.members} members</span>
              </div>
              <div className="flex gap-2">
                <DeleteCohortButton cohortId={cohort.id} 
                //onDelete={handleDeleteCohort} 
                />
                <Badge variant="secondary">Active</Badge>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
