import { forwardRef } from 'react';
import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper';
import { Input, InputProps } from './Input';

export type InputFieldProps = InputProps & FieldWrapperPassThroughProps;
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, description, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error} description={description}>
        <Input {...props} ref={ref} />
      </FieldWrapper>
    );
  }
);

InputField.displayName = 'Input';
