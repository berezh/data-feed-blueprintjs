import React from 'react';
import { Field, WrappedFieldProps } from 'redux-form';

const CurrentComponent: React.FC<WrappedFieldProps> = ({ input }) => {
    return <input type="hidden" {...input} />;
};

interface Prpops {
    name: string;
}

export const FilterHiddenField: React.FC<Prpops> = ({ name, ...props }) => {
    return <Field name={name} component={CurrentComponent} {...props} />;
};
