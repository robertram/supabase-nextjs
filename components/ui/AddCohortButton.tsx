'use client'
import React from 'react'

const AddCohortButton: React.FC = () => {
  const handleAddCohort = async () => {
    const title = prompt('Enter cohort title:')
    const topic = prompt('Enter cohort topic:')
    const members = parseInt(prompt('Enter number of members:') || '0', 10)

    if (title && topic && !isNaN(members)) {
      try {
        const response = await fetch('/api/cohorts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, topic, members }),
        })
        const data = await response.json()
        console.log('New cohort added:', data)
      } catch (error) {
        console.error('Error adding cohort:', error)
      }
    } else {
      alert('Please fill in all fields correctly.')
    }
  }

  return (
    <button
      onClick={handleAddCohort}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
    >
      Add New Cohort
    </button>
  )
}

export default AddCohortButton
