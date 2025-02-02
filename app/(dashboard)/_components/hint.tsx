import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import React from 'react';

export interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  sideOffSet?: number;
  alignOffSet?: number;
}

export const Hint = ({
  label,
  children,
  side,
  align,
  sideOffSet,
  alignOffSet,
}: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className='text-white bg-black border border-black rounded-sm px-2'
          side={side}
          align={align}
          sideOffset={sideOffSet}
          alignOffset={alignOffSet}>
          <p className='font-semibold capitalize'>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
