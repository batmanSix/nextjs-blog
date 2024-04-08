'use client';

import { useTheme } from 'next-themes';

import { WEBSITE } from '@/constants';
import { cn } from '@/lib/utils';

export const IconLogokangbo = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLImageElement>) => {
  const { resolvedTheme } = useTheme();

  return (
    <img
      {...props}
      src={
        resolvedTheme === 'dark'
          ? '/images/kangbo-light.svg'
          : '/images/kangbo-dark.svg'
      }
      className={cn('w-6 h-6', className)}
      alt={WEBSITE}
    />
  );
};
