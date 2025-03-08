'use client'
import React from 'react';

interface DeleteCohortButtonProps {
  cohortId: number;
  onDelete?: (id: number) => void;
}

const DeleteCohortButton: React.FC<DeleteCohortButtonProps> = ({ cohortId, onDelete }) => {
  const handleDelete = async () => {
    const response = await fetch(`/api/cohort-delete`, {
      method: 'DELETE',
      body: JSON.stringify({ id: cohortId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log('Cohort deleted successfully');
      onDelete && onDelete(cohortId);
    } else {
      console.error('Failed to delete cohort:', await response.json());
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500">
      Delete
    </button>
  );
};

export default DeleteCohortButton; 