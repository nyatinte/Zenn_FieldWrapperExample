import { FC, ReactElement, cloneElement, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldWrapperProps = {
  label?: string;
  error?: string;
  description?: string;
  className?: string;
  children: ReactElement;
};
export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'children' | 'className'
>;
export const FieldWrapper: FC<FieldWrapperProps> = forwardRef<
  HTMLElement,
  FieldWrapperProps
>(({ label, error, className, description, children }, ref) => {
  return (
    <div>
      <label className={twMerge('block', className)}>
        {label}
        {cloneElement(children, { ref })}
      </label>
      {description && <p className='text-gray-500'>{description}</p>}
      {error && (
        <div role='alert' className='text-red-500'>
          {error}
        </div>
      )}
    </div>
  );
});

FieldWrapper.displayName = 'FieldWrapper';
