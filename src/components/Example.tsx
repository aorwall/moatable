import React from 'react';
import { Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExampleProps {
  className?: string;
}

export function Example({ className }: ExampleProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Activity className="h-5 w-5" />
      <span>Example Component with Better DX</span>
    </div>
  );
}