export type OrderDirection = 'asc' | 'desc';

export interface ValueOption<TValue = string> {
    value: TValue;
    text: string;
}
