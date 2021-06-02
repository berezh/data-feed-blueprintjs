import React from 'react';
import { WrappedFieldProps, BaseFieldProps, Field } from 'redux-form';
import { IconName, InputGroup } from '@blueprintjs/core';

interface OwnProps {
    label?: string;
    placeholder?: string;
    leftIcon?: IconName;
}

export interface FieldFormTextProps extends BaseFieldProps<OwnProps>, OwnProps {}

type CurrentComponentProps = OwnProps & WrappedFieldProps;

const CurrentComponent: React.FC<CurrentComponentProps> = ({ input: restinput, ...rest }) => {
    return <InputGroup {...restinput} {...rest} />;
};

interface Prpops extends OwnProps {
    name?: string;
}

export const FilterTextField: React.FC<Prpops> = ({ ...props }) => {
    return <Field component={CurrentComponent} {...props} />;
};
