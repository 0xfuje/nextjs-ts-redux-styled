import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../app/hooks'

interface ComponentProps {
    name: string,
}

function Component({name}: ComponentProps) {
    return (
        <StyledComponent className='Component'>
            {name}
        </StyledComponent>
    )
}

const StyledComponent = styled.div`
    font-size: ${props => props.theme.font.size.alpha};
`

export default Component