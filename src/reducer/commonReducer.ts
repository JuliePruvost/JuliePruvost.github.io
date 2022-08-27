import { ITypedAction, SET, CLEAR } from "./commonAction";

export type TypedActionReducer<IContextType> = (
    state: IContextType,
    action: ITypedAction<Partial<IContextType>>
) => IContextType

export function createBasicReducer<IContextType>(): TypedActionReducer<IContextType> {
    return (
        state: IContextType,
        action: ITypedAction<Partial<IContextType>>
    ): IContextType => {
        switch (action.type) {
            case SET:
                return { ...state, ...action.payload };
            default:
                console.error("Reducer can't handle non SET action.", action);
                return state;
        }
    };
}

export function createClearableReducer<IContextType>(
    initialState: IContextType
): TypedActionReducer<IContextType> {
    return (
        state: IContextType,
        action: ITypedAction<Partial<IContextType>>
    ): IContextType => {
        switch (action.type) {
            case SET:
                return { ...state, ...action.payload };
            case CLEAR:
                return { ...initialState, ...action.payload };
            default:
                console.error(
                    "Reducer can only handle SET/CLEAR action.",
                    action
                );
                return state;
        }
    };
}
