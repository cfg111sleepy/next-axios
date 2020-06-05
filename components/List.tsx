import * as React from 'react'
import ListItem from './ListItem'
import { Post } from '../interfaces'
import styled from 'styled-components'

type Props = {
  posts: Post[]
}

const List: React.FunctionComponent<Props> = ({ posts }) => (
  <UlElement>
    {posts.map((item) => (
        <ListItem key={item.id} data={item} />
    ))}
  </UlElement>
)

export default List

const UlElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`