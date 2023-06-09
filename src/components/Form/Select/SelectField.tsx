import { forwardRef } from 'react';
import { FieldWrapper, FieldWrapperPassThroughProps } from '../FieldWrapper';
import { Select, SelectProps } from './Select';

export type SelectFieldProps = SelectProps & FieldWrapperPassThroughProps;
export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, description, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error} description={description}>
        <Select {...props} ref={ref} />
      </FieldWrapper>
    );
  }
);

SelectField.displayName = 'Select';
