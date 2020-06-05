import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import logo from './static/logo.png'

type Props = {
  title?: string
}



const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HeaderElement>
        <NavMenu>
          <Link href="/">
            <Title>Home</Title>
          </Link>
          <Link href="/create">
            <Title>Create</Title>
          </Link>
        </NavMenu>
    </HeaderElement>
    <Container>{children}</Container>
  </div>
)
export default Layout

const HeaderElement = styled.header`
    height: 50px;
    border-bottom: 1px palevioletred solid;
    background: papayawhip;
`
const NavMenu = styled.nav`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: start;
`

const Title = styled.p`
    font-weight: bold;
    font-size: 1em;
    color: palevioletred;
    margin: 10px;
    cursor: pointer;
`

const Container = styled.div`
    background: #f3f3f3;
    padding 10px;
`