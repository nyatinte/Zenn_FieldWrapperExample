import { ComponentPropsWithRef, forwardRef } from 'react';

export type InputProps = ComponentPropsWithRef<'input'>;
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      className='block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = 'Input';
