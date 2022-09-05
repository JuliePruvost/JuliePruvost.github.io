import React, { createContext, useReducer } from "react";
import { ITypedAction } from "reducer/commonAction";
import { createBasicReducer, TypedActionReducer } from "reducer/commonReducer";

type TypedActionContext<IContextType> = {
    state: IContextType,
    dispatch: React.Dispatch<ITypedAction<Partial<IContextType>>>
}

export function createTypedActionContext<IContextType> (initialState: IContextType) {
    return createContext<TypedActionContext<IContextType>>({ state: initialState, dispatch: () => null });
}

export function createTypedActionContextProvider<IContextType>(
    initialState: IContextType,
    context: React.Context<TypedActionContext<IContextType>>,
    reducer: TypedActionReducer<IContextType> = createBasicReducer<IContextType>()): React.FC<{children: React.ReactNode}> {

    return props => {
        const [state, dispatch] = useReducer(reducer, initialState);
        return (
            <context.Provider value={{ state, dispatch }}>
                {props.children}
            </context.Provider>
        );
    };
}