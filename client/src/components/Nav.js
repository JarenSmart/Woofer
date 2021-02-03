import React, { useState } from 'react'
import { css } from '@emotion/css'

function NavBar() {
    const [activeItem, setActiveItem] = useState('')

    const itemClickHandler = (e, {name}) => setActiveItem(name)

    return (
        <div css={NavContainer}>
            <div>
                <div>
                    <button name='home' active={activeItem === 'home'} onClick={itemClickHandler}>Home</button>
                </div>
                <div>
                    <button name='login' active={activeItem === 'login'} onClick={itemClickHandler}>Login</button>
                    <button name='register' active={activeItem === 'register'} onClick={itemClickHandler}>Register</button>
                </div>
            </div>
        </div>
    )
}

const NavContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export default NavBar
