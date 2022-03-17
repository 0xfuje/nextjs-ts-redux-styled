import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'



function Counter() {
    const counterState = useAppSelector((state: RootState) => state.counter)
    const { value } = counterState;

    const dispatch = useAppDispatch();
    const handleIncrement = () => dispatch(increment());
    const handleIncrementByAmount = (amount: number) => dispatch(incrementByAmount(amount));
    const handleDecrement = () => dispatch(decrement());

    return (
        <StyledCounter className='Counter'>
            <button onClick={() => handleDecrement()}>-</button>
            <h1>{value}</h1>
            <button onClick={() => handleIncrement()}>+</button>
        </StyledCounter>
    )
}

const StyledCounter = styled.div`
    
`

export default Counter