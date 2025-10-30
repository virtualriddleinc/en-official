"use client";

import dynamic from 'next/dynamic';

// Lazy load the entire KanbanBoard component
const KanbanBoardContent = dynamic(() => import('./KanbanBoardContent'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Kanban Board...</p>
      </div>
    </div>
  )
});

export default function KanbanBoardWrapper() {
  return <KanbanBoardContent />;
}

