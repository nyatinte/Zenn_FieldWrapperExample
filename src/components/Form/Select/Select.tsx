import { ComponentPropsWithRef, FC, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectOption<T extends string = string> = {
  value: T;
  label: string;
};
export type SelectOptions<T extends string = string> = SelectOption<T>[];
export type SelectProps = ComponentPropsWithRef<'select'> & {
  options: SelectOptions;
};
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, ...props }, ref) => {
    return (
      <select
        className={twMerge(
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
          className
        )}
        {...props}
        ref={ref}
      >
        <option selected>未選択</option>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';
