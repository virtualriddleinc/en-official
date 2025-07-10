"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  useDroppable
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const DndContext = dynamic(
  () => import('@dnd-kit/core').then((mod) => mod.DndContext),
  { ssr: false }
);

const DragOverlay = dynamic(
  () => import('@dnd-kit/core').then((mod) => mod.DragOverlay),
  { ssr: false }
);

type Issue = {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  type: 'bug' | 'feature' | 'task';
  assignee: string;
};

type Column = {
  id: string;
  title: string;
  issues: Issue[];
};

function DroppableColumn({ column, children, isMobile }: { column: Column; children: React.ReactNode; isMobile: boolean }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
    disabled: isMobile, // Mobil cihazlarda drag & drop devre dışı
  });

  const getColumnStyle = (columnId: string) => {
    switch (columnId) {
      case 'backlog':
        return 'bg-[#F8F9FA]'; // Çok açık gri
      case 'inProgress':
        return 'bg-[#EBF5FF]'; // Açık mavi
      case 'done':
        return 'bg-[#ECFDF3]'; // Açık yeşil
      default:
        return 'bg-[#F8F9FA]';
    }
  };

  const getColumnHeaderStyle = (columnId: string) => {
    switch (columnId) {
      case 'backlog':
        return 'text-black bg-[#F1F2F4] border border-gray-200';
      case 'inProgress':
        return 'text-black bg-[#E3EFFF] border border-blue-200';
      case 'done':
        return 'text-black bg-[#E3FBF1] border border-green-200';
      default:
        return 'text-black bg-[#F1F2F4] border border-gray-200';
    }
  };

  return (
    <div 
      ref={setNodeRef}
      className={`rounded-lg ${getColumnStyle(column.id)}`}
    >
      <h3 className={`px-4 py-3.5 kanban-title flex items-center justify-between rounded-t-lg ${getColumnHeaderStyle(column.id)}`}>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <span className="flex items-center">
              {column.id === 'backlog' && (
                <svg className="icon-sm icon-on-light mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              )}
              {column.id === 'inProgress' && (
                <svg className="icon-sm icon-on-light mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {column.id === 'done' && (
                <svg className="icon-sm icon-on-light mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {column.title}
            </span>
          </div>
        </div>
        <span className="flex items-center justify-center min-w-[28px] h-7 px-2 bg-white rounded-full text-small font-medium shadow-sm border border-gray-100">
          {column.issues.length}
        </span>
      </h3>
      <SortableContext
        items={column.issues.map(issue => issue.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="p-4 space-y-4 min-h-[500px]">
          {children}
        </div>
      </SortableContext>
    </div>
  );
}

function SortableIssue({ issue, columnId, isMobile }: { issue: Issue; columnId: string; isMobile: boolean }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ 
    id: issue.id,
    disabled: isMobile, // Mobil cihazlarda drag & drop devre dışı
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-[#DC2626] text-white'; // Daha koyu kırmızı
      case 'medium': return 'bg-[#D97706] text-white'; // Daha koyu turuncu
      case 'low': return 'bg-[#059669] text-white'; // Daha koyu yeşil
      default: return 'bg-[#374151] text-white'; // Daha koyu gri
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'bug': return 'bg-[#B91C1C] text-white'; // Daha koyu kırmızı
      case 'feature': return 'bg-[#1D4ED8] text-white'; // Daha koyu mavi
      case 'task': return 'bg-[#6D28D9] text-white'; // Daha koyu mor
      default: return 'bg-[#374151] text-white'; // Daha koyu gri
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(isMobile ? {} : { ...attributes, ...listeners })} // Mobil cihazlarda drag & drop özelliklerini kaldır
      className={`bg-white p-4 rounded-lg border border-gray-200 shadow-sm ${isMobile ? '' : 'cursor-move'}`}
    >
      <h4 className="kanban-card-title text-[#172B4D] mb-2">
        {issue.title}
      </h4>
      <p className="kanban-card-description text-[#42526E] mb-3">
        {issue.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`kanban-tag px-2.5 py-1 rounded-full ${getPriorityColor(issue.priority)}`}>
          {issue.priority}
        </span>
        <span className={`kanban-tag px-2.5 py-1 rounded-full ${getTypeColor(issue.type)}`}>
          {issue.type}
        </span>
      </div>
      <div className="flex items-center kanban-card-description text-[#42526E]">
        <div className="w-7 h-7 rounded-full bg-[#EBF5FF] flex items-center justify-center font-medium text-small mr-2 text-blue-700 border border-blue-100">
          {issue.assignee.split(' ').map(n => n[0]).join('')}
        </div>
        {issue.assignee}
      </div>
    </div>
  );
}

export default function KanbanBoard() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Mobil cihaz kontrolü
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [columns, setColumns] = useState<{ [key: string]: Column }>({
    backlog: {
      id: 'backlog',
      title: 'Yapılacak',
      issues: [
        {
          id: '1',
          title: 'CI/CD Pipeline Optimizasyonu',
          description: 'Jenkins pipeline\'ları optimize edilecek',
          priority: 'high',
          type: 'task',
          assignee: 'Ahmet Y.'
        },
        {
          id: '2',
          title: 'Kubernetes Cluster Hatası',
          description: 'Pod scheduling sorunları giderilecek',
          priority: 'high',
          type: 'bug',
          assignee: 'Mehmet K.'
        }
      ]
    },
    inProgress: {
      id: 'inProgress',
      title: 'Devam Eden',
      issues: [
        {
          id: '3',
          title: 'AWS Cost Optimization',
          description: 'Bulut maliyetlerinin optimize edilmesi',
          priority: 'medium',
          type: 'task',
          assignee: 'Zeynep D.'
        },
        {
          id: '4',
          title: 'Monitoring Dashboard',
          description: 'Grafana dashboard güncellenmesi',
          priority: 'low',
          type: 'feature',
          assignee: 'Ali R.'
        }
      ]
    },
    done: {
      id: 'done',
      title: 'Tamamlandı',
      issues: [
        {
          id: '5',
          title: 'SSL Sertifika Yenileme',
          description: 'Wildcard sertifikalarının yenilenmesi',
          priority: 'high',
          type: 'task',
          assignee: 'Ayşe K.'
        }
      ]
    }
  });

  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Mobil cihazlarda yanlışlıkla tetiklenmeyi önlemek için
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    if (isMobile) return; // Mobil cihazlarda drag başlatma
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (isMobile) return; // Mobil cihazlarda drag işlemi yapma
    
    const { active, over } = event;
    
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    
    // Find source column and issue
    let sourceColumnId = '';
    let sourceIssue: Issue | null = null;
    
    Object.entries(columns).forEach(([columnId, column]) => {
      const issue = column.issues.find(issue => issue.id === activeId);
      if (issue) {
        sourceColumnId = columnId;
        sourceIssue = issue;
      }
    });

    if (!sourceIssue) return;

    // Find destination column
    let destinationColumnId = overId.toString();

    // If dropping on an issue, find its column
    if (!Object.keys(columns).includes(destinationColumnId)) {
      Object.entries(columns).forEach(([columnId, column]) => {
        if (column.issues.some(issue => issue.id === overId)) {
          destinationColumnId = columnId;
        }
      });
    }

    // Only allow moves between Yapılacak and Devam Eden, or from either to Tamamlandı
    const isValidMove = (
      // Yapılacak <-> Devam Eden
      (sourceColumnId === 'backlog' && destinationColumnId === 'inProgress') ||
      (sourceColumnId === 'inProgress' && destinationColumnId === 'backlog') ||
      // To Tamamlandı
      (destinationColumnId === 'done')
    );

    if (!isValidMove) return;

    // Update columns
    const newColumns = { ...columns };

    // Remove from source
    newColumns[sourceColumnId] = {
      ...newColumns[sourceColumnId],
      issues: newColumns[sourceColumnId].issues.filter(issue => issue.id !== activeId)
    };

    // Add to destination
    newColumns[destinationColumnId] = {
      ...newColumns[destinationColumnId],
      issues: [...newColumns[destinationColumnId].issues, sourceIssue]
    };

    setColumns(newColumns);
    setActiveId(null);
  };

  if (!isClient) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Proje Yönetimi</h2>
            <p className="text-xl text-gray-300">
              Tüm projelerinizi ve görevlerinizi tek bir yerden yönetin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
              <div className="space-y-3">
                <div className="h-20 bg-gray-200 rounded"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
              <div className="space-y-3">
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
              <div className="space-y-3">
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="bg-blue-50 text-blue-600 text-small font-medium px-3 py-1.5 rounded-full">
              Proje Yönetimi
            </span>
          </div>
          <h2 className="h2 mb-4">
            Görevlerinizi Kolayca Yönetin
          </h2>
          <p className="subtitle text-[#42526E] max-w-2xl mx-auto">
            Projelerinizi planlamak, takip etmek ve tamamlamak için modern ve kullanıcı dostu arayüz
            {isMobile && (
              <span className="block mt-2 text-sm text-gray-500">
                Mobil cihazlarda sadece görüntüleme modu
              </span>
            )}
          </p>
        </div>
        
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(columns).map(([columnId, column]) => (
              <DroppableColumn key={columnId} column={column} isMobile={isMobile}>
                {column.issues.map((issue) => (
                  <SortableIssue key={issue.id} issue={issue} columnId={columnId} isMobile={isMobile} />
                ))}
              </DroppableColumn>
            ))}
          </div>

          <DragOverlay>
            {activeId && !isMobile ? (
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-lg">
                <span className="kanban-card-title">
                  {Object.values(columns).map(column => 
                    column.issues.find(issue => issue.id === activeId)
                  ).filter(Boolean)[0]?.title}
                </span>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </section>
  );
} 