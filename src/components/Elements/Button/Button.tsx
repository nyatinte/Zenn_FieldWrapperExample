import { ComponentPropsWithRef, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const Button: FC<ComponentPropsWithRef<'button'>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={twMerge(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
