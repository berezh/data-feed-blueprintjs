import React, { useMemo } from 'react';
import ValueOption from '../../interfaces/value-option';
import { FilterRadioField } from '../radio';

interface Prpops {
    name: string;
    label?: string;
}

export const FilterBoolField: React.FC<Prpops> = props => {
    const yesNoOptions = useMemo<ValueOption<boolean>[]>(() => {
        return [
            {
                text: 'Yes',
                value: true,
            },
            {
                text: 'No',
                value: false,
            },
        ];
    }, []);

    return <FilterRadioField options={yesNoOptions as any} {...props} />;
};
