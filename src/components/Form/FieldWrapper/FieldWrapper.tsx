import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldWrapperProps = {
  label?: string;
  error?: string;
  description?: string;
  className?: string;
  children: ReactNode;
};
export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'children' | 'className'
>;
export const FieldWrapper: FC<FieldWrapperProps> = ({
  label,
  error,
  className,
  description,
  children,
}) => {
  return (
    <div>
      <label className={twMerge('block mb-1', className)}>
        {label}
        {children}
      </label>
      {description && <p className='text-gray-500'>{description}</p>}
      {error && (
        <div role='alert' className='text-red-500'>
          {error}
        </div>
      )}
    </div>
  );
};
