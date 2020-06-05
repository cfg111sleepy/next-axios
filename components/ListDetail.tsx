import * as React from 'react'

import { Post } from '../interfaces'
import styled from 'styled-components'

type ListDetailProps = {
  item: Post
}

const ListDetail: React.FunctionComponent<ListDetailProps> = ({
  item
}) => (
  <LP>
      <ArticleContent>
          <ArticleMainText>
              <h1>Detail for: {item.title}</h1>
              <p>{item.body}</p>
          </ArticleMainText>
          <Col>
              <Image src='https://images.unsplash.com/photo-1583864442126-cf72052ced87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
          </Col>
      </ArticleContent>
  </LP>
)

export default ListDetail


const ArticleContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ArticleMainText = styled.div`
    display: flex;
    flex-direction: column;
    p {
        color: $text-lt;
        font-family: sans-serif;
        font-size: 14px;
        line-height: 1.3;
        text-align: justify;
        width: 50%;
        margin: 0;
    }
    h1 {
        color: #373939;
        font-size: 40px;
        width: 72%;
        margin: 56px 0;
    }
`

const LP = styled.section`
    background: #fff;
    box-shadow: 0px 4px 16px 4px rgba(0,0,0,0.1);
    max-width: 940px;
    height: 500px;
    margin: auto;
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: scale(0.9);
`

const Col = styled.div`
    width: 55%;
    height: 450px;
    padding 20px;
`
const Image = styled.img`
    background: #ccc;
    width: 100%;
    height: 100%;
    object-fit: cover;
`