import React from 'react'
import styled from "styled-components";


export default function Title(props:any) {
    const {title} = props
    return (
        <div>
            <H1>{title}</H1>
        </div>
    )
}

const H1 = styled.h1`
color: #328ad1;
`