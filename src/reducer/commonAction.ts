export const SET = 'SET';
export const CLEAR = 'CLEAR';

export interface ITypedAction<T> {
    type: string;
    payload?: T
};

export const createSetAction = <T>(payload: Partial<T>): ITypedAction<Partial<T>> => ({
    type: SET,
    payload: payload
});

export const createClearAction = <T>(payload: Partial<T>): ITypedAction<Partial<T>> => ({
    type: CLEAR,
    payload: payload
});