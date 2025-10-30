"use client";

import { useState, useEffect } from 'react';

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

export default function KanbanBoardContent() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    
    checkMobile();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkMobile);
      }
    };
  }, []);

  const [columns, setColumns] = useState<{ [key: string]: Column }>({
    backlog: {
      id: 'backlog',
      title: 'To Do',
      issues: [
        {
          id: '1',
          title: 'CI/CD Pipeline Optimization',
          description: 'Optimize Jenkins pipelines',
          priority: 'high',
          type: 'task',
          assignee: 'John D.'
        },
        {
          id: '2',
          title: 'Kubernetes Cluster Issue',
          description: 'Fix pod scheduling issues',
          priority: 'high',
          type: 'bug',
          assignee: 'Sarah M.'
        }
      ]
    },
    inProgress: {
      id: 'inProgress',
      title: 'In Progress',
      issues: [
        {
          id: '3',
          title: 'AWS Cost Optimization',
          description: 'Optimize cloud costs',
          priority: 'medium',
          type: 'task',
          assignee: 'Michael R.'
        }
      ]
    },
    done: {
      id: 'done',
      title: 'Done',
      issues: [
        {
          id: '4',
          title: 'Docker Containerization',
          description: 'Containerize microservices',
          priority: 'low',
          type: 'task',
          assignee: 'Emily K.'
        }
      ]
    }
  });

  const getColumnStyle = (columnId: string) => {
    switch (columnId) {
      case 'backlog':
        return 'bg-[#F8F9FA]';
      case 'inProgress':
        return 'bg-[#EBF5FF]';
      case 'done':
        return 'bg-[#ECFDF3]';
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-[#DC2626] text-white';
      case 'medium': return 'bg-[#B45309] text-white';
      case 'low': return 'bg-[#047857] text-white';
      default: return 'bg-[#374151] text-white';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'bug':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'feature':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
        );
      case 'task':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Management</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Easily track your projects and collaborate with your team members. 
          {isMobile ? ' View mode on mobile devices.' : ' You can update statuses by dragging cards.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(columns).map((column) => (
          <div
            key={column.id}
            className={`rounded-xl border-2 border-dashed border-gray-300 ${getColumnStyle(column.id)}`}
          >
            <div className="p-4">
              <h3 className={`flex items-center justify-between text-lg font-semibold mb-4 px-3 py-2 rounded-lg ${getColumnHeaderStyle(column.id)}`}>
                <span className="flex items-center">
                  {column.id === 'done' && (
                    <svg className="icon-sm icon-on-light mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {column.title}
                </span>
                <span className="flex items-center justify-center min-w-[28px] h-7 px-2 bg-white rounded-full text-small font-medium shadow-sm border border-gray-100">
                  {column.issues.length}
                </span>
              </h3>
              
              <div className="space-y-4 min-h-[500px]">
                {column.issues.map((issue) => (
                  <div
                    key={issue.id}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">
                        {issue.title}
                      </h4>
                      <div className="flex items-center space-x-2 ml-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                          {issue.priority === 'high' ? 'High' : issue.priority === 'medium' ? 'Medium' : 'Low'}
                        </span>
                        <div className="text-gray-400">
                          {getTypeIcon(issue.type)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {issue.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        {issue.assignee}
                      </span>
                      <span className="capitalize">{issue.type}</span>
                    </div>
                  </div>
                ))}
                
                {column.issues.length === 0 && (
                  <div className="flex items-center justify-center h-32 text-gray-400">
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-sm">No tasks yet</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isMounted && isMobile && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-blue-900 mb-1">Mobile View</h4>
              <p className="text-sm text-blue-700">
                Drag-and-drop is disabled on mobile devices.
                For full functionality, please use the desktop version on desktop devices.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}