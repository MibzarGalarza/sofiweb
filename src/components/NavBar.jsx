import React from 'react'

const NavBar = () => {
    return (
        <header className='relative flex align-middle justify-center items-center p-5 bg-red-400 h-24 w-screen'>
            <nav className='space-x-4'>
                <a href="/">SERVICIOS</a>
                <a href="/">PORTAFOLIO</a>
                <a href="/">IMAGEN</a>
                <a href="/">NOSOTROS</a>
                <a href="/">CONTACTO</a>
            </nav>
        </header>
    )
}

export default NavBar
