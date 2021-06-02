import React from 'react';
import { FilterTextField } from '../text';

interface Prpops {
    name?: string;
    label?: string;
    placeholder?: string;
}

export const FilterSearchField: React.FC<Prpops> = ({ name = 'search', placeholder, ...props }) => {
    return <FilterTextField placeholder={placeholder || 'Search'} leftIcon="search" name={name} {...props} />;
};
