import React from 'react'

const NavBar = () => {
    const logoSOFI = "src/assets/Erick WEB/logosofi.png"

    return (
        <header className='absolute top-0 flex justify-center items-center p-5 h-24 bg-opacity-45 bg-red-300 w-screen'>
            <nav className='flex items-center space-x-4'>
                <a href="/">SERVICIOS</a>
                <a href="/Locacion">PORTAFOLIO</a>
                <a href="/" className=''>
                    <img className='h-20 w-auto' src={logoSOFI} alt="LOGOTIPO" />
                </a>
                <a href="/prueba">NOSOTROS</a>
                <a href="/">CONTACTO</a>
            </nav>
        </header>
    )
}

export default NavBar
