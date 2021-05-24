import React from 'react'
import styled from "styled-components";


export default function JobCard() {
    return (
        <Container>
            <Avatar>
                <img src="/favicon.png" alt="" />

            </Avatar>
            <Content>
                <h1>sdsdbb</h1>
                <h3>dsdvbb</h3>
                <h3>dsdvbb</h3>
                <p>cxbdfsnsgmsg</p>

            </Content>


        </Container>
       
    )
}

const Container = styled.div`
height: 130px;
width: calc(420px + 2vw);
background-color: gray;
font-size: 14px;
font-family: Arial, Helvetica, sans-serif;
line-height: 5px;
cursor: pointer;
padding: 8px;
display: flex;

&:hover{
    background-color: #beb9b9;
}

img{
    width: 70px;
    height: 70px;
    margin-right: 1rem;
}




`
const Avatar=styled.div`


`
const Content=styled.div`


`
