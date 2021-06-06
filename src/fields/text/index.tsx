import React from 'react';
import { WrappedFieldProps, Field } from 'redux-form';
import { IconName, InputGroup } from '@blueprintjs/core';

interface OwnProps {
    label?: string;
    placeholder?: string;
    leftIcon?: IconName;
}

const CurrentComponent: React.FC<OwnProps & WrappedFieldProps> = ({ input: restinput, ...rest }) => {
    return <InputGroup {...restinput} {...rest} />;
};

interface Prpops extends OwnProps {
    name?: string;
}

export const BpFilterTextField: React.FC<Prpops> = ({ ...props }) => {
    return <Field component={CurrentComponent} {...props} />;
};
