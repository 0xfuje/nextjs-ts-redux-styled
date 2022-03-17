import type { NextPage } from 'next'
import styled from 'styled-components'
import Counter from '../components/Counter'
import Component from '../components/Component'

const Home: NextPage = () => {
    return (
        <StyledHome className='Home'>
            <Component name="County boi" />
            <Counter />
        </StyledHome>
    )
}

const StyledHome = styled.div`
    margin: 0 auto;
`

export default Home
