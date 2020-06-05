import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Post } from '../interfaces'

type Props = {
  data: Post
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
    <Link href="/posts/[id]" as={`/posts/${data.id}`}>
        <Card>
            <CardContainer>
                <CardHeader>
                    {data.title}
                </CardHeader>
            </CardContainer>
        </Card>
    </Link>
)

export default ListItem

const CardContainer = styled.div`
    padding : 2rem;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 1rem;
    position: relative;
    
`
const CardHeader = styled.h1`
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
`

const Card = styled.div`
    font-size: 10px;
    margin-bottom 20px;
    width: 70%;
    border-radius: 1rem;
    background: white;
    box-shadow: 4px 4px 15px rgba(#000, 0.15);
    position : relative;
    color: #434343;
    &::before {
        position: absolute;
        top:2rem;
        right:-0.5rem;
        content: '';
        background: #283593;
        height: 28px;
        width: 28px;
        transform : rotate(45deg);
    }
    &::after {
        position: absolute;
        content: 'Next/React SSR';
        top: 11px;
        right: -14px;
        padding: 0.5rem;
        width: 10rem;
        background: palevioletred;
        color: white;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        box-shadow: 4px 4px 15px rgba(26, 35, 126, 0.2);
    }
`