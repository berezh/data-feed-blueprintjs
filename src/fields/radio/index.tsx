import React, { useCallback } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { ButtonGroup, Button } from '@blueprintjs/core';
import { ValueOption } from 'data-feed';

import './index.scss';

interface OwnProps {
    options: ValueOption[];
    label?: string;
    small?: boolean;
}

const CurrentComponent: React.FC<OwnProps & WrappedFieldProps> = ({
    label,
    input: { value: inputValue, name: inputName, onChange },
    options,
    small,
}) => {
    const handleClick = useCallback(
        (value: string | number | boolean) => {
            onChange(value === inputValue ? '' : value);
        },
        [inputValue]
    );

    return (
        <div className="df-bp-field-radio">
            <input type="hidden" name={inputName} value={inputValue} />
            {label ? <div className="df-bp-field-radio__label">{label}</div> : null}
            <ButtonGroup>
                {options.map(({ value, text }, i) => (
                    <Button small={small} key={i} onClick={() => handleClick(value)} active={value === inputValue}>
                        {text}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    );
};

interface Prpops extends OwnProps {
    name: string;
}

export const BpFilterRadioField: React.FC<Prpops> = (props) => {
    return <Field component={CurrentComponent} {...props} />;
};
