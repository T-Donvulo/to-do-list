import React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';

const Header = styled.header`
background: #C86FC9;
color: #D7C0D0;
text-align: center;
font-family: Arial, sans-serif;
letter-spacing: -1px;
padding: 0.5rem;

`

const Title = styled.h1`
font-family: Arial, sans-serif;
letter-spacing: -1px;

`

const Footer = styled.footer`
background: #D7C0D0;
color: #8E518D;
position:fixed;
bottom: 0;
left:0;
width:100%;
text-align: center;
`

const List = styled.ul`
list-style: none;
font-family: Arial, sans-serif;
display: flex;
width: 100%;
padding: 0;
margin: 0;
`



const LinkWrap = styled.li`
width: 50%;
`

const PAGE_TITLE_MAP = {
    'home': 'To-Do List',
    'add': 'Adding Item',
    'edit': 'Editing item',
}

const Home = (props) => {
    const { children, activePage = 'home' } = props;
    return (
        <>
            <Header>
                <Title>{PAGE_TITLE_MAP[activePage]}</Title>
            </Header>

            {children}

            <Footer>
                <nav>
                    <List>
                        <LinkWrap>
                            <Link fullWidth disabled={activePage === "home"} url="#/">
                               Back to Home
                         </Link>
      '                 </LinkWrap>


                        
                        <LinkWrap>
                            <Link fullWidth disabled={activePage === "add"} url="#/Add">
                                Add New Item
                        </Link>
                        </LinkWrap>
                    </List>
                </nav>

            </Footer>
        </>
    )

}

export default Home;