import React, { useCallback, useMemo } from 'react';
import { Field, WrappedFieldProps } from 'redux-form';
import { MenuItem, Button, ButtonGroup } from '@blueprintjs/core';
import { IItemModifiers, IItemRendererProps, Select } from '@blueprintjs/select';
import { ValueOption } from 'data-feed';

const OptionSelect = Select.ofType<ValueOption>();

export interface BpFilterSelectItem {
    item: ValueOption;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    modifiers: IItemModifiers;
}

interface OwnProps {
    options: ValueOption[];
    placeholder?: string;
    valueField?: string;
    renderItem?: (options: BpFilterSelectItem) => React.ReactElement;
}

function getValue(option: any, valueField?: string): any {
    return option ? option[valueField || 'value'] : undefined;
}

const CurrentComponent: React.FC<OwnProps & WrappedFieldProps> = ({
    input: { value, onChange },
    options,
    placeholder,
    valueField,
    renderItem,
}) => {
    const activeItem = useMemo(() => {
        return options.find((x) => getValue(x, valueField) === value);
    }, [value]);

    const caption = useMemo(() => {
        return activeItem ? activeItem.text : placeholder || 'Select';
    }, [activeItem, placeholder]);

    const noResults = useMemo(() => {
        return <MenuItem disabled={true} text={'No Results'} />;
    }, []);

    const handleItemRenderer = useCallback(
        (option: ValueOption, { handleClick, modifiers }: IItemRendererProps) => {
            if (!modifiers.matchesPredicate) {
                return null;
            }

            if (renderItem) {
                return renderItem({ item: option, onClick: handleClick, modifiers });
            }

            return (
                <MenuItem
                    active={modifiers.active}
                    disabled={modifiers.disabled}
                    key={getValue(option, valueField)}
                    onClick={handleClick}
                    text={option.text}
                />
            );
        },
        [valueField, renderItem]
    );

    const handleInterPredicate = useCallback((query, item) => {
        return `${item.text.toLowerCase()}`.indexOf(query.toLowerCase()) >= 0;
    }, []);

    // const handleClose = useCallback((event: React.MouseEvent<HTMLElement>) => {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     onChange('');
    // }, []);

    return (
        <OptionSelect
            items={options}
            activeItem={activeItem}
            filterable={false}
            itemRenderer={handleItemRenderer}
            itemPredicate={handleInterPredicate}
            onItemSelect={(item) => onChange(getValue(item, valueField))}
            noResults={noResults}
        >
            <ButtonGroup style={{ width: '100%', display: 'flex' }}>
                {/* {value ? <Button icon="small-cross" onClick={handleClose} /> : null} */}
                <Button style={{ flex: 1 }} alignText="left" text={caption} rightIcon="caret-down" />
            </ButtonGroup>
        </OptionSelect>
    );
};

interface Prpops extends OwnProps {
    name: string;
}

export const BpFilterSelectField: React.FC<Prpops> = (props) => {
    return <Field component={CurrentComponent} {...props} />;
};
