import React from 'react';

import { BpFilterTextField } from '../text';

interface Prpops {
    name?: string;
    label?: string;
    placeholder?: string;
}

export const BpFilterSearchField: React.FC<Prpops> = ({ name = 'search', placeholder, ...props }) => {
    return <BpFilterTextField placeholder={placeholder || 'Search'} leftIcon="search" name={name} {...props} />;
};
