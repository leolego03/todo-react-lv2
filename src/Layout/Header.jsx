import React from 'react'
import { styled } from 'styled-components'

const Headerbox = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
margin-top: 10px ;
margin-bottom: 15px;
padding: 12px;
border: 1px solid black;
align-items: center;
`
const H2 = styled.h2`
display: flex;
justify-content: center;

`

function Header() {

    return (
        <Headerbox>
            <H2> TodoList  </H2>
        </Headerbox>
    )
}

export default Header