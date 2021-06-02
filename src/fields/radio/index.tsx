import React, { useCallback } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { ButtonGroup, Button } from '@blueprintjs/core';
import { ValueOption } from '../../interfaces';

import './index.scss';

interface OwnProps {
    options: ValueOption[];
    label?: string;
}

type CurrentComponentProps = OwnProps & WrappedFieldProps;

const CurrentComponent: React.FC<CurrentComponentProps> = ({
    label,
    input: { value: inputValue, name: inputName, onChange },
    options,
}) => {
    const handleClick = useCallback(
        (value: string | number | boolean) => {
            onChange(value === inputValue ? '' : value);
        },
        [inputValue],
    );

    return (
        <div className="filter-radio">
            <input type="hidden" name={inputName} value={inputValue} />
            {label ? <div className="filter-radio__label">{label}</div> : null}
            <ButtonGroup>
                {options.map(({ value, text }, i) => (
                    <Button small key={i} onClick={() => handleClick(value)} active={value === inputValue}>
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

export const FilterRadioField: React.FC<Prpops> = props => {
    return <Field component={CurrentComponent} {...props} />;
};
