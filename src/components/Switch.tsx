import React, { useReducer } from 'react'

enum SwitchActionsEnum {
    'ONE' = 'one',
    'TWO' = 'two'
};

type SwitchAction = {
    type: SwitchActionsEnum
}
type SwitchState = {
    enabled: boolean;
}


const initialState: SwitchState = {
    enabled: true
}


function reducerFn(action: SwitchAction, state: any) {
    switch(action.type) {
        case SwitchActionsEnum.ONE:
            return { enabled: true };
        case SwitchActionsEnum.TWO:
            return { enabled: false };
        default:
            return state;
    }
}

export const Switch = () => {
    const [ state, dispatch ] = useReducer(reducerFn, initialState);

    return (
        <div>
            {state && state.enabled && 'enabled'}
            <button
                onClick={ e => dispatch({type: SwitchActionsEnum.ONE}) }
                className={'btn btn--a'}>
                Button A
            </button>
            <button
                onClick={ e => dispatch({type: SwitchActionsEnum.TWO})}
                className={'btn btn--b'}>
                Button B
            </button>

        </div>
    )
}
