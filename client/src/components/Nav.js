import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/css'
import styled from '@emotion/styled'

function NavBar() {

    return (
        <NavContainer>
            <ButtonContainer>
                <Link to="/">
                    <FontAwesomeIcon className={IconStyle} icon={faPaw} name='home'></FontAwesomeIcon>
                </Link>
                <NavHeader>Woofer</NavHeader>
                <div>
                    <Link className={AltLinks} name='login' to="/login">Login</Link>
                    <Link className={AltLinks} name='register' to="/register">Register</Link>
                </div>
            </ButtonContainer>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    padding-top: 1rem;
    width: 100%;
    height: auto;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    flex-direction: row;
`

const IconStyle = css`
    color: #fff;
    background-color: #334d4d;
    font-size: 2.2rem;
    cursor: pointer;
    text-align: center;

    &:hover {
    color: #8cd9b3;
    }
`

const NavHeader = styled.p`
    font-size: 2.5rem;
    font-family: sans-serif;
    padding-left: 8rem;
    color: #fff;
    margin: 0;
    /* margin-bottom: .2rem; */
`

const AltLinks = css`
    padding: 0px 8px;
    outline: none;
    text-decoration: none;
    font-family: sans-serif;
    font-size: 27px;
    color: #fff;

    &:hover {
    color: #8cd9b3;
    }
`

export default NavBar
