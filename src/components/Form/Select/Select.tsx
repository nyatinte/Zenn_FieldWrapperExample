import { ComponentPropsWithRef, FC, forwardRef } from 'react';

export type SelectOption<T = string> = {
  value: T;
  label: string;
};
export type SelectOptions<T = string> = SelectOption<T>[];
export type SelectProps = ComponentPropsWithRef<'select'> & {
  options?: SelectOptions;
};
export const Select: FC<SelectProps> = forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ options, ...props }, ref) => {
  return (
    <select
      className='block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
      {...props}
      ref={ref}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = 'Select';
