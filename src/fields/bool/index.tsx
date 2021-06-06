import React, { useMemo } from 'react';
import ValueOption from '../../interfaces/value-option';
import { BpFilterRadioField } from '../radio';

interface Prpops {
    name: string;
    label?: string;
}

export const BpFilterBoolField: React.FC<Prpops> = props => {
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

    return <BpFilterRadioField options={yesNoOptions as any} {...props} />;
};
