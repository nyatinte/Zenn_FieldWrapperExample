import { forwardRef } from 'react';
import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper';
import { Input, InputProps } from './Input';

export type InputFieldProps = InputProps & FieldWrapperPassThroughProps;
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, className, description, ...props }, ref) => {
    return (
      <FieldWrapper
        label={label}
        error={error}
        description={description}
        className={className}
      >
        <Input {...props} ref={ref} />
      </FieldWrapper>
    );
  }
);

InputField.displayName = 'Input';
